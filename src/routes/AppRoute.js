import React, {useContext} from 'react';
import { Routes, Route,  } from 'react-router-dom';
import { Home, Login, Signup } from "../pages";
import Cookies from 'js-cookie';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRoute(props) {
    return (
        <Routes>
            <Route path="/login" element={<PublicRoute component={Login} restricted={true} />} />
            <Route path="/signup" element={<PublicRoute component={Signup} restricted={true} />} />
            <Route path="/" element={<PrivateRoute component={Home} />}  />
        </Routes>
    )
}

export default AppRoute;