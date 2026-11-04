import React from 'react';

export default function WhyUsSection() {
  const capabilities = [
    {
      title: 'RELIABLE SERVICE',
      desc: 'Punctual collection schedules and rapid operational response tailored for demanding project timelines.'
    },
    {
      title: 'SAFE OPERATIONS',
      desc: 'Strict safety protocols and modern heavy transport machinery ensuring risk-free environmental logistics.'
    },
    {
      title: 'RESPONSIBLE DISPOSAL',
      desc: 'Full commitment to environmental compliance and eco-friendly waste processing at licensed handling facilities.'
    },
    {
      title: 'SUSTAINABLE APPROACH',
      desc: 'Prioritizing waste reduction and material recovery to minimize environmental impact across the region.'
    },
    {
      title: 'CUSTOMIZED SOLUTIONS',
      desc: 'Flexible skip hire terms, bespoke transport schedules, and tailored service contracts for any scale.'
    },
    {
      title: 'PROFESSIONAL SERVICE',
      desc: 'Dedicated customer support, transparent account management, and experienced logistics operators.'
    }
  ];

  return (
    <section className="section-padding bg-light-tint">
      <div className="container">
        <div className="why-us-statement-grid">
          {/* Left Column: Bold Brand Words */}
          <div className="why-us-left">
            <div className="eyebrow">
              <span className="eyebrow-num">09</span>
              <span>OUR ADVANTAGE</span>
            </div>
            
            <h2 className="brand-words-title">
              RELIABLE. <br />
              SAFE. <br />
              <span className="text-highlight-green">RESPONSIBLE.</span>
            </h2>

            <p className="section-desc">
              We stand out through unwavering operational integrity, safety compliance, and dependable environmental logistics.
            </p>
          </div>

          {/* Right Column: Capability List */}
          <div className="why-us-right">
            <div className="capability-list-grid">
              {capabilities.map((item, idx) => (
                <div key={idx} className="cap-item-box">
                  <h3 className="cap-item-heading">{item.title}</h3>
                  <p className="cap-item-p">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
