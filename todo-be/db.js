const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
