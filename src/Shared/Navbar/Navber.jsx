import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ThemeContext } from "../../Layouts/ThemeContext";
import { FaEye } from "react-icons/fa";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log(console.log(error)) })
    }
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        toggleTheme();
    };
    const navli = <>
        <Link to="/"><li><a>Home</a></li></Link>

        <Link to="/instructors"><li><a>Instructors</a></li></Link>
        <Link to="/allclasses"><li><a>Classes</a></li></Link>
        

        {user ?
            <>
                <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
                {/* TODO :remove email from navbar */}
                <li> <button onClick={handleLogout}>Log out</button ></li>
            </>
            :
            <>
                <Link to="login"><li><a>Login</a></li></Link>
            </>
            
        }
        <Link ><li><button onClick={handleThemeToggle}>Toggle Theme<FaEye></FaEye> </button></li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/*  */}
                        {navli}


                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl"></a> */}
                <img src="https://cdn.dribbble.com/users/6171304/screenshots/14355123/creative_minimalist_logo_design-02_4x.jpg" alt="" className="w-24 h-24" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navli}
                    
                </ul>
            </div>
            <div className="navbar-end">
                {user && <img src={user.photoURL} title={user.displayName} className="w-10 h-10" />}
               
            </div>
        </div>
    );
};

export default Navber;