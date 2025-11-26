import { Tag } from "src/shared/models/Notice.model";
import axiosClient from "src/utiils/axiosClient";

export const getTags = async (): Promise<Tag[]> => {
  const response = await axiosClient.get('/tag');
  return response.data;
};
