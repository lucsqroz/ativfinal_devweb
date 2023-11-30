import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="todo-title">{todo.title}</span>
      <div className="actions">
        <button onClick={() => onEdit(todo)}>Editar</button>
        <button onClick={() => onDelete(todo._id)}>Deletar</button>
      </div>
    </div>
  );
};

export default TodoItem;
