import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import api from '../../api/api';
import '../../styles/auth.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await api.get('/users');
        setUsers(response.data);
        setError(''); // Limpa qualquer erro anterior
      } catch (error) {
        console.error("Error fetching users:", error);
        setError('Erro ao buscar usuários');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Administração de Usuários</h1>
      <UserTable users={users} key= {users} />
    </div>
  );
};

export default AdminPage;
