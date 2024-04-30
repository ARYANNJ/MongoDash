import Express from "express";
import mongoose from "mongoose";
import { getCountry } from "../controllers/variable-Controller.js";

const variableRouter = Express.Router();
variableRouter.route("/intensity").get();
variableRouter.route("/likelihood").get();
variableRouter.route("/relevance").get();
variableRouter.route("/year").get();
variableRouter.route("/country").get(getCountry);
variableRouter.route("/topics").get();
variableRouter.route("/region").get();
variableRouter.route("/city").get();
export default variableRouter;
