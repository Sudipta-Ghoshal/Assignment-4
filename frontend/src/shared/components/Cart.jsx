import { Link } from "react-router";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  return (
    <>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-slate-500 font-semibold uppercase tracking-wide">
            Your bag
          </p>
          <h1 class="text-3xl font-semibold text-slate-900">Shopping Cart</h1>
        </div>
        <Link
          to="/"
          class="text-sm font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          <span>Continue shopping</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </Link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="space-y-4">
            <div class="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Apple Mac Pro"
                class="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div class="flex-1 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h3 class="font-semibold text-lg text-slate-900">
                      Apple Mac Pro Tower
                    </h3>
                    <p class="text-slate-500 text-sm">
                      SKU: APP-MP-001 · Apple Mac Pro
                    </p>
                  </div>
                  <button
                    class="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span class="text-sm font-semibold">1</span>
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span class="text-2xl font-bold text-slate-900">$6,999</span>
                </div>
              </div>
            </div>

            <div class="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Gaming Laptop"
                class="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div class="flex-1 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h3 class="font-semibold text-lg text-slate-900">
                      High-Performance Gaming Laptop
                    </h3>
                    <p class="text-slate-500 text-sm">
                      SKU: GAM-LAP-042 · Gaming Laptop
                    </p>
                  </div>
                  <button
                    class="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span class="text-sm font-semibold">2</span>
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span class="text-2xl font-bold text-slate-900">$6,598</span>
                </div>
              </div>
            </div>

            <div class="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Ultrabook"
                class="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div class="flex-1 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h3 class="font-semibold text-lg text-slate-900">
                      Ultra-thin Ultrabook
                    </h3>
                    <p class="text-slate-500 text-sm">
                      SKU: ULT-BK-089 · Ultrabook
                    </p>
                  </div>
                  <button
                    class="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span class="text-sm font-semibold">1</span>
                    <button class="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span class="text-2xl font-bold text-slate-900">$1,799</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
