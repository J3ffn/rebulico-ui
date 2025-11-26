import axiosClient from "src/utiils/axiosClient";

export const getPrincipalsPosts = async () => {
  const response = await axiosClient.get("/principals/posts");
  return response.data;
};

export const getNotice = async (idPost: string) => {
  const response = await axiosClient.get(`/post/${idPost}`);
  return response.data;
};

export const createPost = async (postData: FormData) => {
  const response = await axiosClient.post(`/post`, postData, { headers: { "Content-Type": "multipart/form-data" } });
  return response.data;
};

export const getPostsByCategorySlug = async (categorySlug: string) => {
  const response = await axiosClient.get(`/post/category/${categorySlug}`);
  return response.data;
};
