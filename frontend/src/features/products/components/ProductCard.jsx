import { memo } from "react";
import getImageUrl from "../../../shared/utils/getImageUrl";

function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image);

  const formattedDate = product.createdAt
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(product.createdAt))
    : "Unknown";

  return (
    <div className="soft-card overflow-hidden hover:-translate-y-1 transition-all">
      <div className="aspect-square bg-linear-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-500">Rating {product.rating_rate}</span>
          <span className="text-slate-500">
            ({product.rating_count} reviews)
          </span>
        </div>

        <p className="text-slate-500 text-sm">
          Upload on: <span className="font-semibold">{formattedDate}</span>
        </p>

        <p className="text-slate-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price}
          </span>
          <span className="text-sm text-emerald-600 font-medium">
            In Stock ({product.stock})
          </span>
        </div>

        <button className="w-full button-primary py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default memo(
  ProductCard,
  (prev, next) => prev.product.id === next.product.id,
);
