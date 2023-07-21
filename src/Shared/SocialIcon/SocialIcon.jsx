import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialIcon = () => {
  const { googleLog } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLog()
    .then((result)=>{
      const loggedUser =result.user;
      console.log(loggedUser);
      const savedUser= {name:loggedUser.displayName, email:loggedUser.email}
      fetch('https://summer-camp-server-alpha-jet.vercel.app/user',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(savedUser)
      })

        .then(res => res.json())
        .then(() => {

             Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'User create successfully',
               showConfirmButton: false,
               timer: 1500
             }) 
             navigate(from, { replace: true });
          
        })
     
  })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <div className="divider">
        <h2>or login with</h2>
      </div>
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        <FaGoogle />
      </button>
      <div className="divider"></div>
    </div>
  );
};

export default SocialIcon;
