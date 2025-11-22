import axiosClient from "src/utiils/axiosClient";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  const response = await axiosClient.get('/principals/posts');
  return response.data;
};

export const getNotice = async (idPost: string) => {
  const response = await axiosClient.get(`${BASE_URL}/post/${idPost}`);
  return response.data;
};

export const createPost = async (postData: FormData) => {
  const response = await axiosClient.post(`${BASE_URL}/post`, postData, { headers: { 'Content-Type': 'multipart/form-data' } });
  return response.data;
};
