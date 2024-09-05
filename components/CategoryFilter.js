// components/CategoryFilter.js
'use client'; // Only if you need interactivity

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {categories.map(category => (
        <button
          key={category.name}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
