import CatagoryFilter from "./CatagoryFilter";
import PriceFilter from "./PriceFilter";
import RattingFilter from "./RattingFilter";

export default function SidebarFilter() {
  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button className="text-xs text-rose-500 font-semibold">Clear</button>
        </div>

        <CatagoryFilter />

        <PriceFilter />

        <RattingFilter />
      </div>
    </div>
  );
}
