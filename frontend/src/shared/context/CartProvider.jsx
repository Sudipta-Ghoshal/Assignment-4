import cartApi from "../api/cart";
import CartContext from "./CartContext";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshCart = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await cartApi.getCartItems();
      setCartItems(result.data ?? []);
    } catch (err) {
      setError(err.message || "Error fetching cart items");
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    const result = await cartApi.addToCart(productId, quantity);
    const addedItem = result.data;

    setCartItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === addedItem.id);
      if (exists) {
        return currentItems.map((item) =>
          item.id === addedItem.id ? addedItem : item,
        );
      }
      return [addedItem, ...currentItems];
    });
  };

  const removeFromCart = async (itemId) => {
    await cartApi.removeFromCart(itemId);
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    );
  };

  const updateCartQuantity = async (item, nextQuantity) => {
    if (nextQuantity < 1) {
      return removeFromCart(item.id);
    }
    if (nextQuantity > item.product.stock) {
      console.log(
        `Cannot set quantity to ${nextQuantity}. Only ${item.product.stock} items in stock.`,
      );
      return;
    }
    setError(null);
    const result = await cartApi.updateCartItem(item.id, nextQuantity);
    const updatedItem = result.data;
    setCartItems((currentItems) =>
      currentItems.map((cartItem) =>
        cartItem.id === updatedItem.id ? updatedItem : cartItem,
      ),
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(refreshCart, 0);
    return () => clearTimeout(timeoutId);
  }, [refreshCart]);

  const shippingCost = 0;
  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }, [cartItems]);

  const total = subTotal + shippingCost;

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    cartCount,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    refreshCart,
    total,
    subTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
