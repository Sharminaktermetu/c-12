import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Checkout = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('');
  const [process, setProcess] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [])
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    }
    else {
      setCardError('')
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcess(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'annonymus user',
            name: user?.displayName || 'unknown'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }
    setProcess(false)
    if (paymentIntent.status == "succeeded") {
      const transactionId = paymentIntent.id;
      const payment = {
        email: user?.email,
        itemsId: cart.map(item => item._id),
        cartItemsId: cart.map(item => item.itemId),
        cartItemsImage: cart.map(item => item.bannerImage),
        quantity: cart.length,
        status: 'pending',
        transactionId,
        price,

      }
      axiosSecure.post('/payment', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Payment successfully Done',
              showConfirmButton: false,
              timer: 1500
            })
            
          }
        })
    }
    console.log(paymentIntent);
  };

  return (
    <div className="w-9/12 mx-auto">
      <SectionTitle title={'Hurry up'} heading={"Pay Now"}></SectionTitle>
      <form onSubmit={handleSubmit} className="border p-5 rounded">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret || process} className="btn btn-info mt-9">
          Pay
        </button>
        {cardError && <p className="text-red-500">{cardError}</p>}
      </form>
    </div>
  );
};

export default Checkout;