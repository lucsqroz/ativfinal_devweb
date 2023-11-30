const Todo = require('../models/Todo');

// Buscar todas as tarefas
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Criar nova tarefa
const createTodo = async (req, res) => {
    const { title, description } = req.body;

    const todo = new Todo({
        title,
        description
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Atualizar tarefa existente
const updateTodo = async (req, res) => {
    const { title, description } = req.body;

    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { title, description },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deletar uma tarefa
const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
        if (!deletedTodo) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }
        res.json({ message: "Tarefa deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
