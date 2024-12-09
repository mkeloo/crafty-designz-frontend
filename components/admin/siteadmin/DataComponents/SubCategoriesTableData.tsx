"use server";
import { createClient } from "@/supabase/server";
import { cookies } from 'next/headers';

export const fetchSubcategoriesData = async () => {
    // Initialize Supabase client with cookies
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("subcategories").select("*");

    if (error) {
        console.error("Error fetching subcategories:", error.message);
        throw new Error(error.message);
    }

    return data;
};
const CategoriesTableData = async () => {
    try {
        const subcategories = await fetchSubcategoriesData(); // Fetch categories data
        return subcategories;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error in fetchSubcategoriesData:", error.message);
        } else {
            console.error("Error in fetchSubcategoriesData:", error);
        }
        return []; // Return an empty array if there's an error
    }
};

export default CategoriesTableData;