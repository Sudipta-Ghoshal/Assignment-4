import { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:9000";

function useProduct() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_BASE_URL}/products`);

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const result = await response.json();
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
        fetchProducts();

    }, []);

    return {
        products,
        count,
        loading,
        error,
    };
}

export default useProduct;
