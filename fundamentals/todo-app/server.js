const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  // console.log(url);
  // get all todos
  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
  // post a todo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      console.log(data);
      // const todo = JSON.parse(data);
      const { id, name, email, role, skills } = JSON.parse(data);
      // console.log(name);

      const createdAt = new Date().toLocaleString();
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);

      parseAllTodos.push({ id, name, email, role, skills, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ id, name, email, role, skills }, null, 2));
    });
  } else if (pathname === "/todo" && req.method === "GET") {
    const name = url.searchParams.get("name");
    console.log(name);
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    // console.log(parsedData);
    const todo = parsedData.find((todo) => todo.name === name);
    console.log(todo);

    const stringifiedTodo = JSON.stringify(todo);
    res.writeHead(200, {
      "content-type": "application/json",
    });
    console.log(stringifiedTodo);

    res.end(stringifiedTodo);
  } else {
    res.end("route not found!!!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listing on port 5000");
});
