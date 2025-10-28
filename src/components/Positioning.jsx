import React from "react";

export default function Positioning() {
  return (
    <section id="positioning" className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Market Positioning</h2>
          <p className="mt-4 text-white/70">
            We occupy a unique market position: premium enough for UHNW clients, culturally authentic enough for the diaspora, and operationally sophisticated enough for institutional partnerships. Our six-tier architecture serves everyone from emerging professionals to sovereign wealth families.
          </p>
          <div className="mt-8 space-y-3">
            <Bullet>Premier African-led FIFA luxury travel provider on the global stage</Bullet>
            <Bullet>Year 1 revenue target: ~$45M USD / ~R860M ZAR with 25–40% ROI</Bullet>
            <Bullet>Multi-year anchor partnerships across aviation, hospitality, spirits, watchmaking, and private banking</Bullet>
            <Bullet>Repeatable playbook for mega-events worldwide</Bullet>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Competitive Advantage</h3>
          <p className="mt-4 text-white/70">
            Unlike traditional travel agencies, we leverage deep African cultural capital, world-class concierge networks, and proprietary access to exclusive experiences. Our team combines hospitality expertise with authentic storytelling—a combination unmatched in the luxury travel space.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="Cultural Capital" body="Authentic experiences rooted in African heritage and diaspora narratives."/>
            <Card title="Access & Networks" body="Private jets, VIP hospitality, and behind-the-scenes privileges."/>
            <Card title="Operational Rigor" body="Playbooks and QA standards built for global mega-events."/>
            <Card title="Storytelling" body="Distinct brand moments that resonate with discerning audiences."/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-1.5 w-6 bg-white" />
      <p className="text-white/80">{children}</p>
    </div>
  );
}

function Card({ title, body }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.03] p-5">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-white/70">{body}</p>
    </div>
  );
}
