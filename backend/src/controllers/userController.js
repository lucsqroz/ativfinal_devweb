const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Buscar todos os usuários
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Criar novo usuário
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Atualizar usuário existente
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { name, email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
        console.error("Erro ao excluir usuário:", err);
        res.status(500).json({ message: err.message });
    }
};



module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
