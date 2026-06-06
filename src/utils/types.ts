export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  stockThreshold: number;
  price: number;
}