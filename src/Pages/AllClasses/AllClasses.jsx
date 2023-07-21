import useClasses from "../../hooks/useClasses";
import AllClass from "./AllClass";



const AllClasses = () => {

  const [activities]=useClasses();
    return (
        <div>
           <div className="grid grid-cols-3 gap-10 my-10">
                {activities.map((activity) => (<AllClass key={activity.enrollmentCount} activity={activity}></AllClass>))}
           </div>
        </div>
    );
};

export default AllClasses;