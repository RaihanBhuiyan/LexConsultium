import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import FrontendLayout from "./assets/components/FrontendLayout";
import Dashboard from "./views/Dashboard";
import Home from "./views/front/Home";
import About from "./views/front/About";
import Contact from "./views/front/Contact";
import Feature from "./views/front/Feature";
import Service from "./views/front/Service";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import UserForm from "./views/UserForm";
import Users from "./views/Users";
import BusinessType from "./assets/components/backend/BusinessType";
import BusinessTypeForm from "./assets/components/backend/BusinessTypeForm";
import LedgerType from "./assets/components/backend/LedgerType";
import LedgerTypeForm from "./assets/components/backend/LedgerTypeForm";
import Documents from "./assets/components/backend/Documents";
import DocumentsForm from "./assets/components/backend/DocumentsForm";
import DailyTransaction from "./assets/components/backend/DailyTransaction";
import DailyTransactionForm from "./assets/components/backend/DailyTransactionForm";
import WorkType from "./assets/components/backend/workType/WorkType";
import WorkTypeForm from "./assets/components/backend/workType/WorkTypeForm";
import WorkSchedule from "./assets/components/backend/workSchedule/WorkSchedule";
import WorkScheduleForm from "./assets/components/backend/workSchedule/WorkScheduleForm";
const router = createBrowserRouter([
    {
        path:'/',
        element: <FrontendLayout></FrontendLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },  
            {
                path: '/feature',
                element: <Feature></Feature>,
            }, 
            {
                path: '/service',
                element: <Service></Service>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },                                                 
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
                path: '/workSchedule',
                element: <WorkSchedule></WorkSchedule>
            },
            {
                path: '/workSchedule/new',
                element: <WorkScheduleForm key="create"></WorkScheduleForm>
            }, 
            {
                path: '/workSchedule/:id',
                element: <WorkScheduleForm key="update" />
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
                path: '/businessType/new',
                element: <BusinessTypeForm key="userCreate"/>
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
                path: '/ledgerType/new',
                element: <LedgerTypeForm key="userCreate"/>
            }, 
            {
                path: '/ledgerType/:id',
                element: <LedgerTypeForm key="userUpdate"/>
            }, 
            {
                path: '/workType',
                element: <WorkType></WorkType>
            },
            {
                path: '/workType/new',
                element: <WorkTypeForm key="create" />
            }, 
            {
                path: '/workType/:id',
                element: <WorkTypeForm key="update" />
            },               
            {
                path: '/documents',
                element: <Documents></Documents>
            },
            {
                path: '/documents/:id',
                element: <DocumentsForm key="userUpdate"/>
            },   
            {
                path: '/daily_transaction',
                element: <DailyTransaction></DailyTransaction>
            },
            {
                path: '/daily_transaction/:id',
                element: <DailyTransactionForm key="userUpdate"/>
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