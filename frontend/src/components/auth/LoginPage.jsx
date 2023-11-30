import React, { useState, useContext } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import { AuthContext, useAuth } from '../../hooks/useAuth'; // Certifique-se de que o caminho está correto
import '../../styles/auth.css'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Usar o contexto para atualizar o estado de autenticação

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', credentials);
      console.log('Login successful:', response.data);
      
      // Atualizar o estado de autenticação com o token recebido
      login(response.data.token);
      
      // Redireciona para a página de admin após o login
      navigate('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
      // Aqui você pode definir uma mensagem de erro para informar o usuário
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
