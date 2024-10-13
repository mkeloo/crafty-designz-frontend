'use client';
import GetInventory from './GetInventory';
import PostInventory from './PostInventory';
import { useState } from 'react';
import { Inventory, NewInventory } from '@/lib/types';

const InventoryAdmin = () => {
  const [inventoryItems, setInventoryItems] = useState<Inventory[]>([]);

  // Adjusting handleNewInventory function to accept NewInventory type
  const handleNewInventory = (newInventory: NewInventory) => {
    // Create a new Inventory object by adding missing fields like id and timestamps
    const createdInventory: Inventory = {
      ...newInventory,
      inventory_id: inventoryItems.length + 1, // Assuming a new ID, can be replaced with actual value
      inventory_uuid: 'random-uuid', // Assuming a random UUID, can be replaced with actual value
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setInventoryItems((prevInventoryItems) => [
      ...prevInventoryItems,
      createdInventory,
    ]);
  };

  return (
    <div className="p-4 rounded-md shadow-md bg-slate-300 mb-8">
      <h1 className="text-3xl font-bold mb-6">Inventory API Requests</h1>

      {/* Get Inventory Items */}
      <GetInventory />

      {/* Post Inventory */}
      <PostInventory onCreate={handleNewInventory} />
    </div>
  );
};

export default InventoryAdmin;
