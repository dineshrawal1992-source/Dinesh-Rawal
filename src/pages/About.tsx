import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616604847477-a503e461e12a?q=80&w=2000&auto=format&fit=crop"
            alt="Dark feminine aesthetic"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mg-black/40 via-transparent to-mg-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-20">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6 tracking-tight">
            We don't make<br />
            <span className="italic text-mg-nude">pretty perfumes.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-mg-black">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl text-white font-serif leading-relaxed mb-12 text-center">
              Moody Girl was born from the idea that women are complex, chaotic, and beautiful all at once. We don't want to smell like a generic bouquet of flowers.
            </p>
            
            <div className="space-y-8 text-mg-lightgray/80 leading-relaxed font-light">
              <p>
                The fragrance industry has spent decades telling women how they should smell: fresh, floral, clean, agreeable. But what about the days when you don't feel agreeable? What about the nights when you want to leave an impression that lingers like a rumor?
              </p>
              <p>
                We created Moody Girl for the days you want to be left alone, the nights you want to be the center of attention, and every chaotic moment in between.
              </p>
              <p>
                Our scents are not designed to be universally liked. They are designed to be fiercely loved by the people who understand them. They are bold, sensual, and unapologetically emotional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-white mb-20">Our Ethos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="uppercase tracking-widest text-sm text-mg-nude mb-6">Emotion First</h3>
              <p className="text-mg-lightgray/70 leading-relaxed">
                We don't start with notes; we start with a feeling. A memory. A late-night text. Every scent is designed to evoke a specific emotional state.
              </p>
            </div>
            <div className="text-center">
              <h3 className="uppercase tracking-widest text-sm text-mg-nude mb-6">Unapologetic Quality</h3>
              <p className="text-mg-lightgray/70 leading-relaxed">
                Extrait de Parfum concentration. That means 20-30% pure perfume oil. It lasts longer, projects further, and evolves beautifully on your skin.
              </p>
            </div>
            <div className="text-center">
              <h3 className="uppercase tracking-widest text-sm text-mg-nude mb-6">Cruelty Free</h3>
              <p className="text-mg-lightgray/70 leading-relaxed">
                Always vegan. Always cruelty-free. We believe in creating dark, dangerous scents without harming any living creatures in the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-mg-black">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-10">Find your mood.</h2>
        <Link
          to="/quiz"
          className="inline-block bg-white text-mg-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors"
        >
          Take the Scent Quiz
        </Link>
      </section>
    </div>
  );
}
