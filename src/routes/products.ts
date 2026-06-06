import { Request, Response } from 'express';
import { Router } from 'express';
import logger from '../utils/logger';
import { Product } from '../utils/types';
import { sendError, sendSuccess } from '../utils/responses';
import { HttpStatus } from '../utils/enums';
import { createProduct, deleteProductById, getProduct, getProductById, updateProductStockById } from '../database';
import { v4 } from 'uuid';
import { validateProduct } from '../middleware/validateProduct';
import { CreateProductSchema, ProductIdAndStockSchema } from '../utils/scheme';
import { validateProductId } from '../middleware/validateProductId';
import { validateProductIdAndStock } from '../middleware/validateProductIdAndStock';


const products = Router();

products.get('/', (req: Request, res: Response) => {
  logger.log({ level: 'info', message: 'sending products list' });
  sendSuccess(getProduct(), res, '', HttpStatus.OK);
});

products.post('/', validateProduct(), (req: Request, res: Response) => {
  const product: Product = req.body;
  product.id = v4();
  createProduct(product);
  logger.log({ level: 'info', message: 'Create Product' });
  sendSuccess(product, res, 'Product created', HttpStatus.CREATED);
});

products.delete('/:id', validateProductId(), (req: Request, res: Response) => {
  const productId: string = req.params.id as string;
  deleteProductById(productId);
  logger.log({ level: 'info', message: `Product deleted - ${productId}` });
  sendSuccess('', res, '', HttpStatus.NO_CONTENT);
});

products.patch('/:id/stock', validateProductIdAndStock(), (req: Request, res: Response) => {
  const productId: string = req.params.id as string;
  const quantity: number = req.body.quantity;

  try {

    updateProductStockById(productId, quantity);
    logger.log({ level: 'info', message: `Product deleted - ${productId}` });
    sendSuccess(getProductById(productId), res, '', HttpStatus.OK);

  } catch (error: unknown) {

    return sendError(
      "ERROR_IN_UPDATING_PRODUCT_QUANTITY",
      'Error in updating product quanity',
      res,
      HttpStatus.BAD_REQUEST,
      error instanceof Error ? error.message : ""
    );

  }

});

export default products;