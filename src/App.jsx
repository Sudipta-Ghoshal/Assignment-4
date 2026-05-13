import { useState } from "react";

import Header from "./components/header/Header";
import Hero from "./components/Hero";
import ProductList from "./components/product/ProductList";
import SidebarFilter from "./components/sidebar/SidebarFilter";
import Sorting from "./components/Sorting";

function App() {
  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
    minRating: null,
  });
  const [visibleProductCount, setVisibleProductCount] = useState(0);

  const updateFilters = (filterName, value) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      minRating: null,
    });
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <SidebarFilter
            filters={filters}
            onFilterChange={updateFilters}
            onClearFilters={clearFilters}
          />
          <div className="md:col-span-3">
            <Sorting productCount={visibleProductCount} />
            <ProductList
              filters={filters}
              onVisibleCountChange={setVisibleProductCount}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
