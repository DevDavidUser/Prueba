const express = require('express');
const app = express();
const {sequelize, DBconnection} = require('./config/db');

app.use(express.json());

const usersRoute = require("./routes/users");
app.use("/",usersRoute);

const port = process.env.PORT || 9000;
app.listen(port, () => { 
  console.log('Server listening on port 9000');
  DBconnection();
});