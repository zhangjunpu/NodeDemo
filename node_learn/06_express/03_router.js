const express = require("express");

const app = express();
const userRouter = require("./router/user_router");

app.use("/user", userRouter);

app.listen(8000, () => {
    console.log("路由服务器开启成功");
});