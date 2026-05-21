import { useEffect, useState } from "react";
import categoryApi from "../../filters/api/categoryApi";

export default function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await categoryApi.getAll();
        setCategories(result.data ?? []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
}
