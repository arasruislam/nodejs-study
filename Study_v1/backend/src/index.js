// External Import
import dotenv from "dotenv";

// Internal Import
import { app } from "./app.js";
import connectDB from "./db/index.js";

// config dotenv
dotenv.config({
  path: "./.env",
});

// Database Connection
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed", error);
  });
