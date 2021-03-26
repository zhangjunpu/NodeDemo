const express = require("express");

const app = express();

// app.use((req, res, next) => {
//     let info = '';
//     req.on("data", data => {
//         info += data;
//     });
//     req.on("end", () => {
//         console.log(info);
//         next();
//     });
// });

const result = {
    code: 100000,
    msg: "执行成功",
    data: null
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended为true代表使用第三方库qs，false则使用node内置querystring

app.use((req, res, next) => {
    next();
});

app.get('/student/:studentId', (req, res, next) => {
    console.log(req.params);
    result.data = req.params;
    res.json(result);
});

app.get("/class/info", (req, res, next) => {
    console.log(req.query);
    next();
}, (req, res, next) => {
    result.data = req.query;
    // res.type("application/json");
    // res.set({
    //     "Content-Type": "application/json; charset=utf-8"
    // });
    res.status(200).send(result);
});

app.post("/login", (req, res, next) => {
    console.log(req.body);
    result.data = req.body;
    res.json(result);
});

app.listen(8000, () => {
    console.log("服务器开启成功");
});