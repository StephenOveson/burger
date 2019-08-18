let connection = require('./connection.js')

let orm = {
    selectAll: function(tableInput, colInput){
        let queryString = 'SELECT ?? FROM ??'
        connection.query(queryString, [colInput, tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(tableInput, col1, col2){
        let queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES(?,?)'
        connection.query(queryString, [tableInput, col1, col2], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(tableInput, colInput, value){
        let queryString = 'UPDATE ?? WHERE ?? = ?'
        connection.query(queryString, [tableInput, colInput, value], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm