"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ApiUrlBlock from "@/components/admin/dataAPI/ApiURLblock";
import { fetchCategories, fetchCategoryById } from "@/lib/api";
import { Category } from "@/lib/types";

// Dynamically import ReactJson component to avoid SSR error
// const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

const GetCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data: Category[] = await fetchCategories();
        setCategories(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleFetchCategoryById = async (id: number) => {
    try {
      setLoading(true);
      const category = await fetchCategoryById(id);
      setSelectedCategory(category);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* GET Categories Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch All Categories"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/categories"
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
                src={categories}
                theme="harmonic"
                collapsed={1}
                enableClipboard={true}
                displayDataTypes={true}
              /> */}
            </div>
          </>
        )}
      </div>

      {/* GET Category by ID Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch Category by ID"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/categories/:id"
        />
        <div className="flex justify-start items-center space-x-4">
          <h4 className="text-xl text-green-400 font-semibold mb-3">
            Enter ID:
          </h4>
          <input
            type="number"
            placeholder="Enter category ID"
            onChange={(e) => handleFetchCategoryById(parseInt(e.target.value))}
            className="p-2 mb-4 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
          />
        </div>

        {selectedCategory && (
          <div className="p-4 rounded-md shadow-md mb-4">
            <h4 className="text-xl text-green-400 font-semibold mb-3">
              Selected Category:
            </h4>
            {/* <ReactJson
              src={selectedCategory}
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

export default GetCategories;
