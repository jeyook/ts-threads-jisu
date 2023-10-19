import { Request, Response } from "express";

import { userService } from "../services";
import createControllerMethod from "./utils/createControllerMethod";

const createUser = createControllerMethod(
  async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: "success", data: user });
  }
);

export default { createUser };
