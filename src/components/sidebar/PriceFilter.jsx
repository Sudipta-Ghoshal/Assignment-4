export default function PriceFilter() {
  return (
    <div class="mb-6">
      <h4 class="font-medium text-sm mb-3 text-slate-700">Price Range</h4>
      <div class="space-y-2">
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" name="price" class="w-4 h-4 text-rose-500" />
          <span class="ml-3 text-sm text-slate-700">$0 - $2000</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" name="price" class="w-4 h-4 text-rose-500" />
          <span class="ml-3 text-sm text-slate-700">$2000 - $5000</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="price"
            checked
            class="w-4 h-4 text-rose-500"
          />
          <span class="ml-3 text-sm text-slate-700">$5000+</span>
        </label>
      </div>
    </div>
  );
}
