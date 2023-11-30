import { useState, createContext, useContext } from 'react';

export const AuthContext = createContext(null); // Exportação nomeada para AuthContext

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    // Inicialização do estado de auth com base no token armazenado
    return token ? { token } : null;
  });

  // Função de login atualiza o estado e o localStorage
  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token });
  };

  // Função de logout limpa o estado e o localStorage
  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para facilitar o acesso ao contexto
export const useAuth = () => useContext(AuthContext);
