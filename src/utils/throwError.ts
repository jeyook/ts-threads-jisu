import ApiError from "../classes/ApiError";

export default function throwError(
  statusCode: number,
  message: string,
  description?: string
): ApiError {
  throw new ApiError(statusCode, message, description);
}
