import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuth = () => {
  const user = localStorage.getItem("userCredential");

  if (user) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    isAuth();
  }, [location]);

  return isAuth() ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoutes;
