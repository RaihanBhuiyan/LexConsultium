import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import FrontendLayout from "./assets/components/FrontendLayout";
import Dashboard from "./views/Dashboard";
import Home from "./views/front/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import UserForm from "./views/UserForm";
import Users from "./views/Users";
import BusinessType from "./assets/components/backend/BusinessType";
import BusinessTypeForm from "./assets/components/backend/BusinessTypeForm";
import LedgerType from "./assets/components/backend/LedgerType";
import LedgerTypeForm from "./assets/components/backend/LedgerTypeForm";

const router = createBrowserRouter([
    {
        path:'/',
        element: <FrontendLayout></FrontendLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            }
        ],
    },
    {
        path: '/',
        element: <DefaultLayout></DefaultLayout>,
        children:[
            {
                path: '/',
                element:<Navigate to={'/users'} />
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/users',
                element: <Users></Users>
            },   
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
            {
                path: '/businessType',
                element: <BusinessType></BusinessType>
            },   
            {
                path: '/businessType/:id',
                element: <BusinessTypeForm key="userUpdate"/>
            }, 
            {
                path: '/ledgerType',
                element: <LedgerType></LedgerType>
            },
            {
                path: '/ledgerType/:id',
                element: <LedgerTypeForm key="userUpdate"/>
            },                                 
        ]        
    },
    {
        path: '/',
        element: <GuestLayout></GuestLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }           
        ]
    },    
    {
        path: '*',
        element: <NotFound></NotFound>
    } 
]) 

export default router;