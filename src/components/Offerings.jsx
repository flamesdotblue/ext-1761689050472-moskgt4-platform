import React from "react";
import { Users, Sparkles, Banknote, Trophy } from "lucide-react";

export default function Offerings() {
  const tiers = [
    {
      name: "Tier I: Emerging Professional",
      desc: "Curated entry-level luxury access with smart value across select events.",
    },
    {
      name: "Tier II: Rising Leader",
      desc: "Premium accommodations and guided cultural immersions at marquee fixtures.",
    },
    {
      name: "Tier III: Executive",
      desc: "Business-class air, concierge transport, and elevated hospitality experiences.",
    },
    {
      name: "Tier IV: VIP",
      desc: "Suite-level access, private dining, and bespoke itineraries with insider moments.",
    },
    {
      name: "Tier V: VVIP",
      desc: "Private aviation, luxury villas, and white-glove coverage end-to-end.",
    },
    {
      name: "Tier VI: Sovereign & Family Office",
      desc: "Full privatized operations, security, and multi-country event programs.",
    },
  ];

  return (
    <section id="offerings" className="py-16 md:py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Six-Tier Architecture</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            A scalable framework to deliver world-class, culturally precise experiences across the spectrum—from first-time premium travelers to sovereign wealth families.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/[0.03] text-white/80"><Trophy className="h-4 w-4"/> Mega-Events Playbook</span>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5">
            <h3 className="font-medium">{t.name}</h3>
            <p className="mt-2 text-sm text-white/70">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        <Stat icon={<Users className="h-4 w-4" />} title="Diaspora-to-Global" body="Tailored routes linking key African, European, Middle Eastern, and American hubs."/>
        <Stat icon={<Banknote className="h-4 w-4" />} title="Year 1 Economics" body="Target ~$45M revenue with 25–40% ROI across diversified tier-mix."/>
        <Stat icon={<Sparkles className="h-4 w-4" />} title="Signature Access" body="Charters, suites, paddocks, hospitality villages, and cultural immersion moments."/>
      </div>

      <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h4 className="text-lg font-medium">Repeatable Framework for Mega-Events</h4>
        <p className="mt-2 text-white/70 max-w-3xl">
          Standardized planning sprints, supplier SLAs, and concierge protocols allow us to deploy reliably for Olympics, FIFA tournaments, AFCON, F1, and Rugby World Cup. Each event toolkit includes demand modeling, inventory controls, hospitality curation, and cultural programming.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs">
          {[
            "Olympics",
            "FIFA World Cup",
            "AFCON",
            "Formula 1",
            "Rugby World Cup",
            "Tennis Grand Slams",
          ].map((tag) => (
            <span key={tag} className="px-3 py-2 rounded border border-white/10 bg-white/[0.02] text-white/70">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, title, body }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-2 text-white/80">{icon}<span className="text-sm tracking-wide uppercase">{title}</span></div>
      <p className="mt-2 text-sm text-white/70">{body}</p>
    </div>
  );
}
