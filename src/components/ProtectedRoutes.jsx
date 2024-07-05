import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const { isUserAuthorised } = useAuth();
  return isUserAuthorised ? <Outlet /> : <Navigate to="/login"></Navigate>;
};

export default ProtectedRoutes;
