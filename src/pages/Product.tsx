import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { Star, ChevronDown, ChevronUp, Droplets, Clock, ShieldCheck } from "lucide-react";

export function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>("notes");

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl text-white mb-6">Scent Not Found</h1>
        <Link to="/shop" className="border-b border-white pb-1 uppercase tracking-widest text-sm hover:text-mg-nude hover:border-mg-nude transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left: Images */}
        <div className="w-full lg:w-1/2">
          <div className="sticky top-24">
            <div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a] mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#0a0a0a] overflow-hidden">
                <img src={product.imageUrl} alt={`${product.name} detail`} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="aspect-square bg-[#0a0a0a] overflow-hidden">
                <img src={product.imageUrl} alt={`${product.name} lifestyle`} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-mg-nude">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs text-mg-lightgray/60 uppercase tracking-widest">128 Reviews</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-2">{product.name}</h1>
            <p className="text-xl text-mg-lightgray/80 italic mb-6">"{product.tagline}"</p>
            <p className="text-2xl text-white">${product.price} <span className="text-sm text-mg-lightgray/50 ml-2">50ml / 1.7 fl oz</span></p>
          </div>

          <p className="text-mg-lightgray/90 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {product.moodTags.map(tag => (
              <span key={tag} className="border border-white/20 text-mg-lightgray text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Add to Cart Actions */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-white/20 px-4 py-3 w-32 justify-between">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-mg-lightgray hover:text-white">-</button>
              <span className="text-white">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-mg-lightgray hover:text-white">+</button>
            </div>
            <button className="flex-1 bg-white text-mg-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors">
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 mb-12 py-6 border-y border-white/10">
            <div className="flex flex-col items-center text-center gap-2">
              <Droplets size={20} className="text-mg-nude" />
              <span className="text-xs uppercase tracking-widest text-mg-lightgray/70">Extrait de Parfum</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Clock size={20} className="text-mg-nude" />
              <span className="text-xs uppercase tracking-widest text-mg-lightgray/70">12+ Hour Wear</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck size={20} className="text-mg-nude" />
              <span className="text-xs uppercase tracking-widest text-mg-lightgray/70">Cruelty Free</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {/* Scent Notes */}
            <div className="border border-white/10 bg-[#0a0a0a]">
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleSection("notes")}
              >
                <span className="uppercase tracking-widest text-sm font-medium text-white">Scent Notes</span>
                {openSection === "notes" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === "notes" && (
                <div className="px-6 pb-6 pt-0 text-sm text-mg-lightgray/80 space-y-4">
                  <div>
                    <span className="uppercase tracking-widest text-xs text-mg-nude block mb-1">Top</span>
                    <p>{product.notes.top}</p>
                  </div>
                  <div>
                    <span className="uppercase tracking-widest text-xs text-mg-nude block mb-1">Heart</span>
                    <p>{product.notes.heart}</p>
                  </div>
                  <div>
                    <span className="uppercase tracking-widest text-xs text-mg-nude block mb-1">Base</span>
                    <p>{product.notes.base}</p>
                  </div>
                </div>
              )}
            </div>

            {/* When to Wear */}
            <div className="border border-white/10 bg-[#0a0a0a]">
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleSection("wear")}
              >
                <span className="uppercase tracking-widest text-sm font-medium text-white">When to Wear It</span>
                {openSection === "wear" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === "wear" && (
                <div className="px-6 pb-6 pt-0 text-sm text-mg-lightgray/80 leading-relaxed">
                  <p>{product.whenToWear}</p>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="border border-white/10 bg-[#0a0a0a]">
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleSection("shipping")}
              >
                <span className="uppercase tracking-widest text-sm font-medium text-white">Shipping & Returns</span>
                {openSection === "shipping" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === "shipping" && (
                <div className="px-6 pb-6 pt-0 text-sm text-mg-lightgray/80 space-y-4">
                  <p>Free standard shipping on all orders over $75.</p>
                  <p>We accept returns within 14 days of delivery. The bottle must be unused and in its original packaging. We include a 2ml sample of your purchased scent with every order so you can test it before opening the full bottle.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
