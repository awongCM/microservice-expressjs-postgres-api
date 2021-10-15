export class AccountAlreadyExistsException extends Error {
  constructor(message) {
    super(message);
    this.name = "AccountAlreadyExistsException";
    this.httpStatusCode = 402;
  }
}
