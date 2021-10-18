export class CustomerNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomerNotFoundException";
    this.httpStatusCode = 204;
  }
}
