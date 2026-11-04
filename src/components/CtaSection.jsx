import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection({ onOpenModal }) {
  return (
    <section className="cta-cinematic-section">
      <img
        src="/assets/hero_cover.png"
        alt="Baraco Prime Heavy Waste Transport Operations"
        className="cta-photo-layer"
      />

      <div className="container cta-cinematic-container">
        <div className="eyebrow text-accent">
          <span className="eyebrow-num text-white">10</span>
          <span>TAKE THE NEXT STEP</span>
        </div>

        <h2 className="cta-cinematic-title">READY FOR A CLEANER TOMORROW?</h2>

        <p className="cta-cinematic-copy">
          Let <strong>BARACO PRIME</strong> help you manage waste responsibly with reliable collection, transportation, and disposal solutions.
        </p>

        <div className="cta-actions-group">
          <button className="btn btn-accent" onClick={onOpenModal}>
            REQUEST A SERVICE <ArrowUpRight size={18} />
          </button>
          <a href="#contact" className="btn btn-outline-white">
            CONTACT OUR LOGISTICS TEAM
          </a>
        </div>
      </div>
    </section>
  );
}
