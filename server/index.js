import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import route from "./Router/userRout.js";
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;
mongoose.connect(URL).then(() => {
  console.log("Db Connected Successfully");
  app.listen(PORT, () => {
    console.log(`Connected Successfully server is running on POrt :${PORT}`);
  })
})
  .catch(error => {
    console.error("Error connecting to Mongo_DB:", error.message);
  });
app.use("/api", route);
export default app;