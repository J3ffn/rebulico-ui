import { TagsMock } from "src/utiils/mocks/Notices";

const BASE_URL = import.meta.env.VITE_API_URL;

export const findAllTags = async () => {
  if (import.meta.env.MODE === "production") return TagsMock

  try {
    const response = await fetch(`${BASE_URL}/tag`);
    if (!response.ok) {
      return {
        error: response.body,
      }
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
};