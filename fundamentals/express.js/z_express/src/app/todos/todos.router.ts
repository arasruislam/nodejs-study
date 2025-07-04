import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // console.log(req.query);
  // console.log(req.params);
  res.json({
    message: "From todos router",
    data,
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log({ title, body });
  res.send("Hello world");
});


export default todosRouter;
