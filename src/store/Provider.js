import React, { useState, useEffect } from 'react';
import Context from './Context';
import { login } from '../services/userServices'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';

function Provider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    useEffect(()=> {
        const tokenValue = Cookies.get('token');
        setToken(tokenValue)
    },[token])

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            if (response.data && response.status >= 200 && response.status < 300) {
                Cookies.set('token', response.data.token);
                toast.success("Login successful!");
                setIsLoggedIn(true);
            }
        } catch (error) {
            toast.success(error.response.data.error)
        }
    }

    const handelLogout = async () => {
        Cookies.remove('token');
        Cookies.set('token', '');
        setToken('')
        setIsLoggedIn(false);
    }

    return (
        <Context.Provider value={{ handleLogin, isLoggedIn, token, handelLogout }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;