import axios, { AxiosResponse } from 'axios';
import { User } from '../models/User';
import { BASE_API_URL } from '../utilities/apiVariables';

const API_URL = BASE_API_URL;
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('ep-token')}`
}

const api = axios.create({
    baseURL: API_URL,
    headers
  });

export const registerAsync = async (user: User) => {
    try {
        const response = await axios.post(`${API_URL}/api/user/register`, user);
        return response.data;
    }
    catch (error) {
        return error;
    }
};

export const logout = () => {
  localStorage.removeItem('ep-token');
  window.location.href = '../login';
};

export const getCurrentUser = async (): Promise<AxiosResponse | null>=> {
  const token = localStorage.getItem('ep-token');
  let result = null;

  if (token) {
      try {
          const response = await api.get('/api/user/getcurrentuser');
          if (response.status === 200) {
              result = response;
          }
      } 
      catch (error) {
        result = null;
      }
  }

  return result;
};
