import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const filePath = path.join(__dirname, "../db/todo.json");

// middlewares
app.use(express.json());

// Routers
const todosRouter = express.Router();
const userRouter = express.Router();


app.use("/todos", todosRouter);
app.use("/user", userRouter); 

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // console.log(req.query);
  // console.log(req.params);
  res.json({
    message: "From todos router",
    data,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todo application");
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log({ title, body });
  res.send("Hello world");
});

export default app;
