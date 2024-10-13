'use client';
import { useEffect, useState } from 'react';
import CategoryAdmin from '@/components/admin/ApiBaseComponents/Categories/CategoryAdmin';
import ProductAdmin from '@/components/admin/ApiBaseComponents/Products/ProductAdmin';
import InventoryAdmin from '@/components/admin/ApiBaseComponents/Inventory/InventoryAdmin';

const AdminPage = () => {
  const [dbStatus, setDbStatus] = useState<string>('Loading...');

  useEffect(() => {
    // Fetch the database connection status from the backend
    fetch('https://crafty-designz-backend.onrender.com')
      .then((response) => response.json())
      .then((data) =>
        setDbStatus(`${data.message} Server time: ${data.serverTime}`)
      )
      .catch(() => setDbStatus('Error connecting to the backend'));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="flex items-center justify-center text-4xl font-bold mb-4 p-4">
        Admin Page
      </h1>

      <div className="p-4 bg-gray-100 rounded-md shadow-md mb-6">
        {dbStatus}
      </div>

      {/* Categories Component */}
      <CategoryAdmin />

      {/* Products Component */}
      <ProductAdmin />

      {/* Inventory Component */}
      <InventoryAdmin />
    </div>
  );
};

export default AdminPage;
