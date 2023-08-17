import api from './axios';

export const addTodo = async (taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail) => {
    try {
        const response = await api.post('/todo/add', { taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail });
        return response;
    } catch (error) {
        throw error;
    }
};

export const listTodo = async () => {
    try {
        return await api.get('/todo');
    } catch (error) {
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        return await api.post('/todo/delete ', { id });
    } catch (error) {
        throw error;
    }
};

export const detailTodo = async (id) => {
    try {
        return await api.get(`/todo/${id}`);
    } catch (error) {
        throw error;
    }
};

export const updateTodo = async (id, taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail) => {
    try {
        const response = await api.post(`/todo/${id}`, { taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail });
        return response;
    } catch (error) {
        throw error;
    }
};