import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

export const fetchCategoriesData = async () => {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
        console.error("Error fetching categories:", error.message);
        throw new Error(error.message);
    }

    return data;
};

export const fetchSubcategoriesData = async () => {
    const { data, error } = await supabase.from("subcategories").select("*");

    if (error) {
        console.error("Error fetching subcategories:", error.message);
        throw new Error(error.message);
    }

    return data;
};

export const fetchProductsData = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        console.error("Error fetching products:", error.message);
        throw new Error(error.message);
    }

    return data;
};