import { NextFunction, Request, Response, Router } from "express";

export default function catchError(router: Router) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("run");
      router(req, res, next);
    } catch (error) {
      console.log("error cought");
      next(error);
    }
  };
}
