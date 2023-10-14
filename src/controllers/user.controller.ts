import { Request, Response } from "express";

import { userService } from "../services";
import createControllerMethod from "./utils/createControllerMethod";

const createUser = createControllerMethod(
  async (req: Request, res: Response) => {
    await userService.createUser(req.body);
    res.status(201).json({ message: "success" });
  }
);

export default { createUser };
