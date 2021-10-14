export class UserAlreadyExistsException extends Error {
  constructor(message) {
    super(message);
    this.name = "UserAlreadyExistsException";
    this.httpStatusCode = 402;
  }
}
