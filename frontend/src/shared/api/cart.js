const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const cartApi = {
    addToCart: async (productId, quantity) => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId, quantity }),
            });
            if (!response.ok) {
                throw new Error("Failed to add item to cart");
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message || "Error adding item to cart", { cause: error });
        }
    },
    getCartItems: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart`,);
            if (!response.ok) {
                throw new Error("Failed to fetch cart items");
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message || "Error fetching cart items", { cause: error });
        }
    },
    removeFromCart: async (itemId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to remove item from cart");
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message || "Error removing item from cart", { cause: error });
        }
    },
    updateCartItem: async (itemId, quantity) => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity }),
            });
            if (!response.ok) {
                throw new Error("Failed to update cart item");
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message || "Error updating cart item", { cause: error });
        }
    }
};

export default cartApi;