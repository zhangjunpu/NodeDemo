const fs = require('fs');

// 传统的复制
async function copy(spath, dpath) {
    const data = await fs.promises.readFile(spath);
    await fs.promises.writeFile(dpath, data)
}
// copy("./foo.txt", "./foz.txt");

// stream复制
function streamCopy(spath, dpath) {
    const reader = fs.createReadStream(spath);
    const writer = fs.createWriteStream(dpath);
    reader.on("data", data => {
        writer.write(data);
    })
}
// streamCopy("./foo.txt", "./fox.txt");

// pipe复制
function pipe(spath, dpath) {
    const reader = fs.createReadStream(spath);
    const writer = fs.createWriteStream(dpath);
    reader.on("open", () => console.log("reader open"));
    reader.on("ready", () => console.log("reader ready"));
    reader.on("data", (data) => console.log("reader", data.toString()));
    reader.on("end", () => console.log("reader end"));
    reader.on("close", () => console.log("reader close"));

    writer.on("pipe", () => console.log("writer pipe"));
    writer.on("open", () => console.log("writer open"));
    writer.on("ready", () => console.log("writer ready"));
    writer.on("finish", () => console.log("writer finish"));
    writer.on("unpipe", () => console.log("writer unpipe"));
    writer.on("close", () => console.log("writer close"));
    writer.on("drain", () => console.log("writer drain"));
    writer.on("error", () => console.log("writer error"));

    reader.pipe(writer);
}
// pipe("./foo.txt", "./foy.txt");

// pipe复制图片
function copyImage(spath, dpath) {
    const reader = fs.createReadStream(spath);
    const writer = fs.createWriteStream(dpath);
    writer.on("finish", () => console.log("finish"));
    reader.pipe(writer);
}
copyImage("../res/img/timg.jpg", "./car.jpg");