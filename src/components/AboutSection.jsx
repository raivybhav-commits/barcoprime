import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="editorial-about-grid">
          {/* Left Column: Heading & Text */}
          <div className="about-editorial-left">
            <div className="eyebrow">
              <span className="eyebrow-num">03</span>
              <span>COMPANY PROFILE</span>
            </div>
            
            <h2 className="section-headline about-headline">
              ABOUT <br />
              <span className="text-highlight-green">BARACO PRIME</span>
            </h2>

            <div className="who-we-are-box">
              <h3 className="subheading-title">WHO WE ARE</h3>
              <p className="about-lead">
                <strong>BARACO PRIME</strong> is an environmental transport company dedicated to providing reliable and responsible waste management solutions.
              </p>
              <p className="about-p">
                We focus on safe collection, efficient transportation, and responsible disposal to support communities and businesses towards a cleaner tomorrow.
              </p>
            </div>

            <div className="about-experience-badge mt-4">
              <div className="badge-ring">
                <CheckCircle2 size={24} className="text-accent" />
              </div>
              <div className="badge-text">
                <span className="b-title">L.L.C - S.P.C</span>
                <span className="b-sub">Licensed Environmental Transport Operator</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Photo & Vision/Mission */}
          <div className="about-editorial-right">
            <div className="about-hero-image-box">
              <img
                src="/assets/brochure_page_2.png"
                alt="Baraco Prime Waste Transport Fleet & Processing Center"
                className="about-hero-image"
              />
            </div>

            <div className="vm-editorial-row">
              <div className="vm-editorial-card">
                <h4 className="vm-card-title">01 / VISION</h4>
                <p className="vm-card-body">
                  To be a leading environmental transport company recognized for innovation, sustainability, and service excellence.
                </p>
              </div>

              <div className="vm-editorial-card">
                <h4 className="vm-card-title">02 / MISSION</h4>
                <p className="vm-card-body">
                  To deliver safe, reliable, and environmentally responsible transport solutions while building lasting relationships through quality and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
