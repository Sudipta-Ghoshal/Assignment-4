import { createContext } from "react";

const initialFilters = {
  categories: [],
  priceRanges: [],
  minRating: null,
  searchTerm: '',
};

const FilterContext = createContext(null);

export { FilterContext, initialFilters };
