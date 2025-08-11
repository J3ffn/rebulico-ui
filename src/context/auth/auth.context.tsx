import React from "react";
import { loginUser } from "src/shared/api/endpoints/auth/Login.endpoint";
import { AuthData } from "src/shared/models/auth.model";

interface AuthContextType {
  authInfo?: AuthData;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<AuthData | undefined>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextStorage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authInfo, setAuthInfo] = React.useState<AuthData | undefined>(
    undefined
  );
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const authLocalStorage = localStorage.getItem("authInfo");

    if (authLocalStorage) {
      setAuthInfo(JSON.parse(authLocalStorage));
      setIsAuthenticated(true);
      return;
    }

    setAuthInfo(undefined);
    setIsAuthenticated(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response: AuthData = await loginUser(email, password);

      if (!response.token) {
        throw new Error(response.message);
      }

      setAuthInfo(response);
      setIsAuthenticated(true);
      localStorage.setItem("authInfo", JSON.stringify(response));

      return response;
    } catch (err: any) {
      window.alert(err.message);
    }
  };

  const logout = () => {
    setAuthInfo(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem("authInfo");
  };

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
