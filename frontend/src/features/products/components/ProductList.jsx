import { useEffect, useMemo } from "react";
import { useProducts } from "../../../shared/hooks/useProducts";
import { useProductsData } from "../../../shared/hooks/useProductsData";
import PRICE_RANGES from "../../filters/config/priceRanges";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";

export default function ProductList({ onVisibleCountChange }) {
  const { filters, sort } = useProducts();
  const { products, loading, error } = useProductsData();

  // Filter products based on selected filters
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

  // Sort filtered products based on selected sort option
  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];

    switch (sort) {
      case "newest":
        return productsToSort.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      case "oldest":
        return productsToSort.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
      case "price-low-high":
        return productsToSort.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return productsToSort.sort((a, b) => b.price - a.price);
      case "rating-high":
        return productsToSort.sort((a, b) => b.rating_rate - a.rating_rate);
      case "rating-low":
        return productsToSort.sort((a, b) => a.rating_rate - b.rating_rate);
      default:
        return productsToSort;
    }
  }, [filteredProducts, sort]);

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
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
