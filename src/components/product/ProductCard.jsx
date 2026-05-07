import CreateDate from "./CreateDate";
import Ratting from "./Ratting";

export default function ProductCard() {
  return (
    <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
      <div class="aspect-square bg-linear-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
        <img
          src="./assets/mac-pro-tower.webp"
          alt="Apple Mac Pro Tower"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-5 space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
            Apple Mac Pro Tower
          </h3>
        </div>
        <Ratting />

        <CreateDate />

        <p class="text-slate-600 text-sm line-clamp-2">
          The ultimate workstation with M2 Ultra chip, designed for heavy video
          editing and 3D rendering.
        </p>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-slate-900">$6,999</span>
          <span class="text-sm text-emerald-600 font-medium">In Stock (5)</span>
        </div>
        <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
