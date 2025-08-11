import { AuthData } from "src/shared/models/auth.model";

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthData> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const logoutUser = async () => {
  const authInfo = JSON.parse(localStorage.getItem("authInfo") || "{}");
  const token = authInfo.token;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
