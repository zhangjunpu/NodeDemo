const fs = require('fs');

// 1. 传统的读取方式
// fs.promises.readFile("./foo.txt").then((value) => {
//     console.log(value);
// });

// 2. stream方式
// 1. 创建stream
const reader = fs.createReadStream("./foo.txt", {
    start: 3,
    end: 11,
    highWaterMark: 4
})

const buffer = Buffer.alloc(9);
let offset = 0;
// 2. 监听状态
reader.on("open", (fd) => console.log("文件被打开", fd));
reader.on("end", () => console.log("文件读取结束"));
reader.on("close", () => console.log("文件被关闭"));
// 3. 监听获取数据
reader.on("data", (data) => {
    console.log(data);
    // 暂停
    reader.pause();
    setTimeout(() => {
        // 恢复
        reader.resume();
    }, 1000);
    buffer.fill(data, offset);
    offset += data.length;
    console.log(buffer, buffer.toString());
});
