import { Navigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
