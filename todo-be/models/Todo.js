const Sequelize = require('sequelize');
const sequelize = require('../db');

const Todo = sequelize.define('Todo', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Todo;
