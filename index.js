import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import generalRouter from "./routes/generalRoutes.js";
import MongoDB from "./MongoDB.js";
import variableRouter from "./routes/variableRoutes.js";
dotenv.config();
const app = Express();
app.use(Express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/client", generalRouter);
app.use("/", generalRouter);
app.use("/management", generalRouter);
app.use("/", variableRouter);
//Server
const PORT = process.env.PORT;
MongoDB.then(
  app.listen(5001, () => {
    console.log("Server Started ");
  })
);
