export class CustomerAlreadyExistsException extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomerAlreadyExistsException";
    this.httpStatusCode = 402;
  }
}
