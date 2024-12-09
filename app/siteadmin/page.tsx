"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/admin/siteadmin/StructureComponents/Navigation";
import HeaderBar from "@/components/admin/siteadmin/StructureComponents/HeaderBar";
import { motion } from "framer-motion";
import DataTable from "@/components/admin/siteadmin/StructureComponents/DataTable";
// import { fetchCategoriesData } from "@/components/admin/siteadmin/DataComponents/CategoriesTableData";
// import { fetchSubcategoriesData } from "@/components/admin/siteadmin/DataComponents/SubCategoriesTableData";
// import { fetchProductsData } from "@/components/admin/siteadmin/DataComponents/ProductsTableData";

import {
    fetchCategoriesData,
    fetchSubcategoriesData,
    fetchProductsData,
} from "@/components/admin/siteadmin/DataComponents/APIDataTable";

const SiteAdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Categories");
    const [categories, setCategories] = useState<any[]>([]);
    const [subcategories, setSubcategories] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setError(null);
                if (currentPage === "Categories") {
                    const categoriesData = await fetchCategoriesData();
                    setCategories(categoriesData);
                } else if (currentPage === "Subcategories") {
                    const subcategoriesData = await fetchSubcategoriesData();
                    setSubcategories(subcategoriesData);
                } else if (currentPage === "Products") {
                    const productsData = await fetchProductsData();
                    setProducts(productsData);
                }
            } catch (err: any) {
                setError(err.message);
            }
        };

        getData();
    }, [currentPage]);

    const categoryColumns = [
        { key: "category_id", label: "Category ID" },
        { key: "category_name", label: "Category Name" },
        { key: "description", label: "Description" },
        { key: "type_count", label: "Type Count" },
        { key: "created_at", label: "Created At" },
    ];

    const subcategoryColumns = [
        { key: "subcategory_id", label: "Subcategory ID" },
        { key: "subcategory_name", label: "Subcategory Name" },
        { key: "description", label: "Description" },
        { key: "category_id", label: "Category ID" },
        { key: "created_at", label: "Created At" },
    ];

    const productColumns = [
        { key: "product_id", label: "Product ID" },
        { key: "product_name", label: "Product Name" },
        { key: "description", label: "Description" },
        { key: "price", label: "Price" },
        { key: "stock_quantity", label: "Stock Quantity" },
        { key: "created_at", label: "Created At" },
    ];


    return (
        <main className="w-full min-h-[100vh] h-full flex flex-row relative bg-black overflow-y-scroll scrollbar-hidden">
            {/* Sidebar */}
            <Navigation
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setCurrentPage={setCurrentPage} // Pass the updater function to Navigation
            />

            {/* Main Content */}
            <motion.section
                animate={{
                    marginLeft: isSidebarOpen ? "16rem" : "5.5rem", // Adjust margin based on sidebar state
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                }}
                className="w-full h-full flex flex-col bg-black"
            >
                {/* HeaderBar */}
                <HeaderBar />

                <div className="flex flex-col px-10 py-5 gap-5">
                    {/* Dynamic page title */}
                    <h1 className="text-4xl text-neutral-200">{currentPage}</h1>

                    {/* Dynamic Data Table */}
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : currentPage === "Categories" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(categories)} // Pass fetched data to DataTable
                            columns={categoryColumns}
                        />
                    ) : currentPage === "Subcategories" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(subcategories)} // Pass fetched data to DataTable
                            columns={subcategoryColumns}
                        />
                    ) : currentPage === "Products" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(products)} // Pass fetched data to DataTable
                            columns={productColumns}
                        />
                    ) : null}

                    <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                    <div className="flex flex-row gap-5 w-full">
                        <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                        <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default SiteAdminPage;