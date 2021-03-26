let buffer = "";

buffer = Buffer.alloc(8);
console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00>

buffer = Buffer.alloc(8, 'a');
console.log(buffer); // <Buffer 61 61 61 61 61 61 61 61>
console.log(buffer.toString()); // aaaaaaaa
buffer[0] = 0xe4;
buffer[1] = 0xbd;
buffer[2] = 0xa0;
console.log(buffer.toString()); // 你aaaaa

buffer = Buffer.alloc(8, '你好');
console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd e4 bd>
console.log(buffer.toString()); // 你好�