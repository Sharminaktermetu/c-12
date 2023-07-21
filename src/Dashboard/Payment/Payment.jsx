import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API);
    const [cart]=useCart();
    const total =cart.reduce((sum,item)=>item.price+sum, 0)
    const price =parseFloat(total.toFixed(2))
    return (
        <div>
            
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;