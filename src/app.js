import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import path from "path";
import express from "express";
import connect from "../db";
import globalRouter from "./routers/globalRouter";
import adminRouter from "./routers/adminRouter";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));

connect();

app.use("/", globalRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
