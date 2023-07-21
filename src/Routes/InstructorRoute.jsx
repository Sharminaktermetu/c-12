
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';



const InstructorRoute = ({children}) => {
    const {user,loading} =useAuth();
    const location =useLocation()
    const [isInstructor,isInstructorLoading]=useInstructor()
    
    if(loading || isInstructorLoading){
    return (<div className='w-full m-auto text-center'>
         <span className="loading loading-ring loading-lg"></span>
    </div>);
    }
    if(user?.email && isInstructor){
        return children;
    }

    return  <Navigate to="/login" replace state={{ from: location }}></Navigate>
};

export default InstructorRoute;