// api/apiCalls.ts

const BASE_URL = 'https://crafty-designz-backend.onrender.com/api';

import { Category, NewCategory, Product, NewProduct, Inventory, NewInventory } from '@/lib/types'; 

// GET REQUESTS

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      const errorDetail = await response.text();
      console.error('Error details:', errorDetail);
      throw new Error('Failed to fetch categories');
    }
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Fetch a category by ID
export const fetchCategoryById = async (id: number): Promise<Category | null> => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${id}`);
    if (!response.ok) {
      const errorDetail = await response.text();
      console.error('Error details:', errorDetail);
      throw new Error('Failed to fetch category by ID');
    }
    const data: Category = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category by ID:', error);
    return null;
  }
};

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      const errorDetail = await response.text();
      console.error('Error details:', errorDetail);
      throw new Error('Failed to fetch products');
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch a product by ID
export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product by ID');
    }
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
};

// Fetch all inventory items
export const fetchInventory = async (): Promise<Inventory[]> => {
  try {
    const response = await fetch(`${BASE_URL}/inventory`);
    if (!response.ok) {
      throw new Error('Failed to fetch inventory items');
    }
    const data: Inventory[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    return []; 
  }
};

// Fetch an inventory item by ID
export const fetchInventoryById = async (id: number): Promise<Inventory | null> => {
  try {
    const response = await fetch(`${BASE_URL}/inventory/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch inventory by ID');
    }
    const data: Inventory = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching inventory by ID:', error);
    return null;
  }
};



// POST REQUESTS

// Create a new category
export const createCategory = async (category: NewCategory): Promise<Category | null> => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });

    if (!response.ok) {
      throw new Error('Failed to create category');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
};

// Create a new product
export const createProduct = async (product: NewProduct): Promise<NewProduct | null> => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to create product');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};


// Create a new inventory item
export const createInventory = async (inventory: NewInventory): Promise<Inventory | null> => {
  try {
    const response = await fetch(`${BASE_URL}/inventory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inventory),
    });

    if (!response.ok) {
      throw new Error('Failed to create inventory item');
    }

    // Expect the full Inventory object to be returned after creation
    const data: Inventory = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating inventory item:', error);
    return null;
  }
};
