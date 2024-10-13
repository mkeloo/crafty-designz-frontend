// lib/types.ts

// Type for Category
export type Category = {
  category_id: number;
  category_name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type NewCategory = {
  category_name: string;
  description: string;
};

// Type for Product
export type Product = {
  product_id: number;
  product_slug: string;
  product_name: string;
  category_id: number;
  set_size: number;
  color: string;
  cost: number;
  price: number;
  discount_price?: number;
  description: string;
  created_at: string;
  updated_at: string;
};

// Type for NewProduct
export type NewProduct = {
  product_slug: string;
  product_name: string;
  category_id: number;
  set_size: number;
  color: string;
  cost: number;
  price: number;
  discount_price?: number;
  description: string;
};



// Type for Inventory
export type Inventory = {
  inventory_id: number;
  product_slug: string;
  inventory_uuid: string;
  product_id: number;
  category_id: number;
  stock_quantity: number;
  last_restocked_date?: string;
  created_at: string;
  updated_at: string;
};


// Type for NewInventory
export type NewInventory = {
  product_slug: string;
  product_id: number;
  category_id: number;
  stock_quantity: number;
  last_restocked_date?: string; // Optional field
};


// Type for Media
export type Media = {
  media_id: number;
  product_id: number;
  category_id: number;
  media_type: string;
  media_url: string;
  created_at: string;
  updated_at: string;
};