const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:8c4cf2b8d5fc442b908b25cac761ba26@localhost:5432/eleven-journal");

module.exports = sequelize;