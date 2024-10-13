// CategoryAdmin.tsx

'use client';
import GetCategories from './GetCategories';
import PostCategory from './PostCategory';
import DeleteCategory from './DeleteCategory';
import { useState } from 'react';
import { Category, NewCategory } from '@/lib/types';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Adjusting handleNewCategory function to accept NewCategory type
  const handleNewCategory = (newCategory: NewCategory) => {
    // Create a new Category object by adding missing fields like id and timestamps
    const createdCategory: Category = {
      ...newCategory,
      category_id: categories.length + 1, // Assuming a new ID, can be replaced with actual value
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setCategories((prevCategories) => [...prevCategories, createdCategory]);
  };

  return (
    <div className="p-4 rounded-md shadow-md bg-slate-300 mb-8">
      <h1 className="text-3xl font-bold mb-6">Category API Requests</h1>

      {/* Get Categories */}
      <GetCategories />

      {/* Post Category */}
      <PostCategory onCreate={handleNewCategory} />

      {/* Delete Category */}
      <DeleteCategory />
    </div>
  );
};

export default CategoryAdmin;
