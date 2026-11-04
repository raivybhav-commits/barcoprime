import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="hero-editorial">
      {/* Background Photography Layer */}
      <div className="hero-photo-layer">
        <img
          src="/assets/brochure_page_1.png"
          alt="Baraco Prime Heavy Transport & Recycling Operations"
          className="hero-photo"
        />
        <div className="hero-photo-vignette"></div>
      </div>

      <div className="container hero-editorial-container">
        <div className="hero-editorial-grid">
          {/* Main Column */}
          <div className="hero-main-col">
            <div className="hero-meta-strip">
              <span className="meta-index">01</span>
              <div className="meta-divider-line"></div>
              <span className="meta-tagline">ENVIRONMENTAL & TRANSPORTATION</span>
            </div>

            <h1 className="hero-main-title">
              CLEANER WASTE. <br />
              <span className="title-accent-green">GREENER FUTURE.</span>
            </h1>

            <p className="hero-copy">
              Reliable waste management and environmental transportation solutions designed for businesses, industries, and communities across the UAE.
            </p>

            <div className="hero-actions-row">
              <button className="btn btn-accent" onClick={onOpenModal}>
                REQUEST A SERVICE <ArrowUpRight size={18} />
              </button>
              <a href="#services" className="btn btn-outline-white">
                EXPLORE OUR SERVICES
              </a>
            </div>
          </div>

          {/* Side Editorial Specs Column */}
          <div className="hero-side-col">
            <div className="hero-side-specs">
              <div className="side-spec-item">
                <span className="spec-number">100%</span>
                <span className="spec-label">Environmental Compliance</span>
              </div>
              <div className="side-spec-item">
                <span className="spec-number">24 / 7</span>
                <span className="spec-label">Fleet Dispatch & Support</span>
              </div>
              <div className="side-spec-item">
                <span className="spec-number">L.L.C - S.P.C</span>
                <span className="spec-label">Licensed UAE Operator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Micro Information Strip */}
      <div className="hero-bottom-bar">
        <div className="container hero-bar-inner">
          <span>BARACO PRIME • ENVIRONMENTAL TRANSPORTATION</span>
          <a href="#intro" className="flex items-center gap-2 hover:text-white transition-colors">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
