const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',  // Replace with your database host
  user: 'root',       // Replace with your database username
  password: '',       // Replace with your database password
  database: 'controler_egsa', // Replace with your database name
  waitForConnections: true,
  connectionLimit: 30, // Adjust pool size as needed
  queueLimit: 0
});

module.exports = pool.promise(); // Use promise-based pool
