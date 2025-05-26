import React from 'react';
import { createBrowserRouter } from 'react-router';
import LootLayOut from '../LayOuts/LootLayOut';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';


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