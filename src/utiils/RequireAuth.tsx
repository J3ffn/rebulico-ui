import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const RequireAuth: React.FC<RequireAuthProps> = ({
  children,
  allowedRoles,
}) => {
  const authInfo = JSON.parse(localStorage.getItem("authInfo") || "{}");
  const token = authInfo.token;
  const userInfo = authInfo.userInfo;
  const location = useLocation();

  if (!userInfo || !token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (
    allowedRoles &&
    !userInfo.roles.some((role: string) => allowedRoles.includes(role))
  ) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
