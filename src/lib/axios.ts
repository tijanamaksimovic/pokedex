import Axios from 'axios';
import { API_URL } from '@/config';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response.data.results;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);
    return Promise.reject(error);
  }
);
