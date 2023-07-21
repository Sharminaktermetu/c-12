import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import PopularClass from "../Pages/Home/PopularClass/PopularClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Dashboard/MySelectedClass/MySelectedClass";
import AllUser from "../Dashboard/MySelectedClass/AllUser/AllUser";
import AddaClass from "../Dashboard/Addaclass/AddaClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import MyAddedClass from "../Dashboard/MyAddedClass/MyAddedClass";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import Instructors from "../Pages/Instructors/Instructors";
import ManageClass from "../Dashboard/ManageClass/ManageClass";
import Feedback from "../Dashboard/ManageClass/Feedback";
import ErrorPage from "../Pages/Errorpage.jsx/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
        {
          path:"allclasses",
          element:<AllClasses></AllClasses>
        },
        {
          path:"feedback",
          element:<Feedback></Feedback>
        },
        {
          path:"dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
            // student route
            {
              path:"selectedclass",
              element:<MySelectedClass></MySelectedClass>
            },
            {
              path:"payment",
              element:<Payment></Payment>
            },
            {
              path:"paymenthistory",
              element:<PaymentHistory></PaymentHistory>
            },
            // admin route
            {
              path:"alluser",
              element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
              path:"manageclass",
              element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            // instructor route
            {
              path:"addaclass",
              element:<InstructorRoute><AddaClass></AddaClass></InstructorRoute>

            },
            {
              path:"myaddcllass",
              element:<InstructorRoute><MyAddedClass></MyAddedClass></InstructorRoute>

            }
          ]
        }
      ]
    },
  ]);
  
  export default router;