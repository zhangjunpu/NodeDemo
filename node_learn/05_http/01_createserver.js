const http = require("http");
const url = require("url");
const qs = require("querystring");

// 1. 创建服务器方法一
const server = http.createServer((req, res) => {
    const method = req.method;
    const { pathname, query } = url.parse(req.url);
    console.log(method);
    console.log(pathname);
    console.log("headers", req.headers);

    res.statusCode = 200;
    res.setHeader("content-type", "application/json;charset=utf-8");
    // res.writeHead(200, {
    //     "name": "junpu",
    //     "age": 18
    // });
    const result = {
        "code": 10000,
        "msg": "执行成功",
        "data": null
    }

    if (pathname === "/v1/class/info") {
        if (method === "GET") {
            const args = qs.parse(query);
            console.log("args", args);
            result.data = args;
        }
        res.end(JSON.stringify(result));
    } else if (pathname === "/login") {
        if (method === "POST") {
            
            let chunk = "";
            req.on("data", (data) => {
                chunk += data;
            });

            req.on("end", () => {
                const args = JSON.parse(chunk);
                console.log("args", args);
                result.data = args;
                res.end(JSON.stringify(result));
            });
        } else {
            res.end(JSON.stringify(result));
        }
    } else {
        result.code = 10001;
        result.msg = "执行失败";
        res.end(JSON.stringify(result));
    }
});

server.listen(8000, () => {
    console.log("服务开启成功");
    console.log(server.address());
});


// 2. 创建服务器
// new http.Server((req, res) => {
//     res.writeHead(400, {
//         "Content-Type": "text/html"
//     })
//     res.end("<h2>Hello World</h2>");
// }).listen(8001, "0.0.0.0", () => {
//     console.log("服务2开启成功");
// });

