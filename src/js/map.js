export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, "Bad Request"],
      [401, "Unauthorized"],
      [402, "Payment Required"],
      [403, "Forbidden"],
      [404, "Not Found"],
    ]);
  }

  translate(code) {
    if (this.errors.get(code)) {
      return this.errors.get(code);
    } else {
      return "Unknown error";
    }
  }
}
