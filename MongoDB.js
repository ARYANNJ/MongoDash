import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.DB_URL || 9000;
const MongoDB = mongoose
  .connect(`${URI}`)
  .catch((err) => console.log(err))
  .then(console.log("connected to MongoDB"));
export default MongoDB;
