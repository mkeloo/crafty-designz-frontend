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

// Insert data
export const insertRow = async (table: string, values: any) => {
    const { data, error } = await supabase.from(table).insert(values);
    if (error) {
        console.error(`Error inserting into ${table}:`, error.message);
        throw new Error(error.message);
    }
    return data;
};

// Update data
export const updateRow = async (table: string, id: string, values: any, idColumn = "id") => {
    const { data, error } = await supabase
        .from(table)
        .update(values)
        .eq(idColumn, id); // Dynamically determine the ID column if not "id"
    if (error) {
        console.error(`Error updating ${table}:`, error.message);
        throw new Error(error.message);
    }
    return data;
};
// Delete data
export const deleteRow = async (table: string, id: string) => {
    const { data, error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
        console.error(`Error deleting from ${table}:`, error.message);
        throw new Error(error.message);
    }
    return data;
};