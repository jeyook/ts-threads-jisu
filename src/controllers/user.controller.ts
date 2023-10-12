import { Request, Response } from "express";

import { userService } from "../services";

async function createUser(req: Request, res: Response) {
  await userService.createUser(req.body);
}

export default { createUser };
