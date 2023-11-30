import React, { useState } from 'react';
import api from '../api/api';

const EditUserForm = ({ user, setUserToEdit, updateUsersList }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/users/${user._id}`, formData)
      .then(() => {
        console.log('Usuário atualizado com sucesso');
        updateUsersList(); // Você precisará implementar essa função
        setUserToEdit(null); // Reseta o usuário atual sendo editado
      })
      .catch(error => console.error("Error updating user:", error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Salvar Alterações</button>
      <button onClick={() => setUserToEdit(null)}>Cancelar</button>
    </form>
  );
};

export default EditUserForm;
