import React, {useContext} from 'react';
import { Routes, Route,  } from 'react-router-dom';
import { Home, Login, Signup, Task, Profile } from "../pages";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRoute(props) {
    return (
        <Routes>
            {/* Public route */}
            <Route path="/login" element={<PublicRoute component={Login} restricted={true} />} />
            <Route path="/signup" element={<PublicRoute component={Signup} restricted={true} />} />

            {/* Private route */}
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route path="/task/:id/" element={<PrivateRoute component={Task} />} />
            <Route path="/profile" element={<PrivateRoute component={Profile} />} />


            <Route path="*" element={<PublicRoute component={Login} restricted={true} />} />
        </Routes>
    )
}

export default AppRoute;