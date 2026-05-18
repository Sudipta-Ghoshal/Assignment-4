import useFilter from "../../context/useFilter";
import CatagoryFilter from "./CatagoryFilter";
import PriceFilter from "./PriceFilter";
import RattingFilter from "./RattingFilter";

export default function SidebarFilter() {
  const { clearFilters, hasActiveFilters } = useFilter();

  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className="text-xs text-rose-500 font-semibold disabled:text-slate-300 disabled:cursor-not-allowed"
          >
            Clear
          </button>
        </div>

        <CatagoryFilter />

        <PriceFilter />

        <RattingFilter />
      </div>
    </div>
  );
}
