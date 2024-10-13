// ProductAdmin.tsx

'use client';
import GetProducts from './GetProducts';
import PostProduct from './PostProduct';
import DeleteProduct from './DeleteProduct';
import { useState } from 'react';
import { Product, NewProduct } from '@/lib/types';

const ProductAdmin = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Adjusting handleNewProduct function to accept NewProduct type
  const handleNewProduct = (newProduct: NewProduct) => {
    // Create a new Product object by adding missing fields like id and timestamps
    const createdProduct: Product = {
      ...newProduct,
      product_id: products.length + 1, // Assuming a new ID, can be replaced with actual value
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setProducts((prevProducts) => [...prevProducts, createdProduct]);
  };

  return (
    <div className="p-4 rounded-md shadow-md bg-slate-300 mb-8">
      <h1 className="text-3xl font-bold mb-6">Product API Requests</h1>

      {/* Get Products */}
      <GetProducts />

      {/* Post Product */}
      <PostProduct onCreate={handleNewProduct} />

      {/* Delete Product */}
      <DeleteProduct />
    </div>
  );
};

export default ProductAdmin;
