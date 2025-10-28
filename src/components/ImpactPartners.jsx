import React from "react";
import { Handshake, Gem, Building2 } from "lucide-react";

export default function ImpactPartners() {
  return (
    <section id="impact" className="py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">ESG Commitments</h3>
          <p className="mt-3 text-white/70">
            We embed measurable outcomes into every program: youth sport scholarships, African SME inclusion, and women-led staffing goals—translating luxury into lasting impact.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-6 bg-white"/> Youth sport scholarships across priority markets</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-6 bg-white"/> Supplier diversity with African SMEs in core categories</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-6 bg-white"/> Women-led staffing pipelines and leadership development</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">Strategic Partnerships</h3>
          <p className="mt-3 text-white/70">We secure multi-year anchor partnerships across aviation, hospitality, premium spirits, luxury watchmaking, and private banking.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <Partner icon={<Building2 className="h-4 w-4"/>} name="Airlines" details="Charters, routes, lounges"/>
            <Partner icon={<Gem className="h-4 w-4"/>} name="Luxury Brands" details="Watches, couture, spirits"/>
            <Partner icon={<Handshake className="h-4 w-4"/>} name="Private Banks" details="Clienteling, events"/>
          </div>
        </div>
      </div>

      <div id="contact" className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="text-lg md:text-xl font-semibold">Ready to build your legacy experience?</h4>
          <p className="mt-2 text-white/70 max-w-2xl">Speak directly with our concierge team to craft a bespoke journey across upcoming mega-events. Discretion, precision, and cultural excellence guaranteed.</p>
        </div>
        <div className="flex gap-3">
          <a href="mailto:concierge@blackspear.agency" className="px-5 py-3 rounded bg-white text-black font-medium hover:bg-white/90">Email Concierge</a>
          <a href="https://cal.com/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded border border-white/20 hover:border-white/40 text-white">Book Intro Call</a>
        </div>
      </div>
    </section>
  );
}

function Partner({ icon, name, details }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-white/80">{icon}<span className="font-medium">{name}</span></div>
      <p className="mt-1 text-xs text-white/60">{details}</p>
    </div>
  );
}
