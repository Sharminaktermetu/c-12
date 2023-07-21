import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const [axiosSecure]=useAxiosSecure()
    const{user}=useAuth()
    const { data: payments = [] } = useQuery(['payment'], async () => {
        const res = await axiosSecure.get(`/payment/${user.email}`)
        return res.data
    })
    console.log(payments);
    return (
        <div>
        
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Quantity</th>
        <th>Tramsaction Id</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments.map((payment,index)=><tr key={payment._id} className="bg-base-200">
        <th>{index+1}</th>
        <td><img src={payment.cartItemsImage} alt="" /></td>
        <td>{payment.email}</td>
        <td>{payment.quantity} class</td>
        <td>{payment.transactionId}</td>
        
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;