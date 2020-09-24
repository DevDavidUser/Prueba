const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  const DBconnection = async () =>{
   try {
       await sequelize.sync({ alter:true })
        console.log("DB Conectada");
    }
     catch (error) {
        console.log("ERROR al conectarse a DB",error );
    }
}

module.exports = {sequelize, DBconnection};