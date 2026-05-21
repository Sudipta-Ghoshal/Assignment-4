export default function Rating({ ratingRate = 0, ratingCount = 0 }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-amber-500">Rating {ratingRate}</span>
      <span className="text-slate-500">({ratingCount} reviews)</span>
    </div>
  );
}
