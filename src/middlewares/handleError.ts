import { NextFunction, Request, Response } from "express";
import ApiError from "../classes/ApiError";

export default function handleError(
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("handle error");
  console.log(error);
  return res.status(error.statusCode).json({ error: error.message });
}
