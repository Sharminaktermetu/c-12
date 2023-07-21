import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [cart,refetch]=useCart()

    const total =cart.reduce((sum,item)=>item.price+sum, 0)
    const price =parseFloat(total.toFixed(2))
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://summer-camp-server-alpha-jet.vercel.app/cart/${item._id}`,{
                method:'DELETE',
                
             })
             .then(res=>res.json())
             .then(data=>{
                refetch()
                if (data.detetedCount>0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div>
            <div className='flex items-center space-x-8'>
                <h3 className='text-3xl font-semibold'>Total items :{cart.length}</h3>
                <h3 className='text-3xl font-semibold'>Total price : ${price}</h3>
                <Link to="/dashboard/payment"><button className='btn btn-sm btn-info'>pay</button></Link>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
      {cart.map((item,index)=><tr
        key={item._id}
        >
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.bannerImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
       
      
          <span className="badge badge-ghost badge-sm">{item.instructorName}</span>
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn bg-red-300 btn-xs">DELETE</button>
        </th>
      </tr>)}
 
  

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MySelectedClass;