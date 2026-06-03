import { useEffect, useState } from "react";
import { productApi } from "../api/products";

export const useProductsData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await productApi.getAll();
        setProducts(result.data ?? []);
        setCount(result.count ?? result.data?.length ?? 0);
      } catch (err) {
        setProducts([]);
        setCount(0);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, count, loading, error };
};
