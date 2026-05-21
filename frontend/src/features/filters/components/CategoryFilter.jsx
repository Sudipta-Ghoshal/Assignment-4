import useProducts from "../../products/context/useProducts";
import useCategoriesData from "../hooks/useCategoriesData";

export default function CategoryFilter() {
  const { filters, updateFilters } = useProducts();
  const { categories, loading, error } = useCategoriesData();
  const selectedCategories = filters.categories;

  const handleCategoryToggle = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      updateFilters(
        "categories",
        selectedCategories.filter((category) => category !== categoryName),
      );
      return;
    }

    updateFilters("categories", [...selectedCategories, categoryName]);
  };

  if (loading) {
    return <p className="text-accent">Loading categories...</p>;
  } else if (error) {
    return <p className="text-rose-500">Error loading categories: {error}</p>;
  } else if (categories.length === 0) {
    return <p className="text-slate-500">No categories found.</p>;
  } else {
    return (
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
        <div className="space-y-2">
          {categories.map((item) => (
            <label className="flex items-center cursor-pointer" key={item.id}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(item.name)}
                onChange={() => handleCategoryToggle(item.name)}
                className="w-4 h-4 text-rose-500 rounded border-slate-300"
              />
              <span className="ml-3 text-sm text-slate-700">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
}
