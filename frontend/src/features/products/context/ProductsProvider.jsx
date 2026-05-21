import { useCallback, useMemo, useState } from "react";
import { ProductsContext } from "./ProductsContext";

const initialFilters = {
  categories: [],
  priceRanges: [],
  minRating: null,
  searchTerm: "",
};

export default function ProductsProvider({ children }) {
  // Filter state
  const [filters, setFilters] = useState(initialFilters);

  // Sort state
  const [sort, setSort] = useState("newest");

  // Filter operations
  const updateFilters = useCallback((filterName, value) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [filterName]: value,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const hasActiveFilters = useMemo(
    () =>
      filters.categories.length > 0 ||
      filters.priceRanges.length > 0 ||
      filters.minRating !== null ||
      filters.searchTerm !== "",
    [filters],
  );

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      // Filter-related
      filters,
      updateFilters,
      clearFilters,
      hasActiveFilters,
      // Sort-related
      sort,
      setSort,
    }),
    [clearFilters, filters, hasActiveFilters, updateFilters, sort],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
