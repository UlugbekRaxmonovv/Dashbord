import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Auth = () => {
    let isLogin = localStorage.getItem("token")
    return (
    isLogin ? <Outlet/> :  <Navigate  replace  to={'/'}/>
    );
}

export default Auth;
