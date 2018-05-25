import axios from 'axios';
import exceptionHandler from './exceptionHandler'

export default function axiosInterceptors() {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return exceptionHandler(error);
    }
  );
}

