const Koa = require("koa");

const userRouter = require("./router/user");

const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use((ctx, next) => {
    console.log(ctx.request);
    console.log(ctx.response);

    ctx.response.body = { msg: "Hello World" }
});

app.listen(8000, () => {
    console.log("koa启服务器动成功");
});