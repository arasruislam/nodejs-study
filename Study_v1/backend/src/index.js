// External Import
import dotenv from "dotenv";
import express from "express";

// Internal Import
import connectDB from "./db/index.js";

// Create Express App
const app = express();

// config dotenv
dotenv.config({
  path: "./.env",
});

// Database Connection
connectDB();

/* (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on port $${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
 */
