import { useCallback, useMemo, useState } from "react";

import { FilterContext, initialFilters } from "./FilterContext";

export default function FilterProvider({ children }) {
  const [filters, setFilters] = useState(initialFilters);

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
      filters.minRating !== null,
    [filters],
  );

  const value = useMemo(
    () => ({
      filters,
      updateFilters,
      clearFilters,
      hasActiveFilters,
    }),
    [clearFilters, filters, hasActiveFilters, updateFilters],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
