import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ users, onUpdate, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.email}
            user={user}
            onUpdate={onUpdate} // Passe a função onUpdate para o componente UserRow
            onDelete={onDelete} // Passe a função onDelete para o componente UserRow
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
