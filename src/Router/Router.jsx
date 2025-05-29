import React from 'react';
import { createBrowserRouter } from 'react-router';
import LootLayOut from '../LayOuts/LootLayOut';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/JobsDetails/JobDetails';
import JobApply from '../Pages/JobApply/JobApply';
import PrivateRoutes from '../routes/PrivateRoutes';
import MyApplication from '../Pages/MyApplication/MyApplication';
import AddJob from '../Pages/AddJob/AddJob';


const router = createBrowserRouter([
    {
        path: '/',
        element: <LootLayOut></LootLayOut>,
        children:[
            {
                index: true,
                element: <Home></Home>
            }, 
            {
                path: "/jobs/:id",
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoutes>
                    <JobApply></JobApply>
                </PrivateRoutes>,
            },
            {
                path: "/myApplication",
                element: <PrivateRoutes>
                    <MyApplication></MyApplication>
                </PrivateRoutes>
            },
            {
                path: "/addJob", 
                element: <PrivateRoutes>
                    <AddJob></AddJob>
                </PrivateRoutes>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    }
])

export default router;