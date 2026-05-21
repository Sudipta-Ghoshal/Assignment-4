import { useState } from "react";

import Header from "./components/header/Header";
import Hero from "./components/Hero";
import ProductList from "./components/product/ProductList";
import SidebarFilter from "./components/sidebar/SidebarFilter";
import Sorting from "./components/Sorting";
import FilterProvider from "./context/FilterProvider";
import SortProvider from "./context/SortProvider";

function App() {
  const [visibleProductCount, setVisibleProductCount] = useState(0);

  return (
    <SortProvider>
      <FilterProvider>
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          <Hero />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SidebarFilter />
            <div className="md:col-span-3">
              <Sorting productCount={visibleProductCount} />
              <ProductList onVisibleCountChange={setVisibleProductCount} />
            </div>
          </div>
        </main>
      </FilterProvider>
    </SortProvider>
  );
}

export default App;
