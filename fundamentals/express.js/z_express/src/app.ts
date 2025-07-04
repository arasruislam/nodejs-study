import express, { Application } from "express";
import { todosRouter } from "./app/todos/todos.router";

const app: Application = express();

// middlewares
app.use(express.json());

// Routers
const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

export default app;
