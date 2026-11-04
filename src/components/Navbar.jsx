import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Leaf, Phone } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Operations', href: '#operations' },
    { name: 'Industries', href: '#industries' },
    { name: 'Commitment', href: '#commitment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <div className="logo-symbol">
            <Leaf size={20} />
          </div>
          <div className="brand-meta">
            <span className="brand-name">BARACO PRIME</span>
            <span className="brand-legal">ENVIRONMENTAL & TRANSPORTATION</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="nav-links-desktop">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-item">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-right-actions">
          <a href="tel:+971553732200" className="nav-phone-link">
            <Phone size={14} />
            <span>+971 55 373 2200</span>
          </a>

          <button className="btn btn-accent nav-cta-btn" onClick={onOpenModal}>
            GET IN TOUCH <ArrowUpRight size={15} />
          </button>

          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="brand-meta">
              <span className="brand-name">BARACO PRIME</span>
              <span className="brand-legal">ENVIRONMENTAL & TRANSPORTATION</span>
            </div>
            <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="drawer-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="drawer-footer">
            <button
              className="btn btn-accent w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
            >
              GET IN TOUCH <ArrowUpRight size={16} />
            </button>
            <div className="drawer-contact-info">
              <p>enquiries@baraco.ae</p>
              <p>+971 55 373 2200 | +971 55 464 2200</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
