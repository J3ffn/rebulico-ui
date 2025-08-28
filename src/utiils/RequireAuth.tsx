import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useToast } from "src/context/toast/Toast.context";

interface RequireAuthProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const RequireAuth = ({ children, allowedRoles }: RequireAuthProps) => {
  const authInfo = JSON.parse(localStorage.getItem("authInfo") || "{}");
  const token = authInfo.token;
  const userInfo = authInfo.userInfo;
  const location = useLocation();
  const toastContext = useToast();
  const showToast = toastContext!.showToast;
  const [redirect, setRedirect] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (!userInfo || !token) {
      showToast("Você precisa estar logado para acessar essa página.", "error");
      setRedirect(
        <Navigate to="/auth/login" state={{ from: location }} replace />
      );
    } else if (
      allowedRoles &&
      !userInfo.roles.some((role: string) => allowedRoles.includes(role))
    ) {
      showToast("Você não tem permissão para acessar essa página.", "error");
      setRedirect(<Navigate to="/" replace />);
    }
  }, [userInfo, token, allowedRoles, location, showToast]);

  if (redirect) return redirect;

  return children;
};
