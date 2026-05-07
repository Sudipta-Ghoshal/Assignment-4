export default function RattingFilter() {
  return (
    <div>
      <h4 class="font-medium text-sm mb-3 text-slate-700">Rating</h4>
      <div class="space-y-2">
        <label class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked
            class="w-4 h-4 text-rose-500 rounded border-slate-300"
          />
          <span class="ml-3 text-sm text-slate-700">4.5 ⭐ & up</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="w-4 h-4 text-rose-500 rounded border-slate-300"
          />
          <span class="ml-3 text-sm text-slate-700">4.0 ⭐ & up</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="w-4 h-4 text-rose-500 rounded border-slate-300"
          />
          <span class="ml-3 text-sm text-slate-700">3.5 ⭐ & up</span>
        </label>
      </div>
    </div>
  );
}
