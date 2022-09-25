import axios from 'axios';

axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

const api = axios.create({
  baseURL: 'https://',
  withCredentials: false,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-Store': 'default',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
