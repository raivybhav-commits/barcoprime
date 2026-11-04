import React from 'react';

export default function CommitmentSection() {
  const commitments = [
    {
      title: 'ENVIRONMENTAL RESPONSIBILITY',
      desc: 'Protecting the environment through sustainable waste management, resource recovery, and reduced ecological footprint.'
    },
    {
      title: 'HEALTH & SAFETY',
      desc: 'Maintaining the highest safety standards across every transportation, handling, and disposal operation.'
    },
    {
      title: 'CUSTOMER FOCUS',
      desc: 'Building lasting relationships through dependable service, responsive communication, and tailored waste solutions.'
    },
    {
      title: 'QUALITY & COMPLIANCE',
      desc: 'Delivering services strictly in line with regulatory frameworks, industry safety norms, and environmental standards.'
    }
  ];

  const pillars = ['REDUCE', 'REUSE', 'RECYCLE', 'PROTECT'];

  return (
    <section id="commitment" className="section-padding bg-light-tint">
      <div className="container">
        <div className="commitment-split-grid">
          {/* Left Column */}
          <div className="commitment-editorial-left">
            <div className="eyebrow">
              <span className="eyebrow-num">07</span>
              <span>SUSTAINABILITY FIRST</span>
            </div>
            <h2 className="section-headline">
              OUR <br />
              <span className="text-highlight-green">COMMITMENT</span>
            </h2>
            <p className="section-desc mt-3">
              Dedicated to delivering responsible environmental solutions with integrity, safety, and sustainability.
            </p>
          </div>

          {/* Right Column: List Rows */}
          <div className="commitment-editorial-right">
            <div className="commitment-list-rows">
              {commitments.map((c, idx) => (
                <div key={idx} className="commitment-row-item">
                  <h3 className="row-header-title">{c.title}</h3>
                  <p className="row-desc-text">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motto Banner Strip */}
        <div className="commitment-motto-strip mt-6">
          <h3 className="motto-heading">“A Cleaner Environment, A Better Tomorrow”</h3>
          <div className="motto-badge-group">
            {pillars.map((p, idx) => (
              <span key={idx} className="motto-tag-pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
