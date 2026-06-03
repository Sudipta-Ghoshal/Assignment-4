export default function OrderSummary() {
  return (
    <div class="soft-card p-6 sticky top-24 space-y-6">
      <h2 class="text-xl font-semibold mb-6">Order Summary</h2>

      <div class="space-y-3 border-slate-200">
        <div class="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>$15,396</span>
        </div>
        <div class="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span class="text-emerald-600 font-semibold">Free</span>
        </div>
        <div class="flex justify-between text-slate-600">
          <span>Tax</span>
          <span>$0</span>
        </div>
        <div class="flex justify-between text-xl font-bold pt-3 text-slate-900">
          <span>Total</span>
          <span>$15,396</span>
        </div>
      </div>
    </div>
  );
}
