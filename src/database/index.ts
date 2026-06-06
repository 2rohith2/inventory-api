import { Product } from "../utils/types";
let products: Product[] = [];

export function getProduct(): Product[] {
  return products;
}

export function createProduct(product: Product) {
  products.push(product);
}

export function deleteProductById(id: string) {
  products = products.filter(product => product.id !== id);
}

export function getProductById(id: string) {
  return products.filter(product => product.id === id);
}

export function updateProductStockById(productId: string, quantity: number) {
  const product = products.find(product => product.id === productId);

  if (!product) {
    throw new Error('Invalid Product ID');
  } else {
    product.quantity = quantity;
  }
}