
const ClassItem = ({classItem}) => {
  const {instructorName,bannerImage,ratings,enrollmentCount}=classItem
    return (
        <div className="card card-compact bg-base-100 shadow-xl space-x-5">
            <figure><img src={bannerImage} alt="Shoes" className="h-72"/></figure>
  <div className="card-body">
    <h2 className="card-title">{instructorName}</h2>
    
    <div className="card-actions justify-end">
    <p>Ratings:{ratings}</p>
      <button>Enroll: {enrollmentCount}</button>
    </div>
  </div>
        </div>
    );
};

export default ClassItem;