import express, { Application, Request, Response } from "express";

const app: Application = express();

// middlewares
app.use(express.json());
 
// Routers
app.get("/", (req: Request, res: Response) => {
  res.send("Learning Express.js with ph");
});

export default app;
