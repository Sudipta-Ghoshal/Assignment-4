import { useCart } from "../hooks/useCart";
import Logo from "./Logo";
import Search from "./Search";
import { Link } from "react-router";

export default function Header() {
  const { cartCount } = useCart();
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/products" className="text-slate-700 hover:text-slate-900">
            Products
          </Link>
          <Link to="/about" className="text-slate-700 hover:text-slate-900">
            About
          </Link>
          <Link to="/support" className="text-slate-700 hover:text-slate-900">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Search />

          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm hover:border-rose-300"
          >
            <svg
              className="w-5 h-5 text-rose-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="text-sm font-semibold text-slate-900">Cart</span>
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center shadow">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
