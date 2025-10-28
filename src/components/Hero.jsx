import React from "react";
import { Shield, Globe, Plane, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_35%)]" />
      <nav className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-sm bg-white text-black flex items-center justify-center font-bold tracking-tight">B</div>
          <span className="font-semibold tracking-wide uppercase text-sm text-white/80">The Black Spear Agency</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#positioning" className="text-white/70 hover:text-white">Positioning</a>
          <a href="#offerings" className="text-white/70 hover:text-white">Offerings</a>
          <a href="#impact" className="text-white/70 hover:text-white">Impact</a>
          <a href="#contact" className="text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded">Request Consultation</a>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.18em] text-xs md:text-sm text-white/60">African-led. Global standard.</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Architects of Legacy Experiences in Sports Luxury Travel
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70">
            At the intersection of cultural authenticity, operational excellence, and global ambition. We bridge the African diaspora with world-class luxury across mega-events—from the Olympics to AFCON, F1 to the Rugby World Cup.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded bg-white text-black font-medium hover:bg-white/90">Speak to a Concierge</a>
            <a href="#offerings" className="px-5 py-3 rounded border border-white/20 hover:border-white/40 text-white">Explore Tiers</a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Feature icon={<Shield className="h-4 w-4" />} label="Operational Excellence" />
            <Feature icon={<Globe className="h-4 w-4" />} label="Diaspora to Global" />
            <Feature icon={<Plane className="h-4 w-4" />} label="Private Aviation & Access" />
            <Feature icon={<Trophy className="h-4 w-4" />} label="Mega-Event Playbook" />
          </div>
        </div>
      </section>
    </header>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-3 py-2">
      <span className="text-white/80">{icon}</span>
      <span className="text-white/70">{label}</span>
    </div>
  );
}
