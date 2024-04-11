import axios, { AxiosResponse } from 'axios';
import { getCurrentUser, logout } from './authService';
import { BASE_API_URL } from '../utilities/apiVariables';
import { User } from '../models/User';

export const API_BASE_URL = BASE_API_URL;
// const API_BASE_URL = 'https://congenial-space-spork-7xgqqxp74vpcx6w4-7081.app.github.dev';
// const API_BASE_URL = 'https://ec2-13-215-199-157.ap-southeast-1.compute.amazonaws.com';

const createHeader = async () => {
  let header = {
    'Content-Type': 'application/json',
    'Authorization': ''
  }
  let token = localStorage.getItem('ep-token');

  if (token) {
    try {
      const response: AxiosResponse | null = await getCurrentUser();
      if (response?.data) {
        header['Authorization'] = `Bearer ${token}`;
      }
    }
    catch (error) {
      throw error;
    }
  }

  return header;
}

export var headers = await createHeader();

const api = axios.create({
  baseURL: API_BASE_URL,
  headers
});

export const getAsync = async (url: string) => {
  try 
  {
    const response = await api.get(url);
    return response.data;
  } 
  catch (error) 
  {
    throw error;
  }
};

export const get = (url: string) => {
  return api
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

export const postAsync = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = (url: string, data: any) => {
  return api
    .post(url, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

export const put = async (url: string, data: any) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const del = async (url: string) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

