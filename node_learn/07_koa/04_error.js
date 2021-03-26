const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
    const isLogin = false;
    if (isLogin) {
        ctx.body = "request success";
    } else {
        ctx.app.emit("error", new Error("请先登录~"), ctx);
    }
});

app.on("error", (err, ctx) => {
    ctx.status = 401;
    ctx.body = err.message;
});

app.listen(8000, () => {
    console.log("错误处理服务器启动成功");
});