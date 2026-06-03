import {
  useCallback,
  useMemo,
  useState,
} from "react";
import { ProductsContext } from "./ProductsContext";

const initialFilters = {
  categories: [],
  priceRanges: [],
  minRating: null,
  searchTerm: "",
};

export function ProductsProvider({ children }) {
  const [filters, setFilters] = useState(initialFilters);
  const [sort, setSort] = useState("newest");

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

  const value = useMemo(
    () => ({
      filters,
      updateFilters,
      clearFilters,
      hasActiveFilters,
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
