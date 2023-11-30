import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title);
    setTitle(''); // Limpa o campo após o envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar nova tarefa"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTodoForm;
