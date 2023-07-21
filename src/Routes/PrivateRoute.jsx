
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const PrivateRoute = ({children}) => {
    const {user,loading} =useAuth();
    const location =useLocation()

    if(loading){
    return (<div className='w-full m-auto text-center'>
         <span className="loading loading-ring loading-lg"></span>
    </div>);
    }
    if(user?.email){
        return children;
    }

    return  <Navigate to="/login" replace state={{ from: location }}></Navigate>
};

export default PrivateRoute;