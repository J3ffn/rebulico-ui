import axiosClient from "src/utiils/axiosClient";

export const getCategories = async () => {
  const response = await axiosClient.get("/category");
  return response.data;
};
