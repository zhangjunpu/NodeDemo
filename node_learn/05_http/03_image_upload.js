const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    const { pathname } = url.parse(req.url);

    if (pathname === "/upload/avatar" && req.method === "POST") {
        req.setEncoding("binary");
        // 1. 计算数据文件末尾应该去除的内容
        const contentType = req.headers['content-type'];
        const boundary = qs.parse(contentType, "; ", "=")['boundary'];
        const tail = `--${boundary}--`;

        let body = '';
        req.on("data", data => {
            body += data;
            // writer.write(data);
        });
        req.on("end", () => {
            // 2. 计算数据前面的文件信息内容位置
            const mark = qs.parse(body, "\r\n", ": ")["Content-Type"];
            const index = body.indexOf(mark) + mark.length;
            // 3. 去除数据前面的文件内容
            let imageData = body.substring(index);
            // 4. 去除数据前面的两个换行符
            imageData = imageData.replace(/^\s\s*/, "");
            // 5. 去掉尾巴
            imageData = imageData.substring(0, imageData.indexOf(tail));
            fs.writeFileSync("./avatar.jpg", imageData, { encoding: 'binary', flag: 'a+' });
            res.end("upload success")
        });
    } else {
        res.end("error request")
    }
});

server.listen(8002, () => {
    console.log("上传服务器开启成功");
});