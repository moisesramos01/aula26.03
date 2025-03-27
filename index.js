require('dotenv').config()
var mysql = require('mysql2');

var con = mysql.createConnection({
  host:process.env.endbd ,
  user: process.env.userbd,
  password: process.env.senhabd
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Banco de Dados Conectado!");
});