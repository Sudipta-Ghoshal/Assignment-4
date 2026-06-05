import getImageUrl from "../utils/getImageUrl";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="soft-card p-4 flex gap-4">
      <img
        src={getImageUrl(item.product.image)}
        alt="Apple Mac Pro"
        className="w-24 h-24 object-cover rounded-lg bg-slate-100"
      />
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg text-slate-900">
              {item.product.title}
            </h3>
            <p className="text-slate-500 text-sm">
              SKU: APP-MP-001 · Apple Mac Pro
            </p>
          </div>
          <button
            className="text-slate-400 hover:text-rose-500"
            aria-label="Remove"
            onClick={() => onRemove(item.id)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
              onClick={() => onUpdateQuantity(item, item.quantity - 1)}
            >
              −
            </button>
            <span className="text-sm font-semibold">{item.quantity}</span>
            <button
              className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
              onClick={() => onUpdateQuantity(item, item.quantity + 1)}
              // disabled={item.quantity >= item.product.stock}
            >
              +
            </button>
          </div>
          <span className="text-2xl font-bold text-slate-900">
            ${item.product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
