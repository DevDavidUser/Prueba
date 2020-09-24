const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const User= sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    // Other model options go here
  });

  module.exports = User;