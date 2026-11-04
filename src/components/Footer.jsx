import React from 'react';
import { ArrowUp } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.22 0-1.6.76-1.6 1.54V12h2.75l-.44 3h-2.31v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-editorial">
      {/* Oversized Subtle Background Watermark */}
      <div className="footer-watermark-text">BARACO</div>

      <div className="container">
        <div className="footer-grid-layout">
          {/* Brand Identity */}
          <div className="footer-col-brand">
            <h3 className="footer-brand-title">BARACO PRIME</h3>
            <p className="footer-legal-name">ENVIRONMENTAL & TRANSPORTATION - L.L.C - S.P.C</p>
            <p className="footer-tagline-text">
              Cleaner Tomorrow. Greener Future. Reliable waste management, collection, transportation, and environmentally responsible disposal solutions across the UAE.
            </p>
            
            <div className="footer-socials mt-4">
              <a
                href="https://facebook.com/baracoprime"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/company/baracoprime"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col-nav">
            <h4 className="footer-column-title">NAVIGATION</h4>
            <ul className="footer-link-stack">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#operations">Operations</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#commitment">Commitment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col-services">
            <h4 className="footer-column-title">SOLUTIONS</h4>
            <ul className="footer-link-stack">
              <li><a href="#services">Waste Skip Hire</a></li>
              <li><a href="#services">Collection & Transport</a></li>
              <li><a href="#services">Responsible Disposal</a></li>
              <li><a href="#services">Customized Solutions</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col-contact">
            <h4 className="footer-column-title">HEADQUARTERS</h4>
            <ul className="footer-link-stack">
              <li><span>+971 55 373 2200</span></li>
              <li><span>+971 55 464 2200</span></li>
              <li><a href="mailto:enquiries@baraco.ae">enquiries@baraco.ae</a></li>
              <li><a href="https://www.baraco.ae" target="_blank" rel="noreferrer">www.baraco.ae</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} BARACO PRIME Environmental & Transportation L.L.C - S.P.C. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
