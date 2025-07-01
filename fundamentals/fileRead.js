const { error } = require("console");
const fs = require("fs");

console.log("task 1");

const data = fs.readFile("./task.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("something went wrong! ", err);
    return;
  }

  fs.writeFile("./task.txt", data, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.log("something went wrong!!!", err);
      return;
    }

    console.log("Written successfully!!!!");
  });
});

console.log("Task 2");
