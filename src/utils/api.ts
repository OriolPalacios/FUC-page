import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BASE_URL_TABLES,
  headers: {'xc-token': import.meta.env.NOCODB_KEY_API}
});

export default api;