import express from "express";
import MongoClient from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/Auth.js";
let app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", router);
app.listen(8000, () => {
  console.log("server start");
});
