import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default async function AdminTestPage() {
    // Initialize Supabase client with cookies
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    console.log('Fetching categories...');
    const { data: categories, error: categoryError } = await supabase.from('categories').select('*');
    console.log('Categories data:', categories);
    console.log('Categories error:', categoryError);

    console.log('Fetching subcategories...');
    const { data: subcategories, error: subcategoryError } = await supabase.from('subcategories').select('*');
    console.log('Subcategories data:', subcategories);
    console.log('Subcategories error:', subcategoryError);

    console.log('Fetching products...');
    const { data: products, error: productError } = await supabase.from('products').select('*');
    console.log('Products data:', products);
    console.log('Products error:', productError);

    //     INSERT INTO products (
    //     product_slug,
    //     product_name,
    //     category_id,
    //     subcategory_id,
    //     color,
    //     cost,
    //     price,
    //     discount_price,
    //     description,
    //     stock_quantity
    // ) VALUES (
    //     'blankets-babyblankets-heart-shape-blue-shade',
    //     'Baby Chunky Knit Heart Blanket',
    //     1, -- Baby Blanket category_id
    //     1, -- Baby Blanket subcategory_id
    //     'Cornflower Blue & Dark Blue',
    //     10.99, -- Cost
    //     32.99, -- Price
    //     NULL, -- No discount_price provided
    //     'A beautifully handcrafted chunky knit heart-shaped blanket in soft shades of Cornflower Blue and Dark Blue, perfect for babies.',
    //     1 -- Stock Quantity
    // );

    return (
        <div className="w-full py-10 bg-slate-200">

            <div className='max-w-7xl mx-auto'>
                <h1 className="text-3xl font-bold text-center mb-8">Admin Test Page</h1>

                {/* Categories Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories?.map((category) => (
                            <Card key={category.category_id} className="border rounded-lg shadow">
                                <CardHeader>
                                    <CardTitle>{category.category_name}</CardTitle>
                                    <CardDescription>{category.description || 'No description available.'}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Type Count: {category.type_count}</p>
                                    <p>Created At: {new Date(category.created_at).toLocaleDateString()}</p>
                                    {/* JSON Display */}
                                    <div className="mt-4 p-2 bg-blue-950 rounded-md text-xs text-lime-400 font-semibold font-outfit overflow-auto">
                                        <pre>{JSON.stringify(category, null, 2)}</pre>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Subcategories Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Subcategories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subcategories?.map((subcategory) => (
                            <Card key={subcategory.subcategory_id} className="border rounded-lg shadow">
                                <CardHeader>
                                    <CardTitle>{subcategory.subcategory_name}</CardTitle>
                                    <CardDescription>{subcategory.description || 'No description available.'}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Category ID: {subcategory.category_id}</p>
                                    <p>Created At: {new Date(subcategory.created_at).toLocaleDateString()}</p>
                                    {/* JSON Display */}
                                    <div className="mt-4 p-2 bg-blue-950 rounded-md text-xs text-lime-400 font-semibold font-outfit overflow-auto">
                                        <pre>{JSON.stringify(subcategory, null, 2)}</pre>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Products Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products?.map((product) => (
                            <Card key={product.product_id} className="border rounded-lg shadow">
                                <CardHeader>
                                    <CardTitle>{product.product_name}</CardTitle>
                                    <CardDescription>{product.description || 'No description available.'}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Category: {categories?.find((cat) => cat.category_id === product.category_id)?.category_name || 'Unknown Category'}</p>
                                    <p>Subcategory: {subcategories?.find((subcat) => subcat.subcategory_id === product.subcategory_id)?.subcategory_name || 'Unknown Subcategory'}</p>
                                    <p>Color: {product.color}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Cost: ${product.cost}</p>
                                    <p>Stock: {product.stock_quantity}</p>
                                    <p>Created At: {new Date(product.created_at).toLocaleDateString()}</p>
                                    {/* JSON Display */}
                                    <div className="mt-4 p-2 bg-blue-950 rounded-md text-xs text-lime-400 font-semibold font-outfit overflow-auto">
                                        <pre>{JSON.stringify(product, null, 2)}</pre>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
}