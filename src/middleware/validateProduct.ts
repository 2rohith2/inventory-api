import logger from '../utils/logger';
import { HttpStatus } from '../utils/enums';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from '../utils/responses';
import { CreateProductSchema } from '../utils/scheme';

export const validateProduct = () =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = CreateProductSchema.safeParse(req.body);

    if (!result.success) {
      logger.log({ level: 'error', message: `Error in Product Details - ${JSON.stringify(req.body)}` });
      const zodError: ZodError = result.error;

      return sendError(
        "ERROR_IN_PRODUCT_DETAILS",
        "Product details doesn't match the required criteria",
        res,
        HttpStatus.BAD_REQUEST,
        zodError.issues
      );
    }

    req.body = result.data;
    next();
  };