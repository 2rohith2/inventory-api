import { Request, Response } from 'express';
import { Router } from 'express';
import logger from '../utils/logger';
import { Product } from '../utils/types';
import { sendError, sendSuccess } from '../utils/responses';
import { HttpStatus } from '../utils/enums';
import { createProduct, deleteProductById, getLowStockProductCount, getLowStockProducts, getOutOfStockProductCount, getProduct, getProductById, getProductCount, updateProductStockById } from '../database';
import { v4 } from 'uuid';
import { validateProduct } from '../middleware/validateProduct';
import { validateProductId } from '../middleware/validateProductId';
import { validateProductIdAndStock } from '../middleware/validateProductIdAndStock';


const products = Router();

products.get('/', (req: Request, res: Response) => {
  logger.log({ level: 'info', message: 'Products List sent' });
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
    logger.log({ level: 'info', message: 'Product quantity is updated' });
    sendSuccess(getProductById(productId), res, '', HttpStatus.OK);

  } catch (error: unknown) {

    return sendError(
      "ERROR_IN_UPDATING_PRODUCT_QUANTITY",
      'Error in updating product quantity',
      res,
      HttpStatus.BAD_REQUEST,
      error instanceof Error ? error.message : ""
    );

  }

});

products.get('/count', (req: Request, res: Response) => {
  logger.log({ level: 'info', message: 'Count of Products send' });
  sendSuccess({ count: getProductCount() }, res, '', HttpStatus.OK);
});

products.get('/low-stock/count', (req: Request, res: Response) => {
  logger.log({ level: 'info', message: 'Count of Low stock Products send' });
  sendSuccess({ count: getLowStockProductCount() }, res, '', HttpStatus.OK);
});

products.get('/out-of-stock/count', (req: Request, res: Response) => {
  logger.log({ level: 'info', message: 'Count of Out of Stock Products send' });
  sendSuccess({ count: getOutOfStockProductCount() }, res, '', HttpStatus.OK);
});

products.get('/low-stock', (req: Request, res: Response) => {
  const limit = typeof req.query.limit === "string" ? parseInt(req.query.limit, 10) : 5;
  logger.log({ level: 'info', message: 'Count of Out of Stock Products send' });
  sendSuccess(getLowStockProducts(limit), res, '', HttpStatus.OK);
});

export default products;