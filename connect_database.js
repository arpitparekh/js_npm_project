// npm init -y
// npm install mysql2
// backend server connection with database

// require function is used to import 3rd party library
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Walden0042$$',
    database: 'javascript_batch',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

// create table in database

connection.query('create table if not exists student(id int, name varchar(20))', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('table created');
    }
});

// insert data in table
connection.query('insert into student values(1, "Raj"),(2,"Ram"),(3,"Shyam")', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('data inserted');
    }
});

connection.end();
