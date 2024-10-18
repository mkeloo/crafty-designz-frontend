'use client';
import { useState } from 'react';
import { createInventory } from '@/lib/api';
import { NewInventory } from '@/lib/types';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';

// Update PostInventoryProps type to accept NewInventory
type PostInventoryProps = {
  onCreate: (inventory: NewInventory) => void;
};

const PostInventory = ({ onCreate }: PostInventoryProps) => {
  const [newInventory, setNewInventory] = useState<NewInventory>({
    product_slug: '',
    product_id: 0,
    category_id: 0,
    stock_quantity: 0,
    last_restocked_date: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateInventory = async () => {
    if (
      newInventory.product_slug &&
      newInventory.product_id &&
      newInventory.category_id &&
      newInventory.stock_quantity
    ) {
      try {
        setLoading(true);
        const createdInventory = await createInventory(newInventory);
        if (createdInventory) {
          // Pass the newly created inventory (without inventory_id, created_at, updated_at)
          onCreate(createdInventory);
          setNewInventory({
            product_slug: '',
            product_id: 0,
            category_id: 0,
            stock_quantity: 0,
            last_restocked_date: undefined,
          });
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please provide valid inventory details.');
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
      <ApiUrlBlock
        title="Create New Inventory Item"
        request="POST"
        url="https://crafty-designz-backend.onrender.com/api/inventory"
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
            value={newInventory.product_slug}
            onChange={(e) =>
              setNewInventory({ ...newInventory, product_slug: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Product ID Input */}
        <div>
          <label
            htmlFor="productId"
            className="block text-green-400 font-semibold mb-1"
          >
            Product ID
          </label>
          <input
            id="productId"
            type="number"
            placeholder="Enter product ID"
            value={newInventory.product_id}
            onChange={(e) =>
              setNewInventory({
                ...newInventory,
                product_id: parseInt(e.target.value),
              })
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
            value={newInventory.category_id}
            onChange={(e) =>
              setNewInventory({
                ...newInventory,
                category_id: parseInt(e.target.value),
              })
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
            value={newInventory.stock_quantity}
            onChange={(e) =>
              setNewInventory({
                ...newInventory,
                stock_quantity: parseInt(e.target.value),
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Last Restocked Date Input */}
        <div className="col-span-2">
          <label
            htmlFor="lastRestockedDate"
            className="block text-green-400 font-semibold mb-1"
          >
            Last Restocked Date
          </label>
          <input
            id="lastRestockedDate"
            type="date"
            value={newInventory.last_restocked_date || ''}
            onChange={(e) =>
              setNewInventory({
                ...newInventory,
                last_restocked_date: e.target.value,
              })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <button
        onClick={handleCreateInventory}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Inventory'}
      </button>
      {error && <p className="text-center text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default PostInventory;
