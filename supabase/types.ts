export interface Category {
    category_id: number; // Primary key
    category_name: string; // Unique category name
    description: string | null; // Optional description
    type_count: number; // Tracks the number of subcategories
    created_at: string; // Timestamp when the category was created
    updated_at: string; // Timestamp when the category was last updated
}


export interface Subcategory {
    subcategory_id: number; // Primary key
    subcategory_name: string; // Unique subcategory name
    category_id: number; // Foreign key to Categories table
    description: string | null; // Optional description
    created_at: string; // Timestamp when the subcategory was created
}


export interface Product {
    product_id: number; // Primary key
    product_slug: string; // Unique identifier for the product
    product_name: string; // Name of the product
    category_id: number; // Foreign key to Categories table
    subcategory_id: number; // Foreign key to Subcategories table
    color: string; // Unique color variant of the product
    cost: number; // Cost of the product
    price: number; // Selling price of the product
    discount_price: number | null; // Optional discounted price
    description: string | null; // Optional product description
    stock_quantity: number; // Number of items in stock
    product_uuid: string; // Unique UUID for the product
    created_at: string; // Timestamp when the product was created
    updated_at: string; // Timestamp when the product was last updated
}


export interface Media {
    media_id: number; // Primary key
    product_id: number; // Foreign key to Products table
    category_id: number; // Foreign key to Categories table
    media_type: string; // Type of media (e.g., image, video)
    media_url: string; // URL of the media
    created_at: string; // Timestamp when the media entry was created
    updated_at: string; // Timestamp when the media entry was last updated
}