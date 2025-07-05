import { Collection, MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 5000;

const uri =
  "mongodb+srv://ashraful:ScaleUp17226@cluster0.qmhauay.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



const bootstrap = async () => {
  await client.connect();
  console.log("Connected To MongoDB")

  const db = await client.db("todosDB").collection("todos");

  server = app.listen(port, () => {
    console.log(`The server running on port ${port}`);
  });
};

bootstrap();
