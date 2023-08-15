import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PublicRoute({ component: Component, restricted, ...props}) {
    const isAuthenticated = Cookies.get('token');
    return (
        isAuthenticated && restricted ? (
            <Navigate to="/" />
        ) : (
            <Component {...props} />
        )
    );
}

export default PublicRoute;