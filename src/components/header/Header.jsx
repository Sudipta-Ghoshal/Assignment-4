import Cart from "./Cart";
import Logo from "./Logo";
import Search from "./Search";
export default function Header() {
  return (
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <div class="hidden md:flex items-center gap-6 text-sm">
          <a href="#" class="text-slate-700 hover:text-slate-900">
            Products
          </a>
          <a href="#" class="text-slate-700 hover:text-slate-900">
            About
          </a>
          <a href="#" class="text-slate-700 hover:text-slate-900">
            Support
          </a>
        </div>

        <div class="flex items-center gap-3">
          <Search />

          <Cart />
        </div>
      </div>
    </nav>
  );
}
