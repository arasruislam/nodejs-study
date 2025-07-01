const fs = require("fs");

console.log("task 1");

fs.writeFileSync("./task.txt", "learning file system and got error");

const data = fs.readFileSync("./task.txt", { encoding: "utf-8" });

console.log(data)


