import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center p-12">
        <div className="error-page">
      <img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="404 Error" className="error-image w-9/12 mx-auto" />

      {/* <p className="error-message">The requested page could not be found.</p> */}
      <Link to="/" className="btn btn-lg btn-error my-4">Back to Home</Link>
    </div>
        </div>
    );
};

export default ErrorPage;