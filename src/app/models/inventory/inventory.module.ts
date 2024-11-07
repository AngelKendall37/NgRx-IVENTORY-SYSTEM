export interface Category {
  id: number;
  name: string;
  description: string;
  pivot: {
    product_id: number;
    category_id: number;
  };
}

export interface Inventory {
  id: number;
  product_id: number;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  categories: Category[];
  inventory: Inventory | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Transaction {
  id: number;
  product_id: number;
  user_id: number;
  type: string;
  quantity: number;
  transaction_date: string;
  product: Product;
  user: User;
}
