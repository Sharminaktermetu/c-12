import { Outlet } from "react-router-dom";
import Navber from "../../Shared/Navbar/Navber";
import Footer from "../../Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
          <Navber></Navber>
            <div className="min-h-[calc(100vh-64px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;