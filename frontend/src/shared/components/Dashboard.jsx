import { useState } from "react";
import Hero from "./Hero";
import FilterSidebar from "../../features/filters/components/SidebarFilter";
import Sorting from "../../features/products/components/Sorting";
import ProductList from "../../features/products/components/ProductList";

export default function Dashboard() {
  const [visibleProductCount, setVisibleProductCount] = useState(0);
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterSidebar />
        <div className="md:col-span-3">
          <Sorting productCount={visibleProductCount} />
          <ProductList onVisibleCountChange={setVisibleProductCount} />
        </div>
      </div>
    </>
  );
}
