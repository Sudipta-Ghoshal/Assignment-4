import { useState } from "react";

import Header from "./shared/components/Header";
import Hero from "./shared/components/Hero";
import ProductList from "./features/products/components/ProductList";
import SidebarFilter from "./features/filters/components/SidebarFilter";
import Sorting from "./features/products/components/Sorting";
import ProductsProvider from "./features/products/context/ProductsProvider";

function App() {
  const [visibleProductCount, setVisibleProductCount] = useState(0);

  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
}

export default App;
