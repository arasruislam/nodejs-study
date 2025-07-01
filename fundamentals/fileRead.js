// const { error } = require("console");
// const fs = require("fs");

// console.log("task 1");

// const data = fs.readFile("./task.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("something went wrong! ", err);
//     return;
//   }

//   fs.writeFile("./task.txt", data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log("something went wrong!!!", err);
//       return;
//     }

//     console.log("Written successfully!!!!");
//   });
// });

// console.log("Task 2");

const fs = require("fs");

const readStream = fs.createReadStream("./task.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./task.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
})
