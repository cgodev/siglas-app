const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'siglas'
});

const dbInit = () => {
    connection.connect(error => {
        if (error) throw error;
        console.log('Database connection stablished');
    });
}

module.exports =  {
    initMysql : dbInit,
    connection: connection
}