import { Product } from "../utils/types";
let products: Product[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Wireless Mouse",
    sku: "PROD-001",
    category: "Electronics",
    quantity: 0,
    threshold: 10,
    price: 799,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Mechanical Keyboard",
    sku: "PROD-002",
    category: "Electronics",
    quantity: 0,
    threshold: 15,
    price: 2499,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "USB-C Cable",
    sku: "PROD-003",
    category: "Accessories",
    quantity: 0,
    threshold: 20,
    price: 199,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Gaming Headset",
    sku: "PROD-004",
    category: "Electronics",
    quantity: 0,
    threshold: 8,
    price: 1599,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Laptop Stand",
    sku: "PROD-005",
    category: "Accessories",
    quantity: 0,
    threshold: 12,
    price: 999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    name: "Bluetooth Speaker",
    sku: "PROD-006",
    category: "Electronics",
    quantity: 0,
    threshold: 10,
    price: 1299,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    name: "Webcam",
    sku: "PROD-007",
    category: "Electronics",
    quantity: 0,
    threshold: 5,
    price: 1899,
  },

  // ================= LOW STOCK (12) =================
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    name: "HDMI Cable",
    sku: "PROD-008",
    category: "Accessories",
    quantity: 5,
    threshold: 10,
    price: 299,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    name: "Office Chair",
    sku: "PROD-009",
    category: "Furniture",
    quantity: 2,
    threshold: 5,
    price: 4999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    name: "Notebook",
    sku: "PROD-010",
    category: "Stationery",
    quantity: 8,
    threshold: 20,
    price: 49,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    name: "Pen Set",
    sku: "PROD-011",
    category: "Stationery",
    quantity: 10,
    threshold: 15,
    price: 99,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    name: "Desk Lamp",
    sku: "PROD-012",
    category: "Furniture",
    quantity: 3,
    threshold: 10,
    price: 899,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440013",
    name: "Smart Watch",
    sku: "PROD-013",
    category: "Electronics",
    quantity: 4,
    threshold: 10,
    price: 2999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440014",
    name: "Power Bank",
    sku: "PROD-014",
    category: "Electronics",
    quantity: 6,
    threshold: 15,
    price: 1299,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440015",
    name: "Mouse Pad",
    sku: "PROD-015",
    category: "Accessories",
    quantity: 9,
    threshold: 20,
    price: 199,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440016",
    name: "Tablet Stand",
    sku: "PROD-016",
    category: "Accessories",
    quantity: 7,
    threshold: 12,
    price: 599,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440017",
    name: "Extension Board",
    sku: "PROD-017",
    category: "Electronics",
    quantity: 3,
    threshold: 8,
    price: 399,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440018",
    name: "External HDD",
    sku: "PROD-018",
    category: "Electronics",
    quantity: 2,
    threshold: 5,
    price: 4999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440019",
    name: "Router",
    sku: "PROD-019",
    category: "Electronics",
    quantity: 1,
    threshold: 5,
    price: 2199,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440020",
    name: "Chair Cushion",
    sku: "PROD-020",
    category: "Furniture",
    quantity: 4,
    threshold: 10,
    price: 399,
  },

  // ================= NORMAL STOCK (18) =================
  {
    id: "550e8400-e29b-41d4-a716-446655440021",
    name: "Monitor",
    sku: "PROD-021",
    category: "Electronics",
    quantity: 25,
    threshold: 10,
    price: 9999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440022",
    name: "Laptop",
    sku: "PROD-022",
    category: "Electronics",
    quantity: 18,
    threshold: 5,
    price: 55000,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440023",
    name: "Smartphone",
    sku: "PROD-023",
    category: "Electronics",
    quantity: 40,
    threshold: 10,
    price: 15000,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440024",
    name: "SSD Drive",
    sku: "PROD-024",
    category: "Electronics",
    quantity: 30,
    threshold: 8,
    price: 3999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440025",
    name: "Gaming Mouse Pad",
    sku: "PROD-025",
    category: "Accessories",
    quantity: 140,
    threshold: 20,
    price: 499,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440026",
    name: "Water Bottle",
    sku: "PROD-026",
    category: "Home",
    quantity: 60,
    threshold: 15,
    price: 199,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440027",
    name: "Backpack",
    sku: "PROD-027",
    category: "Accessories",
    quantity: 45,
    threshold: 10,
    price: 1299,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440028",
    name: "Shoes",
    sku: "PROD-028",
    category: "Fashion",
    quantity: 33,
    threshold: 5,
    price: 1999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440029",
    name: "T-Shirt",
    sku: "PROD-029",
    category: "Fashion",
    quantity: 80,
    threshold: 10,
    price: 499,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440030",
    name: "Jeans",
    sku: "PROD-030",
    category: "Fashion",
    quantity: 70,
    threshold: 10,
    price: 1499,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440031",
    name: "Jacket",
    sku: "PROD-031",
    category: "Fashion",
    quantity: 22,
    threshold: 5,
    price: 2999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440032",
    name: "Sunglasses",
    sku: "PROD-032",
    category: "Fashion",
    quantity: 55,
    threshold: 10,
    price: 999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440033",
    name: "Watch",
    sku: "PROD-033",
    category: "Fashion",
    quantity: 38,
    threshold: 5,
    price: 4999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440034",
    name: "Perfume",
    sku: "PROD-034",
    category: "Beauty",
    quantity: 26,
    threshold: 8,
    price: 1999,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440035",
    name: "Face Cream",
    sku: "PROD-035",
    category: "Beauty",
    quantity: 90,
    threshold: 15,
    price: 299,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440036",
    name: "Shampoo",
    sku: "PROD-036",
    category: "Beauty",
    quantity: 110,
    threshold: 20,
    price: 249,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440037",
    name: "Soap Pack",
    sku: "PROD-037",
    category: "Home",
    quantity: 150,
    threshold: 25,
    price: 199,
  },
];

export function getProduct(): Product[] {
  return products;
}

export function getProductCount(): number {
  return products.length;
}

export function getLowStockProductCount(): number {
  return products.filter(
    (product) => product.quantity > 0 && product.quantity <= product.threshold
  ).length;
}

export function getOutOfStockProductCount(): number {
  return products.filter(
    (product) => product.quantity <= 0
  ).length;
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

export function getLowStockProducts(limit: number) {
  return products.filter(
    (product) => product.quantity > 0 && product.quantity <= product.threshold
  )
    .sort((a, b) => a.quantity - b.quantity)
    .slice(0, limit);
}

export function updateProductStockById(productId: string, quantity: number) {
  const product = products.find(product => product.id === productId);

  if (!product) {
    throw new Error('Invalid Product ID');
  } else {
    product.quantity = quantity;
  }
}