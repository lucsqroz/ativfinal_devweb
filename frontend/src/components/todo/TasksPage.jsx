import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';
import TodoList from './TodoList';
import api from '../../api/api'; // Certifique-se de que o caminho para a API está correto

const TasksPage = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    // Carregar as tarefas ao iniciar o componente
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await api.post('/todos', { title });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const updateTodo = async (_id, title) => {
    if (!_id) {
      console.error('ID da tarefa é undefined');
      console.log(_id)
      return;
    }
  
    try {
      const response = await api.put(`/todos/${_id}`, { title });
      setTodos(todos.map((todo) => (todo._id === _id ? response.data : todo)));
      setCurrentTodo(null); // Limpar a tarefa atual após a atualização
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };
  

  const deleteTodo = async (_id) => {
    try {
      await api.delete(`/todos/${_id}`);
      setTodos(todos.filter((todo) => todo._id !== _id));
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      {currentTodo ? (
        <EditTodoForm
          todo={currentTodo}
          onUpdate={updateTodo}
          onCancel={() => setCurrentTodo(null)}
        />
      ) : (
        <AddTodoForm onAdd={addTodo} />
      )}
      <TodoList todos={todos} onEdit={setCurrentTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default TasksPage;
