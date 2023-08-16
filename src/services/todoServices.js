import api from './axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const addTodo = async (taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail) => {
  try {
    const response = await api.post('/todo/add', { taskName, taskDecription, taskStatus, taskType, taskImportant, startDate, endDate, listDetail});
    return response;
  } catch (error) {
    throw error;
  }
};