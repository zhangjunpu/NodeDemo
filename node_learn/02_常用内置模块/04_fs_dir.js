const fs = require("fs");
const path = require("path");

const dirPath = "junpu"
// 1. 判断文件夹是否存在
console.log(fs.existsSync(dirPath));

// 2. 新建文件夹
fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("make dir success");

    console.log(fs.existsSync(dirPath));
});

// 3. 重命名文件夹
fs.rename(dirPath, "abs", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("rename success");
});

// 4. 获取文件夹内容
const dirname = "../../../Java"
/**
 * 遍历文件夹下的所有子文件夹、文件
 * @param {string} dirPath 
 */
function readDir(dirPath) {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(file => {
            if (file.isDirectory()) {
                const newPath = path.resolve(dirPath, file.name);
                console.log(newPath);
                readDir(newPath);
            } else {
                console.log(path.resolve(dirPath, file.name));
            }
        });
    });
}

// readDir(dirname);

// 5. copy文件
const srcFile = "./01_path.js";
const dstFile = "./lib/01_path.js"
fs.copyFile(srcFile, dstFile, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("copy success");
});