import { useAuth } from "./LoginContext";
import { useNavigate } from "react-router-dom";

export const useAuthActions = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/"); 
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return { handleLogin, handleLogout };
};
