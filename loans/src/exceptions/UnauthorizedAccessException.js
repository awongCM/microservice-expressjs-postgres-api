export class UnauthorizedAccessException extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedAccessException";
    this.httpStatusCode = 401;
  }
}
