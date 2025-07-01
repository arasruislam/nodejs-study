const path = require("path");
const fs = require("fs");

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

if (!text) {
  console.log("please provide a message to log");
  console.log("example: node index.js hello world");
  process.exit(1);
}

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, text, { encoding: "utf-8" }, () => {
  console.log("You log added successfully!!!");
});
