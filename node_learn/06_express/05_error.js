const express = require("express");

const ERR_USER_NOT_FOUND = "user not found";
const ERR_USER_DELETE_FAILURE = "user delete failure";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 获取用户信息
app.get("/user/:userId", (req, res, next) => {
    const flag = false;
    if (flag) {
        res.send("获取用户信息成功");
    } else {
        next(new Error(ERR_USER_NOT_FOUND));
    }
});

// 删除用户信息
app.delete("/user/:userId", (req, res, next) => {
    const flag = false;
    if (flag) {
        res.send("删除用户信息成功");
    } else {
        next(new Error(ERR_USER_DELETE_FAILURE));
    }
});

app.use((err, req, res, next) => {
    let errorCode = 0;
    let errorMsg = '';
    switch (err.message) {
        case ERR_USER_NOT_FOUND:
            errorCode = 100001;
            errorMsg = "未找到用户";
            break;
        case ERR_USER_DELETE_FAILURE:
            errorCode = 100002;
            errorMsg = "删除用户失败";
            break;
        default:
            errorCode = 100010;
            errorMsg = "服务器错误";
            break;
    }
    res.json({ errorCode, errorMsg });
});

app.listen(8000, () => {
    console.log("服务器开启成功");
})