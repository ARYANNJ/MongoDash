import Express from "express";
import { getPapers, sendPaper } from "../controllers/general-Controller.js";
const generalRouter = Express.Router();
generalRouter.route("/papers").post(sendPaper);
generalRouter.route("/papers").get(getPapers);
export default generalRouter;
