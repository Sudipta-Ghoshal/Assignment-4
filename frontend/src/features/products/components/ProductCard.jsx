import { memo } from "react";
import CreateDate from "./CreateDate";
import Rating from "./Rating";
import getImageUrl from "../../../shared/utils/getImageUrl";

function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image);

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
        <Rating
          ratingRate={product.rating_rate}
          ratingCount={product.rating_count}
        />

        <CreateDate createdAt={product.createdAt} />

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
        <button className="w-full button-primary py-2.5 rounded-lg font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Memoize to prevent re-renders when parent updates but product hasn't changed
export default memo(ProductCard, (prev, next) =>
  prev.product.id === next.product.id
);
