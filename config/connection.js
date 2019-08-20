let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;