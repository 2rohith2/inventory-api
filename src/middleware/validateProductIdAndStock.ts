import logger from '../utils/logger';
import { HttpStatus } from '../utils/enums';
import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema } from 'zod';
import { sendError } from '../utils/responses';
import { validate as uuidValidate } from "uuid";
import { ProductIdAndStockSchema } from '../utils/scheme';

export const validateProductIdAndStock = () =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = ProductIdAndStockSchema.safeParse({ ...req.body, id: req.params.id });

    if (!result.success) {
      logger.log({ level: 'error', message: `Error in Product Details - ${JSON.stringify(req.body)}` });
      const zodError: ZodError = result.error;

      return sendError(
        "ERROR_IN_STOCK_DETAILS",
        "Product details doesn't match the required criteria",
        res,
        HttpStatus.BAD_REQUEST,
        zodError.issues
      );
    }

    if (!uuidValidate(req.params.id)) {
      logger.log({ level: 'error', message: `Invalid product id - ${req.params.id} used to delete product ` });

      return sendError(
        "INVALID_PRODUCT_ID",
        "Invalid product id used to delete",
        res,
        HttpStatus.BAD_REQUEST,
        ''
      );
    }

    next();
  };