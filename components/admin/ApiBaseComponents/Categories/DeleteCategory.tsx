'use client';
import { useState } from 'react';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';
import { deleteCategory } from '@/lib/api';

// Delete Category Component
const DeleteCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const handleDeleteCategory = async () => {
    if (categoryId === null) {
      setError('Please enter a valid category ID.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setDeleteMessage(null);

      const success = await deleteCategory(categoryId);
      if (success) {
        setDeleteMessage(
          `Category with ID ${categoryId} deleted successfully.`
        );
      } else {
        setDeleteMessage(`Failed to delete category with ID ${categoryId}.`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* DELETE Category Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Delete Category by ID"
          request="DELETE"
          url="https://crafty-designz-backend.onrender.com/api/categories/:id"
        />
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl text-green-400 font-semibold">
            Enter ID to Delete:
          </h4>
          <input
            type="number"
            placeholder="Enter category ID"
            value={categoryId ?? ''}
            onChange={(e) => setCategoryId(parseInt(e.target.value))}
            className="p-2 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
          />
          <div className="flex items-center justify-start">
            <button
              onClick={handleDeleteCategory}
              disabled={loading}
              className="bg-red-600 text-white font-bold py-2 px-4  rounded-md mt-2 hover:bg-red-700 disabled:bg-gray-400"
            >
              {loading ? 'Deleting...' : 'Delete Category'}
            </button>
          </div>

          {error && <p className="text-center text-red-600 mt-4">{error}</p>}
          {deleteMessage && (
            <p
              className={`text-center mt-4 ${
                deleteMessage.includes('successfully')
                  ? 'text-green-400'
                  : 'text-red-600'
              }`}
            >
              {deleteMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
