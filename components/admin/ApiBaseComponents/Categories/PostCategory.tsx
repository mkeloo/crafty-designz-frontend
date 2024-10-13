'use client';
import { useState } from 'react';
import { createCategory } from '@/lib/api';
import { Category, NewCategory } from '@/lib/types';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';

type PostCategoryProps = {
  onCreate: (category: Category) => void; // Update to accept a full Category object
};

const PostCategory = ({ onCreate }: PostCategoryProps) => {
  const [newCategory, setNewCategory] = useState<NewCategory>({
    category_name: '',
    description: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateCategory = async () => {
    if (newCategory.category_name && newCategory.description) {
      try {
        setLoading(true);
        const createdCategory = await createCategory(newCategory);
        if (createdCategory) {
          // Ensure createdCategory has the type `Category` so it includes all properties
          onCreate(createdCategory);
          setNewCategory({ category_name: '', description: '' });
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please provide a valid category name and description.');
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
      <ApiUrlBlock
        title="Create New Category"
        request="POST"
        url="https://crafty-designz-backend.onrender.com/api/categories"
      />

      <div className="flex flex-col space-y-4 mb-4">
        {/* Category Name Input */}
        <div>
          <label
            htmlFor="categoryName"
            className="block text-green-400 font-semibold mb-1"
          >
            Category Name
          </label>
          <input
            id="categoryName"
            type="text"
            placeholder="Enter category name"
            value={newCategory.category_name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, category_name: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="categoryDescription"
            className="block text-green-400 font-semibold mb-1"
          >
            Description
          </label>
          <input
            id="categoryDescription"
            type="text"
            placeholder="Enter description"
            value={newCategory.description}
            onChange={(e) =>
              setNewCategory({ ...newCategory, description: e.target.value })
            }
            className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <button
        onClick={handleCreateCategory}
        className="bg-blue-500 text-white font-bold  py-2 px-4 rounded-md"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Category'}
      </button>
      {error && <p className="text-center text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default PostCategory;
