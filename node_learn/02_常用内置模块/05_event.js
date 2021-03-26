// 1. 引入EventEmitter模块
const EventEmitter = require("events");

// 2. 创建EventEmitter对象实例
const emitter = new EventEmitter();

const callback = (arg1, arg2) => {
    console.log("监听到事件", arg1, arg2);
}

// 3.1 监听事件on
emitter.on("click", callback);
emitter.on("click", (arg) => {
    console.log("监听到click事件", arg);
});
emitter.once("click", (arg) => {
    console.log("监听到click事件（once）", arg);
});
emitter.prependListener("click", (arg) => {
    console.log("监听到了click事件（prependListener）", arg);
});
emitter.prependOnceListener("click", (arg) => {
    console.log("监听到了click事件（prependOnceListener）", arg);
});
// 3.2 监听事件addListener
emitter.addListener("tap", (arg1, arg2) => {
    console.log("监听到tap事件", arg1, arg2);
});

console.log();
// 当前所有注册的事件
console.log("eventNames", emitter.eventNames()); // [ 'click', 'tap' ]
console.log("getMaxListeners", emitter.getMaxListeners()); // 10
console.log("listenerCount", emitter.listenerCount("click")); // 2
console.log("listeners", emitter.listeners("click")); // [ [Function: callback], [Function (anonymous)] ]
console.log("rawListeners", emitter.rawListeners("click"));
console.log();

// 4. 发送事件emit
emitter.emit("tap", 1, 2);
emitter.emit("click", "Junpu_1");

// 移除所有事件
// emitter.removeAllListeners();

setTimeout(() => {
    emitter.emit("click", "Junpu_2");
    // 5. 移除事件off、removeListener
    emitter.off("click", callback);
    emitter.emit("click", { "name": "Junpu", "age": 18 });
    emitter.emit("tap");
}, 1000);