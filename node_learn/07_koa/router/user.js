const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const router = new Router({ prefix: "/user" });

router.use(bodyParser());

router.get("/list", (ctx, next) => {
    console.log(ctx.request.query);
    ctx.response.body = "user list"
});

router.get("/:userId", (ctx, next) => {
    console.log(ctx.request.params);
    ctx.response.body = "userid: " + ctx.request.params.userId
});

router.post("/", (ctx, next) => {
    console.log(ctx.request.body);
    ctx.response.body = "create user success";
});

module.exports = router;