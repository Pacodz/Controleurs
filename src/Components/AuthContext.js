import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const AuthContext = createContext();

// Hook pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);

// Fournisseur de contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
