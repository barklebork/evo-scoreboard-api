const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// Open the connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database");
});

module.exports = connection;
