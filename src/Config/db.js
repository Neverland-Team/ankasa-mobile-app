const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "neverlandbackend",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database Has Connected");
});

module.exports = connection;
