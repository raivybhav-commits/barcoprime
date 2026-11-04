import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection({ onOpenModal }) {
  const [activeSkip, setActiveSkip] = useState(1);

  const skipSizes = [
    {
      id: 0,
      size: '4 Yard Skip',
      tag: 'Small Residential',
      capacity: 'Approx. 40-50 Trash Bags',
      bestFor: 'Home renovations, garden waste, minor construction cleanup.',
      dimensions: '6ft (L) x 4.3ft (W) x 3ft (H)'
    },
    {
      id: 1,
      size: '7 Yard Skip',
      tag: 'Medium Commercial',
      capacity: 'Approx. 70-80 Trash Bags',
      bestFor: 'Office fit-outs, retail waste, medium building projects.',
      dimensions: '10ft (L) x 5.8ft (W) x 3.2ft (H)'
    },
    {
      id: 2,
      size: '12 Yard Skip',
      tag: 'Large Commercial',
      capacity: 'Approx. 120 Trash Bags',
      bestFor: 'Construction debris, demolition, bulky clearance.',
      dimensions: '12.2ft (L) x 5.8ft (W) x 5.5ft (H)'
    },
    {
      id: 3,
      size: '20 Yard Roll-On',
      tag: 'Industrial Waste',
      capacity: 'Heavy Bulk Waste',
      bestFor: 'Factory waste, site clearance, scrap metals.',
      dimensions: '20ft (L) x 8ft (W) x 4ft (H)'
    },
    {
      id: 4,
      size: '40 Yard Roll-On',
      tag: 'Bulk Infrastructure',
      capacity: 'Maximum Capacity',
      bestFor: 'Major infrastructure projects, industrial plant waste.',
      dimensions: '20ft (L) x 8ft (W) x 8.5ft (H)'
    }
  ];

  const supportingServices = [
    {
      num: 'SERVICE 02',
      title: 'COLLECTION & TRANSPORT',
      desc: 'Efficient and timely collection and transportation of waste using modern, well-maintained heavy vehicles.'
    },
    {
      num: 'SERVICE 03',
      title: 'RESPONSIBLE DISPOSAL',
      desc: 'Environmentally responsible disposal of waste through approved facilities and sustainable treatment practices.'
    },
    {
      num: 'SERVICE 04',
      title: 'CUSTOMIZED SOLUTIONS',
      desc: 'Tailored waste management solutions designed to meet the unique operational needs of our clients.'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-num">05</span>
          <span>WHAT WE OFFER</span>
        </div>
        <h2 className="section-headline">OUR SERVICES</h2>
        <p className="section-desc mt-2">
          Comprehensive waste management and transportation solutions that help businesses and communities operate cleaner, safer, and more sustainably.
        </p>

        {/* Asymmetric Asymmetric Services Layout */}
        <div className="services-asymmetric-grid">
          {/* Featured Service 01 Card */}
          <div className="service-featured-card">
            <div>
              <div className="featured-card-top">
                <span className="featured-badge">SERVICE 01 / FEATURED</span>
                <button className="btn btn-accent text-xs" onClick={onOpenModal}>
                  REQUEST SKIP <ArrowUpRight size={14} />
                </button>
              </div>

              <h3 className="featured-title">WASTE SKIP HIRE</h3>
              <p className="featured-desc">
                A wide range of skip sizes for construction, commercial, industrial, and residential waste management.
              </p>

              {/* Skip Size Interactive Widget */}
              <div className="skip-calculator-widget">
                <div className="widget-label">SELECT SKIP SIZE SPECIFICATION:</div>
                <div className="skip-pill-row">
                  {skipSizes.map((skip) => (
                    <button
                      key={skip.id}
                      className={`skip-pill-btn ${activeSkip === skip.id ? 'skip-pill-active' : ''}`}
                      onClick={() => setActiveSkip(skip.id)}
                    >
                      {skip.size}
                    </button>
                  ))}
                </div>

                <div className="skip-spec-display">
                  <div className="spec-display-title">
                    {skipSizes[activeSkip].size} ({skipSizes[activeSkip].tag})
                  </div>
                  <div className="spec-display-details">
                    <span><strong>Capacity:</strong> {skipSizes[activeSkip].capacity}</span>
                    <span><strong>Dimensions:</strong> {skipSizes[activeSkip].dimensions}</span>
                    <span><strong>Best For:</strong> {skipSizes[activeSkip].bestFor}</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-white w-full" onClick={onOpenModal}>
              BOOK SKIP HIRE SOLUTION <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Supporting Services Column */}
          <div className="services-list-column">
            {supportingServices.map((svc, idx) => (
              <div key={idx} className="service-list-item">
                <div>
                  <span className="item-num-label">{svc.num}</span>
                  <h3 className="item-title">{svc.title}</h3>
                  <p className="item-desc">{svc.desc}</p>
                </div>
                <div>
                  <button className="item-cta-link" onClick={onOpenModal}>
                    <span>REQUEST THIS SERVICE</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
