import React, { useState, useEffect } from 'react';

const EditTodoForm = ({ todo, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(todo.title);

  useEffect(() => {
    setTitle(todo.title); // Atualiza o título quando o todo mudar
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo._id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Editar tarefa"
        required
      />
      <button type="submit">Atualizar</button>
      <button onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditTodoForm;
