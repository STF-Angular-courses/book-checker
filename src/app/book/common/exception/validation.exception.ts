export class ValidationException extends Error {
  private errors: string[] = [];

  constructor(errors: string[]) {
    super();
    this.errors = errors;
  }

  getErrors(): string[] {
    return this.errors;
  }
}
