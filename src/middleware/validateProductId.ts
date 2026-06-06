import logger from '../utils/logger';
import { HttpStatus } from '../utils/enums';
import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/responses';
import { validate as uuidValidate } from "uuid";

export const validateProductId = () =>
  (req: Request, res: Response, next: NextFunction) => {
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