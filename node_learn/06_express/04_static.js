const express = require("express");
const app = express();

// 静态资源服务器
app.use(express.static("./build"));

app.listen(8010, () => {
    console.log("静态服务器开启");
});