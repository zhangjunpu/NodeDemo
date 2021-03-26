const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "junpu",
    user: "root",
    password: "junpu0311",
    connectionLimit: 5
});

connection.getConnection((err, conn) => {
    if (err) {
        console.log(err);
        return;
    }
    conn.connect((err, conn) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("connect success");
    });
});

const statement = 
"SELECT s.`id`, s.`name`, JSON_ARRAYAGG(JSON_OBJECT('courseId', c.`id`, 'courseName', c.`name`)) course " + 
"FROM `students` `s` " + 
"LEFT JOIN `student_select_course` `ssc` ON s.`id` = ssc.`studentId` " + 
"LEFT JOIN `courses` `c` ON c.`id` = ssc.`courseId` " + 
"GROUP BY s.`id`;";
connection.execute(statement, (err, result, fields) => {
    if (err) console.log(err);
    // console.log(result);
    result.forEach(item => {
        console.log(item);
    });
    connection.end((err) => {
        console.log(err);
    });
});

