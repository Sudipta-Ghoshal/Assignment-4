import { useEffect, useState } from "react";

function useCatagory() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [catagory, setCatagory] = useState([]);




    useEffect(() => {
        const fetchCatagory = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories`);

                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const result = await response.json();
                setCatagory(result.data ?? []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCatagory();
    }, [])

    return {
        catagory,
        loading,
        error
    };
}

export default useCatagory;