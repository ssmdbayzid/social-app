import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

import auth from '../firebase.init';
import Loading from '../component/Loading';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth)

    const location  = useLocation();

    if(loading) {
        return <Loading/>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;

