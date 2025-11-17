import { Tag } from "src/shared/models/Notice.model";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getTags = async (): Promise<Tag[]> => {
  const response = await fetch(`${BASE_URL}/tag`);
  return response.json();
};
