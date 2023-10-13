import { NextFunction, Request, Response } from "express";

import { userService } from "../services";

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    await userService.createUser(req.body);
  
    res.status(201).json({message: "success"});

  } catch (error) {
    next(error);
  }
}

export default { createUser };
