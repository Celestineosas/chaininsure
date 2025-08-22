import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

interface AuthCheckProps {
  children: ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const isAuthenticate = true; // your logic here
  const location = useLocation();

  if (!isAuthenticate) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default AuthCheck;
