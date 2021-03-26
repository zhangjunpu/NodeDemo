const fs = require("fs");

const path = './lib/test.txt';

// 读取文件
fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// 写入文件
const content = "你好啊，李银河";
fs.promises.writeFile(path, content, { flag: "a+" }).then(() => {
    console.log("write success");
    return fs.promises.readFile(path, { encoding: "utf-8" });
}).then(res => {
    console.log("read", res);
}).catch(err => {
    console.log(err);
});
