export class LoansAccountAlreadyExistsException extends Error {
  constructor(message) {
    super(message);
    this.name = "LoansAccountAlreadyExistsException";
    this.httpStatusCode = 402;
  }
}
