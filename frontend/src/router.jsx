import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import UserForm from "./views/UserForm";
import Users from "./views/Users";

const router = createBrowserRouter([
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
            }         
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