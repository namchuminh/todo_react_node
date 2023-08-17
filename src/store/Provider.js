import React, { useState, useEffect } from 'react';
import Context from './Context';
import { login, register } from '../services/userServices'
import { listTodo } from '../services/todoServices';
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';

function Provider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [todo, setTodo] = useState([]);

    useEffect(()=> {
        const tokenValue = Cookies.get('token');
        setToken(tokenValue)

        getTodo();
    },[token])

    const getTodo = async () => {
        try {
            const response = await listTodo();
            if (response.status == 200 && response.data) {
                setTodo(response.data.todo)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    const addTodoList = (newTodo) => {
        setTodo([newTodo,...todo])
    }

    const removeTodo = (id) => {
        const filteredTodos = todo.filter((item) => item.id !== id);
        setTodo(filteredTodos);
    }

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            if (response.data && response.status == 200) {
                Cookies.set('token', response.data.access_token);
                Cookies.set('refresh_token', response.data.refresh_token);
                toast.success("Đăng nhập thành công!");
                setIsLoggedIn(true);
            }
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }

    const handelRegister = async (fullname, username, password, repassword) => {

        if(fullname == "" || username == "" || password == "" || repassword == ""){
            toast.error("Vui lòng nhập đủ thông tin!")
            return;
        }

        try{
            const response = await register(fullname, username, password, repassword);
            if (response.data && response.status == 201) {
                toast.success(response.data.message);
                return;
            }
        }catch(error){
            toast.error(error.response.data.error)
            return;
        }
    }

    const handelLogout = async () => {
        Cookies.remove('token');
        Cookies.set('token', '');
        setToken('')
        setIsLoggedIn(false);
        toast.success("Đăng xuất thành công!");
    }

    return (
        <Context.Provider value={{ handleLogin, isLoggedIn, token, handelLogout, handelRegister, todo, removeTodo, addTodoList }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;