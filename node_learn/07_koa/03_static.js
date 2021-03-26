
const Koa = require("koa");
const staticAssets = require("koa-static");

const app = new Koa();

app.use(staticAssets("../06_express/build"));

app.listen(8010, () => {
    console.log("静态资源服务器开启成功")
});