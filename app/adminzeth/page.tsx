'use client';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

type Category = {
  category_id: number;
  category_name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

const AdminPage = () => {
  const [dbStatus, setDbStatus] = useState<string>('Loading...');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch the database connection status from the backend
    fetch('https://crafty-designz-backend.onrender.com')
      .then((response) => response.json())
      .then((data) =>
        setDbStatus(`${data.message} Server time: ${data.serverTime}`)
      )
      .catch(() => setDbStatus('Error connecting to the backend'));

    // Fetch categories data from the backend
    fetch('https://crafty-designz-backend.onrender.com/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="flex items-center justify-center text-4xl font-bold mb-4">
        Admin Page
      </h1>

      <div className="p-4 bg-gray-100 rounded-md shadow-md mb-6">
        {dbStatus}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-3">Category API URL</h2>

      {/* API URL Code Block */}
      <div className="p-4 bg-gray-800 text-white rounded-md shadow-md mb-4 py-6">
        <pre>
          <code>
            <span className="font-mono font-bold bg-gray-600 py-4 px-6 rounded-md mr-6 ml-2 cursor-not-allowed	select-none">
              GET
            </span>
            https://crafty-designz-backend.onrender.com/api/categories
          </code>
        </pre>
      </div>

      {/* Categories JSON Data with Collapsible View */}
      <div className="p-4 bg-gray-900 text-green-400 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-green-400">
          Categories (JSON Format):
        </h2>
        <div className="rounded-full">
          <ReactJson
            src={categories}
            theme="harmonic"
            collapsed={1} // Set to collapse all items by default; 1 means collapse items at level 1
            enableClipboard={true} // Enable copying to clipboard
            displayDataTypes={true} // Hide the data types
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
