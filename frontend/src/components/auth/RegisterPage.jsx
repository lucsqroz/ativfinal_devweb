import React, { useState } from 'react';
import api from '../../api/api';
import AuthWrapper from './AuthWrapper'
import { useNavigate } from 'react-router-dom';

import '../../styles/auth.css'

const RegisterPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', userDetails);
      console.log('Registration successful:', response.data);
      navigate('/login'); // Redireciona para a página de login após o registro
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Cadastrar</h2>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </AuthWrapper>
  );
};

export default RegisterPage;
