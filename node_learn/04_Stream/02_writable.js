const fs = require("fs");

// 1. 创建stream
const writer = fs.createWriteStream("./foo.txt", {
    flags: 'a+',
    start: 3
});
// 2. 监听事件
writer.on("open", fd => console.log("文件被打开", fd));
writer.on("close", () => console.log("文件被关闭"));
writer.on("finish", () => console.log("文件操作完成"));

// 3. 写入内容
writer.write("你好啊", err => {
    console.log(err);
});

// 4. 关闭stream
writer.end("李银河");