import Header from "../shared/components/Header";

import { ProductsProvider } from "../shared/context/ProductsProvider";
import Footer from "../shared/components/Footer";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <ProductsProvider>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Outlet />
      </main>

      <Footer />
    </ProductsProvider>
  );
}
