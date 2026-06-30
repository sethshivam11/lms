import { Response } from "express";

interface ApiResponse {
  statusCode: number;
  data: object;
  message: string;
  success: boolean;
}

class ApiResponse extends Response {
  constructor(statusCode: number, data: object, message: string = "Success") {
    super();
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = this.status < 400;
  }
}

export default ApiResponse;
