const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.DB_HOST,process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };
const connection = mysql.createConnection(dbConfig)
connection.connect((err) => {
    if (err) {
        console.log('Faild to connect');
    }
    else {
        console.log('Connected');
        let query = `create table if not exists Shortend(shortId varchar(225) unique ,redirectURL varchar(225)
        ,created_at TIMESTAMP default CURRENT_TIMESTAMP
        ,updated_at TIMESTAMP default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP )`;

        connection.query(query, (err) => {
            if (err) { console.log(err); };
            console.log('Table Created');
        })
    }

})
module.exports = connection;