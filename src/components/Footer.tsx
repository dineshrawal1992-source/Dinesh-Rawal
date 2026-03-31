import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-mg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-3xl tracking-tight text-white mb-4 block">
            Moody Girl
          </Link>
          <p className="text-sm text-mg-lightgray/70 max-w-xs">
            You don't wear this. You become it. Bold, sensual, emotionally expressive fragrances for the modern aesthetic.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-medium tracking-widest uppercase text-white mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-mg-lightgray/70">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Scents</Link></li>
            <li><Link to="/shop?mood=soft-dangerous" className="hover:text-white transition-colors">Soft & Dangerous</Link></li>
            <li><Link to="/shop?mood=cold-untouchable" className="hover:text-white transition-colors">Cold & Untouchable</Link></li>
            <li><Link to="/shop?mood=sweet-toxic" className="hover:text-white transition-colors">Sweet but Toxic</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-widest uppercase text-white mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-mg-lightgray/70">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/quiz" className="hover:text-white transition-colors">Find Your Mood</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-medium tracking-widest uppercase text-white mb-6">Join the Mood</h4>
          <p className="text-sm text-mg-lightgray/70 mb-4">
            Sign up for exclusive scent drops and dark feminine energy delivered to your inbox.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-b border-white/30 text-white px-0 py-2 w-full focus:outline-none focus:border-white transition-colors text-sm"
            />
            <button
              type="submit"
              className="border-b border-white/30 py-2 px-4 text-sm uppercase tracking-widest hover:text-white hover:border-white transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-mg-lightgray/50">
        <p>&copy; {new Date().getFullYear()} Moody Girl Fragrances. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
