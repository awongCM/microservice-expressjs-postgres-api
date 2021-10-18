export class UnauthorizedCustomerException extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedCustomerException";
    this.httpStatusCode = 401;
  }
}
