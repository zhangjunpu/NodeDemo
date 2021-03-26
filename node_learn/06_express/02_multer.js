const path = require("path");

const express = require("express");
const multer = require("multer");

const app = express();

// 自定义本地存储目录，存储文件名
const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     cb(null, "./upload");
    // },
    destination: "./upload",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
// 直接指明本地存储目录
// const upload = multer({ dest: "./upload" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.any(), (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
    res.end("upload any success");
});

app.post("/upload/info", upload.none(), (req, res, next) => {
    console.log(req.body);
    res.end("upload info success");
});

app.post("/upload/avatar", upload.single("avatar"), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    res.end("upload avatar success");
});

app.post("/upload/files", upload.array("file"), (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
    res.end("upload files success");
});

const fields = [{ name: "avatar", maxCount: 1 }, { name: "file", maxCount: 8 }];
app.post("/upload/imgs", upload.fields(fields), (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
    res.end("upload imgs success");
});

app.listen(8002, () => {
    console.log("服务启动成功");
})
