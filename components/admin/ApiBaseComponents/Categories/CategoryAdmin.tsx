'use client';
import GetCategories from './GetCategories';
import PostCategory from './PostCategory';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';
import { useState } from 'react';
import { Category, NewCategory } from '@/lib/types';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Function to handle adding a new category
  const handleNewCategory = (newCategory: NewCategory) => {
    const createdCategory: Category = {
      ...newCategory,
      category_id: categories.length + 1, // Replace with actual value when integrated with API
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setCategories((prevCategories) => [...prevCategories, createdCategory]);
  };

  // Function to handle updating an existing category
  const handleUpdatedCategory = (updatedCategory: Category) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.category_id === updatedCategory.category_id
          ? updatedCategory
          : category
      )
    );
    setSelectedCategory(null); // Deselect category after updating
  };

  return (
    <div className="p-4 rounded-md shadow-md bg-slate-300 mb-8">
      <h1 className="text-3xl font-bold mb-6">Category API Requests</h1>

      {/* Get Categories */}
      <GetCategories />

      {/* Post Category */}
      <PostCategory onCreate={handleNewCategory} />

      {/* Update Category */}
      <UpdateCategory onUpdate={handleUpdatedCategory} />

      {/* Delete Category */}
      <DeleteCategory />
    </div>
  );
};

export default CategoryAdmin;
