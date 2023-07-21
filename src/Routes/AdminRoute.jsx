import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';



const AdminRoute = ({children}) => {
    const {user,loading} =useAuth();
    const location =useLocation()
    const [isAdmin,isAdminLoading]=useAdmin()
    
    if(loading || isAdminLoading){
    return (<div className='w-full m-auto text-center'>
         <span className="loading loading-ring loading-lg"></span>
    </div>);
    }
    if(user?.email && isAdmin){
        return children;
    }

    return  <Navigate to="/login" replace state={{ from: location }}></Navigate>
};

export default AdminRoute;