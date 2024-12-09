"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/admin/siteadmin/StructureComponents/Navigation";
import HeaderBar from "@/components/admin/siteadmin/StructureComponents/HeaderBar";
import { motion } from "framer-motion";
import DataTable from "@/components/admin/siteadmin/StructureComponents/DataTable";
import {
    fetchCategoriesData,
    fetchSubcategoriesData,
    fetchProductsData,
    updateRow,
    deleteRow,
    insertRow,
} from "@/components/admin/siteadmin/DataComponents/APIDataTable";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type PageType = "Categories" | "Subcategories" | "Products";

const SiteAdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<PageType>("Categories");
    const [categories, setCategories] = useState<any[]>([]);
    const [subcategories, setSubcategories] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newEntry, setNewEntry] = useState<any>({});

    // Wrapper function to handle type casting for setCurrentPage
    const handleSetCurrentPage = (page: string) => {
        if (["Categories", "Subcategories", "Products"].includes(page)) {
            setCurrentPage(page as PageType);
        }
    };

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

    const handleCreate = async () => {
        try {
            if (currentPage === "Categories") {
                await insertRow("categories", newEntry);
            } else if (currentPage === "Subcategories") {
                await insertRow("subcategories", newEntry);
            } else if (currentPage === "Products") {
                await insertRow("products", newEntry);
            }
            setIsDialogOpen(false);
            location.reload();
        } catch (err) {
            console.error("Error creating entry:", err);
        }
    };

    const handleEdit = async (row: any) => {
        try {
            const updatedValues = { ...row };
            if (currentPage === "Categories") {
                await updateRow("categories", row.category_id, updatedValues, "category_id");
            } else if (currentPage === "Subcategories") {
                await updateRow("subcategories", row.subcategory_id, updatedValues, "subcategory_id");
            } else if (currentPage === "Products") {
                await updateRow("products", row.product_id, updatedValues, "product_id");
            }
            location.reload();
        } catch (err) {
            console.error("Error updating row:", err);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            if (currentPage === "Categories") {
                await deleteRow("categories", id);
            } else if (currentPage === "Subcategories") {
                await deleteRow("subcategories", id);
            } else if (currentPage === "Products") {
                await deleteRow("products", id);
            }
            location.reload();
        } catch (err) {
            console.error("Error deleting row:", err);
        }
    };

    const columnDefinitions: Record<PageType, { key: string; label: string }[]> = {
        Categories: [
            { key: "category_name", label: "Category Name" },
            { key: "description", label: "Description" },
        ],
        Subcategories: [
            { key: "subcategory_name", label: "Subcategory Name" },
            { key: "category_id", label: "Category ID" },
            { key: "description", label: "Description" },
        ],
        Products: [
            { key: "product_name", label: "Product Name" },
            { key: "category_id", label: "Category ID" },
            { key: "subcategory_id", label: "Subcategory ID" },
            { key: "color", label: "Color" },
            { key: "cost", label: "Cost" },
            { key: "price", label: "Price" },
            { key: "stock_quantity", label: "Stock Quantity" },
        ],
    };

    return (
        <main className="w-full min-h-[100vh] h-full flex flex-row relative bg-black overflow-y-scroll scrollbar-hidden">
            <Navigation
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setCurrentPage={handleSetCurrentPage} // Use the wrapper function here
            />

            <motion.section
                animate={{
                    marginLeft: isSidebarOpen ? "16rem" : "5.5rem",
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                }}
                className="w-full h-full flex flex-col bg-black"
            >
                <HeaderBar />
                <div className="flex flex-col px-10 py-5 gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl text-neutral-200">{currentPage}</h1>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="default">+ Add New</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Add New {currentPage.slice(0, -1)}</DialogTitle>
                                <DialogDescription>Fill out the details to create a new entry.</DialogDescription>
                                <div className="space-y-4">
                                    {columnDefinitions[currentPage].map(({ key, label }) => (
                                        <Input
                                            key={key}
                                            placeholder={`Enter ${label}`}
                                            onChange={(e) =>
                                                setNewEntry({ ...newEntry, [key]: e.target.value })
                                            }
                                        />
                                    ))}
                                </div>
                                <DialogFooter>
                                    <Button onClick={handleCreate}>Create</Button>
                                    <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : currentPage === "Categories" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(categories)}
                            columns={columnDefinitions.Categories}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ) : currentPage === "Subcategories" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(subcategories)}
                            columns={columnDefinitions.Subcategories}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ) : currentPage === "Products" ? (
                        <DataTable
                            fetchData={() => Promise.resolve(products)}
                            columns={columnDefinitions.Products}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ) : null}
                </div>
            </motion.section>
        </main>
    );
};

export default SiteAdminPage;