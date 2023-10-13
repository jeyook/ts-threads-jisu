export default class ApiError extends Error {
  statusCode;
  description;

  constructor(statusCode: number, message: string, description?: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    if (description) {
      this.description = description;
    }
  }
}