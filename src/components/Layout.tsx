import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState } from "react";
import { X } from "lucide-react";

export function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-mg-black text-mg-lightgray font-sans selection:bg-mg-plum selection:text-white">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="relative w-full max-w-md bg-mg-black border-l border-white/10 h-full flex flex-col shadow-2xl transform transition-transform duration-300 translate-x-0">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-serif text-2xl text-white">Your Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-mg-lightgray hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center p-6">
              <p className="text-mg-lightgray/60 mb-6 text-center">Your bag is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="border-b border-white pb-1 uppercase tracking-widest text-sm hover:text-mg-nude hover:border-mg-nude transition-colors"
              >
                Continue Shopping
              </button>
            </div>
            
            <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
              <div className="flex justify-between text-white mb-6">
                <span className="uppercase tracking-widest text-sm">Subtotal</span>
                <span>$0.00</span>
              </div>
              <p className="text-xs text-mg-lightgray/50 mb-6 text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-white text-mg-black py-4 uppercase tracking-widest text-sm font-medium opacity-50 cursor-not-allowed">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

