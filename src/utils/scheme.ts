import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string(),
  sku: z.string(),
  category: z.string(),
  quantity: z.number(),
  stockThreshold: z.number(),
  price: z.number(),
}).strict();

export const ProductIdAndStockSchema = z.object({
  id: z.string(),
  quantity: z.number()
}).strict();