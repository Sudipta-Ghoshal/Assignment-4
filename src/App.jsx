import Header from "./components/header/Header";
import Hero from "./components/Hero";
import ProductList from "./components/product/ProductList";
import SidebarFilter from "./components/sidebar/SidebarFilter";
import Sorting from "./components/Sorting";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <SidebarFilter />
          <div className="md:col-span-3">
            <Sorting />
            <ProductList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
