import { Response } from "express";

export const sendSuccess = (
  data: any = null,
  res: Response,
  message?: string,
  statusCode: number = 200,
  meta?: any
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
  });
};

export const sendError = (
  code = "ERROR",
  message: string,
  res: Response,
  statusCode: number,
  details?: any
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });
};