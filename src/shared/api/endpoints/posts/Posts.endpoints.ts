// import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

import { DefaultNoticeMock, NoticesWithDetailsMock, principalsPostsMock } from "src/utiils/mocks/Notices";

const BASE_URL = import.meta.env.VITE_API_URL;

export const findPrincipalsPosts = async () => {
  if (import.meta.env.MODE === "production") return principalsPostsMock
  try {
    const response = await fetch(`${BASE_URL}/principals/posts`);
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

export const findNotice = async (idPost: string) => {
  if (import.meta.env.MODE === "production") {
    const postFinded = NoticesWithDetailsMock[idPost];

    if (!postFinded) {
      return DefaultNoticeMock;
    }

    return postFinded;
  }
  
  try {
    const response = await fetch(`${BASE_URL}/post/${idPost}`);
    if (!response.ok) {
      return {
        error: response.body,
      };
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const createPost = async (postData: object) => {
  // ... Ainda para fazer
  return postData;
};

// function buildReturn(data, error = null) {
//   return {
//     haveError: error && true,
//     data: data
//   }
// }
