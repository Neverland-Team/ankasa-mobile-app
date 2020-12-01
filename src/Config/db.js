const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'neverland-1.cvddkp7ijaot.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'neverlandteam3',
  database: 'neverlandbackend',
  connectTimeout: 60000
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database Has Connected");
});

module.exports = connection;
