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
import MyPostedJobs from '../MyPostedJobs/MyPostedJobs';
import Profile from '../Profile/Profile';
import ViewApplications from '../ViewApplications/ViewApplications';


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
                loader: ({params}) => fetch(`https://career-code-server-zeta.vercel.app/jobs/${params.id}`)
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
                path: "/myPostedJobs",
                element: <PrivateRoutes>
                    <MyPostedJobs></MyPostedJobs>
                </PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },
            {
                path: "/applications/:id",
                element: <PrivateRoutes>
                    <ViewApplications></ViewApplications>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://career-code-server-zeta.vercel.app/applications/job/${params.id}`)
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