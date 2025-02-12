import dotenv from "dotenv";
import express from "express";
import router from "./routers/index.js";
import client from "./config/telegram.js";

dotenv.config()

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api", router)

const main = async () => {
  try {
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    await client.connect()  
  } catch (e) {
    console.log(e)
  }
}

main()