import axios from "axios";

const apiUrl = "https://prae-backend.onrender.com/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
