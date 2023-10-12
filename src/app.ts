import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  console.log("TS test");
  res.status(200).json({ message: "success" });
});

app.use(router);


export default app;
