import React from 'react';
import { ArrowUpRight, RefreshCw } from 'lucide-react';

export default function IntroAbout() {
  return (
    <section id="intro" className="section-padding bg-light-tint">
      <div className="container">
        <div className="editorial-about-grid">
          {/* Left Sticky Headline */}
          <div className="about-editorial-left">
            <div className="eyebrow">
              <span className="eyebrow-num">02</span>
              <span>COMPANY STATEMENT</span>
            </div>
            <h2 className="section-headline about-headline">
              TRANSFORMING WASTE <br />
              <span className="text-highlight-green">INTO A CLEANER TOMORROW.</span>
            </h2>

            <div className="recycling-visual-badge mt-4">
              <div className="spinning-circle-wrapper">
                <RefreshCw size={28} className="spinning-icon" />
              </div>
              <div className="recycling-text-badge">
                <span className="badge-heading">Sustainable Operations</span>
                <span className="badge-sub">Environmental Protection Framework</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-editorial-right">
            <p className="about-intro-statement">
              BARACO PRIME is an environmental transport company dedicated to providing reliable and responsible waste management solutions.
            </p>

            <p className="about-body-text">
              We focus on safe collection, efficient transportation, and responsible disposal to support businesses and communities towards a cleaner tomorrow. Our operations strictly align with municipal protocols and environmental protection standards.
            </p>

            <div>
              <a href="#about" className="learn-more-link">
                LEARN MORE ABOUT US <ArrowUpRight size={18} className="arrow-hover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
