const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/principals/notices`);
    if (!response.ok) {
      throw new Error("Erro ao buscar o usuário");
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
};

export const createPost = async (postData: object) => {
  // ... Ainda para fazer
  return postData;
};
