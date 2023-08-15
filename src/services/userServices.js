import api from './axios';

export const login = async (email, password) => {
  try {
    const response = await api.post('/api/login', { email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

