
const path = require("path");

// 1. base property
const dirname = path.dirname("./01_path.js");
const filename = path.basename('01_path.js');
const extname = path.extname("./01_path.js");
const parsePath = path.parse("./01_path.js");
const normal = path.normalize("./01_path.js");
console.log(dirname, filename, extname);
console.log(parsePath);
console.log(normal);

// 2. join
const name1 = "/User/Junpu/Downloads"
const name2 = "/math.json"
const result = path.join(name1, name2);
console.log("join", result);

// 3. resolve
const n1 = "../User/Junp"
const n2 = "/math.json"
const result1 = path.resolve(n1, n2);
console.log("resolve: ", result1);