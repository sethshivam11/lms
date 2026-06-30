import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { User } from "../utils/types";
import ApiError from "../utils/ApiError";
import { verifyToken } from "../utils/token";

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new ApiError(401, "Token is required");
    }

    const data = (await verifyToken(token)) as JwtPayload;
    req.user = data as User;

    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      error.message = "Invalid token, Please login again";
    }
    next(error);
  }
};

export default verifyJWT;
