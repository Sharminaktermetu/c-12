import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const AllClass = ({ activity }) => {
  const { instructorName, bannerImage, ratings, enrollmentCount, price, availableSeats, id } = activity;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCart()
  const handleOrder = (activity) => {
    console.log(activity);
    const orderItem = { itemId: id, instructorName, bannerImage, price, email: user?.email, availableSeats }
    if (user) {
      fetch('https://summer-camp-server-alpha-jet.vercel.app/cart', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(orderItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `classe added to cart`,
              showConfirmButton: false,
              timer: 1500
            })
          }

        })

    }
    else {
      Swal.fire({
        title: 'Log in first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log in!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className={`card card-compact bg-base-100 shadow-xl space-x-5 ${availableSeats <= 0 ? 'bg-red-500' : ''}`}>
      <figure><img src={bannerImage} alt="Shoes" className="h-72" /></figure>
      <div className="card-body">
        <h2 className="card-title">{instructorName}</h2>
        <p>Ratings:{ratings}</p>
        <p>Enroll: {enrollmentCount}</p>
        <div className="flex font-bold">
          <p>Price:{price}</p>
          <p>Available Seats:{availableSeats}</p>
        </div>
        <div className="card-actions justify-end">



          <button
            className="btn btn-info"
            onClick={() => { handleOrder(activity) }}
            disabled={isAdmin || isInstructor || availableSeats<=0}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;