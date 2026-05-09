import { useProduct } from "../../hooks";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products, loading, error } = useProduct();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="soft-card p-6 text-center text-rose-600 font-semibold">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="soft-card p-6 text-center text-slate-600">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
