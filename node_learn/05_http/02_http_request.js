const http = require("http");
const URL = require("url");


const BASE_URL = "http://localhost:8000/"
// 1. get请求
http.get(BASE_URL + "v1/class/info?name=junpu&age=18", (res) => {
    res.on("data", (data) => {
        const result = JSON.parse(data);
        console.log(result);
    })
});


// 2. post请求
const req = http.request(BASE_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    path: "/login"
}, (res) => {
    res.on("data", data => {
        const result = JSON.parse(data);
        console.log(result);
    });

    res.on("end", () => {
        console.log("end");
    });

    res.on("error", (err) => {
        console.log("http request error:", err);
    });
});

const params = {
    "username": "junpu",
    "password": "123456"
};
req.write(JSON.stringify(params));
req.end();