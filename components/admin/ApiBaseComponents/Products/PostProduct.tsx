'use client';
import { useState } from 'react';
import { createProduct } from '@/lib/api';
import { NewProduct } from '@/lib/types';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';

// Update PostProductProps type to accept NewProduct
type PostProductProps = {
  onCreate: (product: NewProduct) => void;
};

const PostProduct = ({ onCreate }: PostProductProps) => {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    product_slug: '',
    product_name: '',
    category_id: 0,
    set_size: 0,
    color: '',
    cost: 0,
    price: 0,
    discount_price: undefined,
    description: '',
    stock_quantity: 0, // New field for stock quantity
    last_restocked_date: '', // New field for restocked date
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateProduct = async () => {
    if (
      newProduct.product_slug &&
      newProduct.product_name &&
      newProduct.category_id &&
      newProduct.color &&
      newProduct.cost &&
      newProduct.price &&
      newProduct.description
    ) {
      try {
        setLoading(true);
        const createdProduct = await createProduct(newProduct);
        if (createdProduct) {
          // Pass the newly created product (without product_id, created_at, updated_at)
          onCreate(createdProduct);
          setNewProduct({
            product_slug: '',
            product_name: '',
            category_id: 0,
            set_size: 0,
            color: '',
            cost: 0,
            price: 0,
            discount_price: undefined,
            description: '',
            stock_quantity: 0, // Reset stock quantity to default
            last_restocked_date: '', // Reset restocked date to default
          });
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please provide valid product details.');
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
      <ApiUrlBlock
        title="Create New Product"
        request="POST"
        url="https://crafty-designz-backend.onrender.com/api/products"
      />

      <div className="grid grid-cols-2 gap-6 mb-4">
        {/* Product Slug Input */}
        <div>
          <label
            htmlFor="productSlug"
            className="block text-green-400 font-semibold mb-1"
          >
            Product Slug
          </label>
          <input
            id="productSlug"
            type="text"
            placeholder="Enter product slug"
            value={newProduct.product_slug}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_slug: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Product Name Input */}
        <div>
          <label
            htmlFor="productName"
            className="block text-green-400 font-semibold mb-1"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            placeholder="Enter product name"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_name: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Category ID Input */}
        <div>
          <label
            htmlFor="categoryId"
            className="block text-green-400 font-semibold mb-1"
          >
            Category ID
          </label>
          <input
            id="categoryId"
            type="number"
            placeholder="Enter category ID"
            value={newProduct.category_id}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category_id: parseInt(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Set Size Input */}
        <div>
          <label
            htmlFor="setSize"
            className="block text-green-400 font-semibold mb-1"
          >
            Set Size (Pieces)
          </label>
          <input
            id="setSize"
            type="number"
            placeholder="Enter set size"
            value={newProduct.set_size}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                set_size: parseInt(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Color Input */}
        <div>
          <label
            htmlFor="color"
            className="block text-green-400 font-semibold mb-1"
          >
            Color
          </label>
          <input
            id="color"
            type="text"
            placeholder="Enter color"
            value={newProduct.color}
            onChange={(e) =>
              setNewProduct({ ...newProduct, color: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Cost Input */}
        <div>
          <label
            htmlFor="cost"
            className="block text-green-400 font-semibold mb-1"
          >
            Cost
          </label>
          <input
            id="cost"
            type="number"
            placeholder="Enter cost"
            value={newProduct.cost}
            onChange={(e) =>
              setNewProduct({ ...newProduct, cost: parseFloat(e.target.value) })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Price Input */}
        <div>
          <label
            htmlFor="price"
            className="block text-green-400 font-semibold mb-1"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Discount Price Input */}
        <div>
          <label
            htmlFor="discountPrice"
            className="block text-green-400 font-semibold mb-1"
          >
            Discount Price
          </label>
          <input
            id="discountPrice"
            type="number"
            placeholder="Enter discount price (optional)"
            value={newProduct.discount_price || ''}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                discount_price: parseFloat(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description Input */}
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-green-400 font-semibold mb-1"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Stock Quantity Input */}
        <div>
          <label
            htmlFor="stockQuantity"
            className="block text-green-400 font-semibold mb-1"
          >
            Stock Quantity
          </label>
          <input
            id="stockQuantity"
            type="number"
            placeholder="Enter stock quantity"
            value={newProduct.stock_quantity}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                stock_quantity: parseInt(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Last Restocked Date Input */}
        <div>
          <label
            htmlFor="lastRestockedDate"
            className="block text-green-400 font-semibold mb-1"
          >
            Last Restocked Date
          </label>
          <input
            id="lastRestockedDate"
            type="date"
            value={newProduct.last_restocked_date}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                last_restocked_date: e.target.value,
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <button
        onClick={handleCreateProduct}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Product'}
      </button>
      {error && <p className="text-center text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default PostProduct;
