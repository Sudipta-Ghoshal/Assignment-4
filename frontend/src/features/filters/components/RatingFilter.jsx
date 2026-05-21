import useProducts from "../../products/context/useProducts";

const RATING_OPTIONS = [4.5, 4.0, 3.5];

export default function RatingFilter() {
  const { filters, updateFilters } = useProducts();
  const selectedRating = filters.minRating;

  const handleRatingToggle = (rating) => {
    updateFilters("minRating", selectedRating === rating ? null : rating);
  };

  return (
    <div>
      <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
      <div className="space-y-2">
        {RATING_OPTIONS.map((rating) => (
          <label className="flex items-center cursor-pointer" key={rating}>
            <input
              type="checkbox"
              checked={selectedRating === rating}
              onChange={() => handleRatingToggle(rating)}
              className="w-4 h-4 text-rose-500 rounded border-slate-300"
            />
            <span className="ml-3 text-sm text-slate-700">
              {rating.toFixed(1)} ⭐ & up
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
