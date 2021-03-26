const Router = require("koa-router");
const multer = require("koa-multer");
const path = require("path");

const router = new Router({ prefix: "/upload" });
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        const extenation = path.extname(file.originalname);
        cb(null, `${file.fieldname}_${Date.now()}${extenation}`);
    }
});
const upload = multer({ storage: storage });
// const upload = multer({ dest: "./uploads" });

router.post("/avatar", upload.single("avatar"), (ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.req.file);
    ctx.body = "upload avatar success"
});

router.post("/files", upload.array("file"), (ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.req.files);
    ctx.response.body = "upload files success"
});

const fields = [{ name: "avatar", maxCount: 1 }, { name: "file", maxCount: 10 }];
router.post("/imgs", upload.fields(fields), (ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.req.files);
    ctx.response.body = "upload imgs success"
});

router.post("/info", upload.none(), (ctx, next) => {
    console.log(ctx.req.body);
    ctx.response.body = "upload info success"
});

router.post("/", upload.any(), (ctx, next) => {
    console.log(ctx.req.body);
    console.log(ctx.req.files);
    ctx.response.body = "upload any success"
});

module.exports = router;