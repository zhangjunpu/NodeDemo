const fs = require('fs');

const path = './lib/test.txt';

// // 1. 同步方式
const state = fs.statSync(path);
console.log("sync", state);

// 2. 异步回调方式
fs.stat(path, (err, stat) => {
    if (err) {
        console.log("async", err);
        return;
    }
    console.log("async", stat);
})

// 3. promise方式
fs.promises.stat(path).then(res => {
    console.log("promise", res);
}).catch(err => {
    console.log("promise", err);
})


// 文件描述符
fs.open(path, (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(fd);
    // 文件状态
    fs.fstat(fd, (err, stat) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stat);
    });
})


