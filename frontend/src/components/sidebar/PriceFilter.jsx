import useFilter from "../../context/useFilter";

const PRICE_RANGES = [
  { id: "0-2000", label: "$0 - $2000", min: 0, max: 2000 },
  { id: "2000-5000", label: "$2000 - $5000", min: 2000, max: 5000 },
  { id: "5000-plus", label: "$5000+", min: 5000, max: Infinity },
];

export { PRICE_RANGES };

export default function PriceFilter() {
  const { filters, updateFilters } = useFilter();
  const selectedPriceRanges = filters.priceRanges;

  const handlePriceRangeToggle = (rangeId) => {
    if (selectedPriceRanges.includes(rangeId)) {
      updateFilters(
        "priceRanges",
        selectedPriceRanges.filter(
          (selectedRange) => selectedRange !== rangeId,
        ),
      );
      return;
    }

    updateFilters("priceRanges", [...selectedPriceRanges, rangeId]);
  };

  return (
    <div className="mb-6">
      <h4 className="font-medium text-sm mb-3 text-slate-700">Price Range</h4>
      <div className="space-y-2">
        {PRICE_RANGES.map((range) => (
          <label className="flex items-center cursor-pointer" key={range.id}>
            <input
              type="checkbox"
              name="price"
              checked={selectedPriceRanges.includes(range.id)}
              onChange={() => handlePriceRangeToggle(range.id)}
              className="w-4 h-4 text-rose-500"
            />
            <span className="ml-3 text-sm text-slate-700">{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
