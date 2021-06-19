import express from "express";
import {
  mainController,
  resultController,
} from "../controllers/globalController";

const glboalRouter = express.Router();

glboalRouter.get("/", mainController);
glboalRouter.get("/result", resultController);

export default glboalRouter;
