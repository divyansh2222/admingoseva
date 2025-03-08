import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <LoginContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
