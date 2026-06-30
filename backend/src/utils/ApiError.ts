interface ApiError {
  statusCode: number;
  message: string;
  data: null;
  success: boolean;
  errors: string[];
  stack?: string;
}

class ApiError extends Error {
  constructor(
    statusCode: number,
    message: string,
    errors: string[] = [],
    stack: string = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
