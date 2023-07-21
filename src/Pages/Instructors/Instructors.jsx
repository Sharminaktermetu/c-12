import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hooks/useAxiosSecure";


const Instructors = () => {
    const [axiosSecure]=useAxiosSecure()

    const { data:instructors = []} = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get(`/instructors`)
        return res.data
    })
    console.log(instructors);
    return (
        <div className="">
            {instructors.map(instructor=><div key={instructor._id} className="card card-side bg-base-100 shadow-xl my-10">
                <figure><img className="w-24 h-28" src={instructor.photoURL} alt=""/></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor.email}</h2>
                    <p>{instructor.name}</p>
                    
                </div>
                </div>
                )}
            
        </div>
    );
};

export default Instructors;