const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'maridadb-1.cvddkp7ijaot.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'tuesblues_030195',
  database: 'neverlandbackend',
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database Has Connected");
});

module.exports = connection;
