import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/LaodingPage/Loading';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();

    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;