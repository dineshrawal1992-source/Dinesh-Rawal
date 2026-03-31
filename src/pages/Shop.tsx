import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const moodFilter = searchParams.get("mood");

  const moods = ["All", "Soft & Dangerous", "Cold & Untouchable", "Sweet but Toxic", "Late Night Energy"];

  const filteredProducts = useMemo(() => {
    if (!moodFilter || moodFilter === "all") return products;
    const formattedFilter = moodFilter.replace(/-/g, " ").replace(/ and /g, " & ");
    return products.filter(p => p.mood.toLowerCase() === formattedFilter.toLowerCase());
  }, [moodFilter]);

  const handleFilter = (mood: string) => {
    if (mood === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ mood: mood.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") });
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">All Scents</h1>
        <p className="text-mg-lightgray/80 max-w-2xl mx-auto">
          Find the fragrance that matches your exact energy. Filter by mood below.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {moods.map((mood) => {
          const isActive = 
            (mood === "All" && !moodFilter) || 
            (moodFilter && mood.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === moodFilter);
            
          return (
            <button
              key={mood}
              onClick={() => handleFilter(mood)}
              className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-colors border ${
                isActive 
                  ? "bg-white text-mg-black border-white" 
                  : "bg-transparent text-mg-lightgray border-white/20 hover:border-white/60"
              }`}
            >
              {mood}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden mb-6 block">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                {product.moodTags.slice(0, 2).map(tag => (
                  <span key={tag} className="bg-mg-black/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
            <div className="flex justify-between items-start mb-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-2xl text-white group-hover:text-mg-nude transition-colors">{product.name}</h3>
              </Link>
              <span className="text-lg">${product.price}</span>
            </div>
            <p className="text-sm text-mg-lightgray/60 italic mb-4">{product.tagline}</p>
            <button className="w-full border border-white/20 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-mg-black transition-colors mt-auto">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-mg-lightgray/60">No scents found for this mood.</p>
          <button 
            onClick={() => handleFilter("All")}
            className="mt-6 border-b border-white pb-1 uppercase tracking-widest text-sm hover:text-mg-nude hover:border-mg-nude transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
