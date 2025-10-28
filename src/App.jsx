import React from "react";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import Offerings from "./components/Offerings";
import ImpactPartners from "./components/ImpactPartners";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="max-w-7xl mx-auto px-6 md:px-8">
        <Positioning />
        <Offerings />
        <ImpactPartners />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} The Black Spear Agency. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#positioning" className="hover:text-white/90 text-white/60">Positioning</a>
            <a href="#offerings" className="hover:text-white/90 text-white/60">Offerings</a>
            <a href="#impact" className="hover:text-white/90 text-white/60">Impact</a>
            <a href="#contact" className="hover:text-white/90 text-white/60">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
