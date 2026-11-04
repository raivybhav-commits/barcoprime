import React from 'react';

export default function Stats() {
  const capabilities = [
    {
      num: '01',
      title: 'RELIABLE SERVICE',
      desc: 'Punctual collection schedules and rapid operational dispatch for demanding timelines.'
    },
    {
      num: '02',
      title: 'SAFE TRANSPORTATION',
      desc: 'Certified modern heavy fleet complying with stringent road safety regulations.'
    },
    {
      num: '03',
      title: 'RESPONSIBLE DISPOSAL',
      desc: '100% eco-compliant waste treatment at licensed handling facilities.'
    },
    {
      num: '04',
      title: 'SUSTAINABLE APPROACH',
      desc: 'Resource recovery and material segregation prioritizing ecological protection.'
    }
  ];

  return (
    <section className="capability-section">
      <div className="container">
        <div className="capability-grid">
          {capabilities.map((item, idx) => (
            <div key={idx} className="capability-item">
              <span className="cap-number">{item.num}</span>
              <h3 className="cap-title">{item.title}</h3>
              <p className="cap-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
