export class UserNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotFoundException";
    this.httpStatusCode = 204;
  }
}
