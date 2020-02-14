import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/hy",
    // baseURL: "http://106.54.54.237:8000/data/hy",
    timeout: 50000
  });

  instance.interceptors.response.use( response => {
    return response.data;
  }, error =>  {
    console.log(error);
  });

  return instance(config);
}
