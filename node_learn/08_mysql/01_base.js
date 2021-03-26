const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "junpu",
    user: "root",
    password: "junpu0311"
});

// connection.connect((err) => {
//     if (err) {
//         console.log("err");
//         return;
//     }
//     console.log("connection success");
// });

// 回调方式
const statement = "SELECT * FROM user";
connection.query(statement, (err, result, fields) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

const statement1 = "SELECT p.id, p.title, p.price, p.score, " + 
    "JSON_OBJECT('id', b.id, 'name', b.name, 'rank', b.rank) brand " + 
    "FROM phone p " + 
    "LEFT JOIN brand b ON p.brandId = b.id " + 
    "WHERE b.id = ?;"
connection.promise().query(statement1, 3).then(res => {
    console.log(res);
    connection.destroy();
});
