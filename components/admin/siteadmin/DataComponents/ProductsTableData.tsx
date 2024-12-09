"use server";
import { createClient } from "@/supabase/server";
import { cookies } from 'next/headers';

export const fetchProductsData = async () => {

    // Initialize Supabase client with cookies
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        console.error("Error fetching products:", error.message);
        throw new Error(error.message);
    }

    return data;
};


const ProductsTableData = async () => {
    try {
        const products = await fetchProductsData(); // Fetch products data
        return products;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error in ProductTableData:", error.message);
        } else {
            console.error("Error in ProductTableData:", error);
        }
        return []; // Return an empty array if there's an error
    }
};

export default ProductsTableData