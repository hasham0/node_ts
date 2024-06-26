import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { congif } from "../constant";

const errorHandling = (
    error: HttpError,
    _request: Request,
    response: Response,
    _next: NextFunction // Added `next` parameter
) => {
    // Added `next` parameter
    const stCode = error.statusCode || 500;

    return response.status(stCode).json({
        message: error.message,
        stack: (congif.NODE_ENV === "development" && error.stack) || "",
    });
};

export default errorHandling;
