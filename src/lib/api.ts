import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //   withCredentials: true, // optional if you handle cookies/sessions
});

export default api;
