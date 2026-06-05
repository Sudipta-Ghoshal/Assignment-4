import { Link } from "react-router";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cartItems, loading, error, removeFromCart, updateCartQuantity } = useCart();

  const handleRemoveItem = async (itemId) => {
    await removeFromCart(itemId);
  };

  const handleUpdateQuantity = async (item, nextQuantity) => {
    await updateCartQuantity(item, nextQuantity);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
            Your bag
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Shopping Cart
          </h1>
        </div>
        <Link
          to="/"
          className="text-sm font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          <span>Continue shopping</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {loading ? (
              <p className="text-accent">Loading cart items...</p>
            ) : error ? (
              <p className="text-red-500">Error fetching cart items</p>
            ) : cartItems?.length === 0 ? (
              <p>YOUR Cart is empty</p>
            ) : (
              cartItems?.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="soft-card p-6 sticky top-24 space-y-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}
