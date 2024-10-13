'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ApiUrlBlock from '@/components/admin/dataAPI/ApiURLblock';
import { fetchProducts, fetchProductById } from '@/lib/api';
import { Product } from '@/lib/types';

// Dynamically import ReactJson component to avoid SSR error
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

const GetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data: Product[] = await fetchProducts();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleFetchProductById = async (id: number) => {
    try {
      setLoading(true);
      const product = await fetchProductById(id);
      setSelectedProduct(product);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* GET Products Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch All Products"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/products"
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
              <ReactJson
                src={products}
                theme="harmonic"
                collapsed={1}
                enableClipboard={true}
                displayDataTypes={true}
              />
            </div>
          </>
        )}
      </div>

      {/* GET Product by ID Block */}
      <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6">
        <ApiUrlBlock
          title="Fetch Product by ID"
          request="GET"
          url="https://crafty-designz-backend.onrender.com/api/products/:id"
        />
        <div className="flex justify-start items-center space-x-4">
          <h4 className="text-xl text-green-400 font-semibold mb-3">
            Enter ID:
          </h4>
          <input
            type="number"
            placeholder="Enter product ID"
            onChange={(e) => handleFetchProductById(parseInt(e.target.value))}
            className="p-2 mb-4 text-black rounded-2xl bg-gray-200 border border-gray-400 focus:border-blue-500 outline-none"
          />
        </div>

        {selectedProduct && (
          <div className="p-4 rounded-md shadow-md mb-4">
            <h4 className="text-xl text-green-400 font-semibold mb-3">
              Selected Product:
            </h4>
            <ReactJson
              src={selectedProduct}
              theme="harmonic"
              collapsed={1}
              enableClipboard={true}
              displayDataTypes={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetProducts;
