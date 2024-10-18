'use client';
import { useState } from 'react';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';
import { deleteInventoryItem } from '@/lib/api';

// Delete Inventory Component
const DeleteInventory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<string | null>(null);
  const [inventoryId, setInventoryId] = useState<number | null>(null);

  const handleDeleteInventory = async () => {
    if (inventoryId === null) {
      setError('Please enter a valid inventory ID.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setDeleteMessage(null);

      const success = await deleteInventoryItem(inventoryId);
      if (success) {
        setDeleteMessage(
          `Inventory item with ID ${inventoryId} deleted successfully.`
        );
      } else {
        setDeleteMessage(
          `Failed to delete inventory item with ID ${inventoryId}.`
        );
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* DELETE Inventory Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Delete Inventory Item by ID"
          request="DELETE"
          url="https://crafty-designz-backend.onrender.com/api/inventory/:id"
        />
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl text-green-400 font-semibold">
            Enter ID to Delete:
          </h4>
          <input
            type="number"
            placeholder="Enter inventory ID"
            value={inventoryId ?? ''}
            onChange={(e) => setInventoryId(parseInt(e.target.value))}
            className="p-2 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
          />
          <div className="flex items-center justify-start">
            <button
              onClick={handleDeleteInventory}
              disabled={loading}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-red-700 disabled:bg-gray-400"
            >
              {loading ? 'Deleting...' : 'Delete Inventory'}
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

export default DeleteInventory;
