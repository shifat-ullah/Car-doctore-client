import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/SignUP/Signup";
import CheckOut from "../components/home/checkout/CheckOut";
import Bookingnow from "../components/home/checkout/booking/Bookingnow";
import BookingCard from "../components/home/checkout/bookingcard/BookingCard";
import Services from "../components/home/services/Services";
import Privateroutes from "./Privateroutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/booking/:id",
        element: <Bookingnow></Bookingnow>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookingcard",
        element: <Privateroutes><BookingCard></BookingCard></Privateroutes>
      },

      {
        path: "/services",
        element: <Services></Services>
      },
    ],
  },
]);

export default router;