"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ApiUrlBlock from "@/components/admin/dataAPI/ApiURLblock";
import { fetchInventory, fetchInventoryById } from "@/lib/api";
import { Inventory } from "@/lib/types";

// Dynamically import ReactJson component to avoid SSR error
// const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

const GetInventory = () => {
  const [inventoryItems, setInventoryItems] = useState<Inventory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInventory, setSelectedInventory] = useState<Inventory | null>(
    null
  );

  useEffect(() => {
    const getInventory = async () => {
      try {
        setLoading(true);
        const data: Inventory[] = await fetchInventory();
        setInventoryItems(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getInventory();
  }, []);

  const handleFetchInventoryById = async (id: number) => {
    try {
      setLoading(true);
      const inventory = await fetchInventoryById(id);
      setSelectedInventory(inventory);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* GET Inventory Items Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch All Inventory Items"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/inventory"
        />

        {loading ? (
          <p className="text-center text-gray-700 mt-4">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600 mt-4">{error}</p>
        ) : (
          <>
            <h2 className="text-xl text-green-400 font-semibold mb-3">
              JSON Response:
            </h2>
            <div className="rounded-full mb-4">
              {/* <ReactJson
                src={inventoryItems}
                theme="harmonic"
                collapsed={1}
                enableClipboard={true}
                displayDataTypes={true}
              /> */}
            </div>
          </>
        )}
      </div>

      {/* GET Inventory by ID Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch Inventory by ID"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/inventory/:id"
        />
        <div className="flex justify-start items-center space-x-4">
          <h4 className="text-xl text-green-400 font-semibold mb-3">
            Enter ID:
          </h4>
          <input
            type="number"
            placeholder="Enter inventory ID"
            onChange={(e) => handleFetchInventoryById(parseInt(e.target.value))}
            className="p-2 mb-4 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
          />
        </div>

        {selectedInventory && (
          <div className="p-4 rounded-md shadow-md mb-4">
            <h4 className="text-xl text-green-400 font-semibold mb-3">
              Selected Inventory Item:
            </h4>
            {/* <ReactJson
              src={selectedInventory}
              theme="harmonic"
              collapsed={1}
              enableClipboard={true}
              displayDataTypes={true}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInventory;
