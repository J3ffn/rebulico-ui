// import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/principals/posts`);
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

export const getNotice = async (idPost: string) => {
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

  // const postFinded = NoticesWithDetails[idPost];

  // if (!postFinded) {
  //   return DefaultNotice;
  // }

  // return postFinded;
};

export const createPost = async (postData: FormData) => {
  const token = JSON.parse(localStorage.getItem("authInfo") || "{}").token;
  const response = await fetch(`${BASE_URL}/post`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: postData,
  });

  return response.json();
};

// function buildReturn(data, error = null) {
//   return {
//     haveError: error && true,
//     data: data
//   }
// }
