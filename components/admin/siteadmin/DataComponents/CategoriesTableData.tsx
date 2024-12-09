"use server";
import { createClient } from "@/supabase/server";
import { cookies } from 'next/headers';

export const fetchCategoriesData = async () => {

    // Initialize Supabase client with cookies
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
        console.error("Error fetching categories:", error.message);
        throw new Error(error.message);
    }

    return data;
};

const CategoriesTableData = async () => {
    try {
        const categories = await fetchCategoriesData(); // Fetch categories data
        return categories;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error in CategoriesTableData:", error.message);
        } else {
            console.error("Error in CategoriesTableData:", error);
        }
        return []; // Return an empty array if there's an error
    }
};

export default CategoriesTableData;