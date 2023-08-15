import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateRoute({ component: Component, ...props }) {
    const isAuthenticated = Cookies.get('token');
    if (!isAuthenticated) {
        return (<Navigate to="/login/" />)
    }

    return (
        <Component {...props} />
    );
}

export default PrivateRoute;