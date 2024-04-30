const Todo = require('../models/Todo');

// Get all Todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Error fetching todos' });
    }
};

// Create a Todo
const createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = await Todo.create({ title, description });
        res.json(newTodo);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Error creating todo' });
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.title = title;
        todo.description = description;
        todo.isCompleted = isCompleted;
        await todo.save();
        res.json(todo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Error updating todo' });
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        await todo.destroy();
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Error deleting todo' });
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
