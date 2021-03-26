const fs = require("fs");

fs.readFile("./03_buffer_file.js", (err, data) => {
    console.log(data);
    console.log(data.toString());
});

fs.readFile("../res/img/timg.jpg", (err, data) => {
    console.log(data);
    fs.writeFile("./foo.jpg", data, (err) => {
        if (err) {
            console.log(err);
        }
    })
});