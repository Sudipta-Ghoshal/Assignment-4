const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const categoryApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return await response.json();
    } catch (error) {
      throw new Error("Error fetching categories", { cause: error });
    }
  },
};
