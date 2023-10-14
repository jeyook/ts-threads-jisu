import { NextFunction, Request, Response } from "express";

export default function createControllerMethod(
  func: (req: Request, res: Response) => Promise<void>
): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res);
    } catch (error) {
      next(error);
    }
  };
}