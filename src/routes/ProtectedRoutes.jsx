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

const ProtectedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    isAuth();
  }, [location]);

  return isAuth() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
