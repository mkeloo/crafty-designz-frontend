'use client';
import { useState } from 'react';
import { fetchCategoryById, updateCategory } from '@/lib/api';
import { Category, NewCategory } from '@/lib/types';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';

type UpdateCategoryProps = {
  onUpdate: (updatedCategory: Category) => void;
};

const UpdateCategory = ({ onUpdate }: UpdateCategoryProps) => {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [updatedCategory, setUpdatedCategory] = useState<NewCategory>({
    category_name: '',
    description: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchCategory = async () => {
    if (!categoryId) return;

    try {
      setLoading(true);
      const fetchedCategory = await fetchCategoryById(categoryId);
      if (fetchedCategory) {
        setCategory(fetchedCategory);
        setUpdatedCategory({
          category_name: fetchedCategory.category_name,
          description: fetchedCategory.description,
        });
      } else {
        setError('Category not found');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCategory = async () => {
    if (
      !categoryId ||
      !updatedCategory.category_name ||
      !updatedCategory.description
    ) {
      setError('Please provide valid category details.');
      return;
    }

    try {
      setLoading(true);
      const updated = await updateCategory(categoryId, updatedCategory);
      if (updated) {
        onUpdate(updated);
        setCategory(null); // Reset after update
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
      <ApiUrlBlock
        title={`Update Category`}
        request="UPDATE"
        url="https://crafty-designz-backend.onrender.com/api/categories/:id"
      />

      {/* Category ID Input */}
      <div className="flex justify-start items-center space-x-4 mb-4">
        <h4 className="text-xl text-green-400 font-semibold mb-1">
          Enter Category ID:
        </h4>
        <input
          type="number"
          placeholder="Enter category ID"
          value={categoryId || ''}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className="p-2 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
        />
      </div>
      <div className="flex items-center justify-start mb-4">
        <button
          onClick={handleFetchCategory}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Category'}
        </button>
      </div>

      {category && (
        <>
          {/* Category Name Input */}
          <div className="flex flex-col space-y-4 mb-4">
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
              value={updatedCategory.category_name}
              onChange={(e) =>
                setUpdatedCategory({
                  ...updatedCategory,
                  category_name: e.target.value,
                })
              }
              className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Description Input */}
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
              value={updatedCategory.description}
              onChange={(e) =>
                setUpdatedCategory({
                  ...updatedCategory,
                  description: e.target.value,
                })
              }
              className="p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            onClick={handleUpdateCategory}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Category'}
          </button>
        </>
      )}

      {error && <p className="text-center text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default UpdateCategory;
