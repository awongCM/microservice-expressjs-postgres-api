export class LoansNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "LoansNotFoundException";
    this.httpStatusCode = 204;
  }
}
