
let buffer = "";
// buffer = new Buffer("你好");
// console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd 21>

// utf-8
buffer = Buffer.from("你好");
console.log("utf-8:", buffer); // <Buffer e4 bd a0 e5 a5 bd>
console.log(buffer.toString()); // 你好

// hex
const hex = buffer.toString("hex");
console.log("hex:", hex); // e4bda0e5a5bd
console.log(Buffer.from(hex, "hex").toString()); // 你好

// base64
const base64 = buffer.toString("base64");
console.log("base64:", base64); // 5L2g5aW9
console.log(Buffer.from(base64, "base64").toString()); // 你好

// utf16le
buffer = Buffer.from("你好", "utf16le");
console.log("utf16le", buffer); // <Buffer 60 4f 7d 59>
console.log(buffer.toString("ucs2")); // 你好