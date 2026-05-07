import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard />
      <LoadingSkeleton />
    </div>
  );
}
