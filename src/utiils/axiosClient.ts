
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Criação da instância do axios com URL base
const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição para adicionar o token
axiosClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authInfo") || "{}").token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta para tratar erros 401
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirecionar para o login
      localStorage.removeItem("authInfo");
      window.location.href = "/auth/login";
      return Promise.reject(new Error("Unauthorized access - redirecting to login"));
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
