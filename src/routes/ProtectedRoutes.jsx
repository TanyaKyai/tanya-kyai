import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const isAuth = () => {
  const user = Cookies.get("userCredential");

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
