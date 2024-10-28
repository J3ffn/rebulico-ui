const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/principals/notices`);
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

export const getNotice = async (idPost: string) => {
  try {
    const response = await fetch(`${BASE_URL}/notice/${idPost}`)
    if (!response.ok) {
      return {
        error: response.body
      }
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}

export const createPost = async (postData: object) => {
  // ... Ainda para fazer
  return postData;
};

function buildReturn(data, error = null) {
  return {
    haveError: error && true,
    data: data
  }
}