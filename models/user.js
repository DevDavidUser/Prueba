const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const User= sequelize.define('User', {
    name: DataTypes.TEXT
  }, {
    // Other model options go here
  });

  module.exports = User;