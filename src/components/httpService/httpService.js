import axios from 'axios';
import logService from './logService';

axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.response.use(null, (error) => {
  const expectedErrror =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrror) {
    logService.log(error);
    console.log('Loggin error', error);
    // toast.error("an unexpected error occurred");
    // or
    // toast("an unexpected error occurred");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
