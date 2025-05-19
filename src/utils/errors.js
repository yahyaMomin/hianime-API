export class AppError extends Error {
  constructor(message, statusCode = 500, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}
export class NotFoundError extends AppError {
  constructor(message = 'resource not found', details = null) {
    super(message, 404, details);
  }
}

export class validationError extends AppError {
  constructor(message = 'validaion failed', details = null) {
    super(message, 400, details);
  }
}
