const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const productApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Error fetching products", { cause: error });
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error("Product not found");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Error fetching product", { cause: error });
    }
  },
};
