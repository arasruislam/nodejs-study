const http = require("http");

const data = [
  {
    id: 1,
    name: "Ashraful Alam",
    email: "ashraful@example.com",
    role: "WordPress Developer",
    skills: ["Elementor", "Kajabi", "GrooveFunnels"],
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "UI/UX Designer",
    skills: ["Figma", "Sketch", "Adobe XD"],
  },
  {
    id: 3,
    name: "Rakib Hasan",
    email: "rakib@example.com",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Tanvir Rahman",
    email: "tanvir@example.com",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.end("Welcome to todo app server");

  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify(data));
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.writeHead(201, {
      "content-type": "text/plain",
      email: "ph@gmail.com",
    });
    res.end("Todo created.");
  } else {
    res.end("route not found!!!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listing on port 5000");
});
