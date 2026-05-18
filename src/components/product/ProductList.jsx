import { useEffect, useMemo } from "react";

import useFilter from "../../context/useFilter";
import { useProduct } from "../../hooks";
import { PRICE_RANGES } from "../sidebar/PriceFilter";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";

export default function ProductList({ onVisibleCountChange }) {
  const { filters } = useFilter();
  const { products, loading, error } = useProduct();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      const matchesPrice =
        filters.priceRanges.length === 0 ||
        filters.priceRanges.some((rangeId) => {
          const range = PRICE_RANGES.find(
            (priceRange) => priceRange.id === rangeId,
          );

          if (!range) {
            return false;
          }

          return product.price >= range.min && product.price <= range.max;
        });

      const matchesRating =
        filters.minRating === null || product.rating_rate >= filters.minRating;

      const matchesSearchTerm =
        filters.searchTerm === "" ||
        product.title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      return (
        matchesCategory && matchesPrice && matchesRating && matchesSearchTerm
      );
    });
  }, [filters, products]);

  console.log("Filtered products:", filteredProducts);

  useEffect(() => {
    if (!loading && !error) {
      onVisibleCountChange(filteredProducts.length);
    }
  }, [error, filteredProducts.length, loading, onVisibleCountChange]);

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

  if (filteredProducts.length === 0) {
    return (
      <div className="soft-card p-6 text-center text-slate-600">
        No products match the selected filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
