define(function(require, exports, module) {
    const bar = require("./bar");
    console.log(bar.name);
    console.log(bar.age);

    function hello(name) {
        console.log("你好" + name);
    }

    exports.hello = hello;
});