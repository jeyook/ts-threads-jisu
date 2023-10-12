import express from "express";

import { userController } from "../controllers";

export const userRouter = express.Router();

userRouter.post("/", userController.createUser);
