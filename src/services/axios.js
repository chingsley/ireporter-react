import axios from 'axios';
import { getToken } from '../utilities/localStorage';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  // baseURL: 'https://ireporter-db.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
  const configInstance = { ...config };
  configInstance.headers['x-auth-token'] = getToken();
  return configInstance;
});

export default instance;
