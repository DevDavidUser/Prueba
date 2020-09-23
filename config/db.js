const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  const DBconnection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = {sequelize, DBconnection};