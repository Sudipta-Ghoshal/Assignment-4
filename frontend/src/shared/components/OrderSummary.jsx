import { useCart } from "../hooks/useCart";

export default function OrderSummary() {
  const { total, subTotal } = useCart();

  return (
    <div className="space-y-3 border-slate-200">
      <div className="flex justify-between text-slate-600">
        <span>Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Shipping</span>
        <span className="text-emerald-600 font-semibold">Free</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Tax</span>
        <span>$0</span>
      </div>
      <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
