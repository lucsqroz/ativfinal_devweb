import React, { useState } from 'react';
import api from '../../api/api';

const UserRow = ({ user, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Enviar a solicitação PUT para atualizar o usuário no servidor
    api.put(`/users/${user._id}`, editedUser)
      .then(() => {
        setIsEditing(false);
        onUpdate(editedUser); // Chame a função onUpdate com os dados atualizados
      })
      .catch(error => console.error("Error updating user:", error));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser({ ...user }); // Reverta as alterações feitas durante a edição
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    // Enviar a solicitação DELETE para excluir o usuário
    api.delete(`/users/${user._id}`)
      .then(() => {
        onDelete(user._id); // Chame a função onDelete com o ID do usuário excluído
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <tr>
      <td>{user._id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="btn btn-success" onClick={handleSaveClick}>Salvar</button>
            <button className="btn btn-danger" onClick={handleCancelClick}>Cancelar</button>
          </>
        ) : (
          <>
            <button className="btn btn-primary" onClick={handleEditClick}>Editar</button>
            <button className="btn btn-warning" onClick={handleDeleteClick}>Excluir</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
