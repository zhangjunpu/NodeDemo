const mysql = require("mysql2");

const connection = mysql.createPool({
    host: 'localhost',
    database: 'junpu',
    user: 'root',
    password: 'junpu0311',
    connectionLimit: 5
}).promise();

const statement = "SELECT `id`, `title`, `price` FROM `phone` WHERE `price` BETWEEN ? AND ?;";
connection.execute(statement, [1000, 2000]).then((res) => {
    console.log(res[0]);
});

const statement1 = "SELECT * FROM `user`";
connection.execute(statement1).then(res => {
    console.log(res[0]);
});
setTimeout(() => {
    connection.end();
}, 500);
