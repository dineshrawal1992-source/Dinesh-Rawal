import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowRight, Star } from "lucide-react";

export function Home() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop"
            alt="Dark cinematic perfume"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mg-black/40 via-transparent to-mg-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 tracking-tight">
            You don't wear this.<br />
            <span className="italic text-mg-nude">You become it.</span>
          </h1>
          <p className="text-lg md:text-xl text-mg-lightgray/80 mb-10 max-w-2xl font-light">
            Bold, sensual, emotionally expressive fragrances for the modern aesthetic. Soft doesn't mean safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              to="/shop"
              className="bg-white text-mg-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors text-center"
            >
              Shop the Mood
            </Link>
            <Link
              to="/quiz"
              className="border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:border-white hover:bg-white/5 transition-all text-center"
            >
              Find Your Scent
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Mood-Based Navigation */}
      <section className="py-24 px-6 bg-mg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-white mb-16">Choose Your Energy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Soft & Dangerous", img: "https://images.unsplash.com/photo-1616604847477-a503e461e12a?q=80&w=800&auto=format&fit=crop" },
              { name: "Cold & Untouchable", img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop" },
              { name: "Sweet but Toxic", img: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop" },
              { name: "Late Night Energy", img: "https://images.unsplash.com/photo-1615397323758-2e212552a923?q=80&w=800&auto=format&fit=crop" }
            ].map((mood, i) => (
              <Link
                key={i}
                to={`/shop?mood=${mood.name.toLowerCase().replace(/ & | /g, '-')}`}
                className="group relative h-[400px] overflow-hidden block"
              >
                <img
                  src={mood.img}
                  alt={mood.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mg-black via-mg-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <h3 className="font-serif text-2xl text-white">{mood.name}</h3>
                  <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Best Sellers */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-white">The Obsessions</h2>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-white transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bestSellers.map((product) => (
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
          <Link to="/shop" className="md:hidden flex items-center justify-center mt-12 text-sm uppercase tracking-widest border border-white/20 py-4 hover:bg-white hover:text-mg-black transition-colors">
            View All Scents
          </Link>
        </div>
      </section>

      {/* 4. Quiz Teaser */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop"
            alt="Sensual texture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-mg-plum/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">What's your mood tonight?</h2>
          <p className="text-lg text-mg-lightgray/80 mb-10 max-w-xl mx-auto">
            Take the 60-second scent profiling quiz to find the fragrance that matches your exact energy.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-white text-mg-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors"
          >
            Take the Quiz
          </Link>
        </div>
      </section>

      {/* 5. Social Proof */}
      <section className="py-24 px-6 bg-mg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-white mb-16">The Group Chat Approves</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I wore Midnight Ruin to a party and three different people stopped me to ask what I was wearing. It's literally intoxicating.", author: "@sarah.aesthetics", product: "Midnight Ruin" },
              { quote: "Cold Shoulder makes me feel like I own 51% of the company and don't have time for anyone's nonsense. Obsessed.", author: "@chloe_vibes", product: "Cold Shoulder" },
              { quote: "Toxic Trait is the only perfume I've ever bought a backup bottle of before finishing the first. It's that good.", author: "@mia.night", product: "Toxic Trait" }
            ].map((review, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 border border-white/5">
                <div className="flex text-mg-nude mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed">"{review.quote}"</p>
                <div className="flex justify-between items-center text-sm text-mg-lightgray/60">
                  <span>{review.author}</span>
                  <span className="uppercase tracking-widest text-[10px] border border-white/10 px-2 py-1">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story & Email Capture */}
      <section className="py-0 flex flex-col md:flex-row border-y border-white/10">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#050505]">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">We don't make pretty perfumes.</h2>
          <p className="text-mg-lightgray/80 mb-6 leading-relaxed">
            Moody Girl was born from the idea that women are complex, chaotic, and beautiful all at once. We don't want to smell like a generic bouquet of flowers.
          </p>
          <p className="text-mg-lightgray/80 mb-12 leading-relaxed">
            We want to smell like a late night text, a cold stare, a dangerous secret. We create scent profiles for your every mood.
          </p>
          <Link to="/about" className="uppercase tracking-widest text-sm text-white border-b border-white pb-1 self-start hover:text-mg-nude hover:border-mg-nude transition-colors">
            Read Our Story
          </Link>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/10">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Join the Mood</h2>
          <p className="text-mg-lightgray/80 mb-10">
            Unlock 15% off your first order and get early access to our limited-edition scent drops.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white/20 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-mg-black px-6 py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors"
            >
              Unlock 15% Off
            </button>
          </form>
          <p className="text-xs text-mg-lightgray/40 mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>

      {/* 8. Final CTA Banner */}
      <section className="py-32 px-6 text-center bg-mg-black">
        <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 tracking-tighter">Smell unforgettable.</h2>
        <Link
          to="/shop"
          className="inline-block border border-white text-white px-12 py-5 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-mg-black transition-colors"
        >
          Shop All Scents
        </Link>
      </section>
    </div>
  );
}
