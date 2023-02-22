import Appoinment from "../Pages/Appoinment/Appoinment/Appoinment";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../LayOut/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'/reviews',
                element:<Reviews></Reviews>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])