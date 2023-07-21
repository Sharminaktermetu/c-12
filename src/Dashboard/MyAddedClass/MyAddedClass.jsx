import useAddclass from "../../hooks/useAddclass";


const MyAddedClass = () => {
    // Specify the instructor email
    const { classes, isLoading } = useAddclass();
  
    console.log(classes);
    if (isLoading) {
      return <div>Loading...</div>; // Show a loading state
    }
  
    return (
        <div>
        
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Instructor Name</th>
        <th>Class Name</th>
        <th>Status</th>
        <th>Available Seats</th>
        <th>Total Enroll</th>
        <th>Feedback</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {classes.map((item,index) => (
            <tr key={item._id}>
            <th>
            {index+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.bannerImage} />
                  </div>
                </div>
                  <div className="font-bold">{item.instructorName}</div>
               
              </div>
            </td>
            <td>
              {item.className}
              
            </td>
           
            <td className="text-red-400 font-bold">{item.status}</td>
            <td>{item.availableSeats}</td>
            <td>0</td>
            <td>No fidback</td>
            <td><button className="btn btn-info btn-sm">Update</button></td>
             
          </tr>
        ))}
    
     

    </tbody>
  </table>
</div>
      </div>
    );
};

export default MyAddedClass;