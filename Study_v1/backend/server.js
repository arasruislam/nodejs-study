// import cors from "cors";
import express from "express";

const app = express();
// app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
   const data = [
      { id: 1, title: "Title 1", description: "Description 1" },
      { id: 2, title: "Title 2", description: "Description 2" },
      { id: 3, title: "Title 3", description: "Description 3" },
      { id: 4, title: "Title 4", description: "Description 4" },
      { id: 5, title: "Title 5", description: "Description 5" },
   ];

   res.send(data);
});

app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
