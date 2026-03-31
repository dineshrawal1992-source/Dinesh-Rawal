import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

interface NavbarProps {
  onOpenCart?: () => void;
}

export function Navbar({ onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-mg-black/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mg-lightgray hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          <Link to="/shop" className="text-mg-lightgray hover:text-white transition-colors">
            Shop
          </Link>
          <Link to="/quiz" className="text-mg-lightgray hover:text-white transition-colors">
            Find Your Mood
          </Link>
        </div>

        {/* Logo (Center) */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-tight text-white absolute left-1/2 -translate-x-1/2"
        >
          Moody Girl
        </Link>

        {/* Desktop Links (Right) */}
        <div className="flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          <Link to="/about" className="hidden md:block text-mg-lightgray hover:text-white transition-colors">
            About
          </Link>
          <button 
            onClick={onOpenCart}
            className="text-mg-lightgray hover:text-white transition-colors relative group"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-mg-plum text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-mg-black border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden">
          <Link
            to="/shop"
            className="text-lg font-serif text-white hover:text-mg-plum transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop All
          </Link>
          <Link
            to="/quiz"
            className="text-lg font-serif text-white hover:text-mg-plum transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Find Your Mood
          </Link>
          <Link
            to="/about"
            className="text-lg font-serif text-white hover:text-mg-plum transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

