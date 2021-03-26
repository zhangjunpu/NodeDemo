const Koa = require("koa");
const uploadRouter = require("./router/upload");

const app = new Koa();

app.use(uploadRouter.routes());

app.listen(8002, () => {
    console.log("上传服务器开启成功");
});