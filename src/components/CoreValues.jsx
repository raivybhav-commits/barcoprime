import React from 'react';

export default function CoreValues() {
  const values = [
    {
      num: '01',
      title: 'SUSTAINABILITY',
      desc: 'Responsible practices that support a cleaner environment and long-term ecological protection.'
    },
    {
      num: '02',
      title: 'SAFETY',
      desc: 'Maintaining the highest standards of safety across every transport and collection operation.'
    },
    {
      num: '03',
      title: 'RELIABILITY',
      desc: 'Consistent, punctual, and dependable service tailored for every client requirement.'
    },
    {
      num: '04',
      title: 'EXCELLENCE',
      desc: 'Delivering quality and professional waste management service at every operational stage.'
    }
  ];

  return (
    <section className="section-padding values-section-editorial">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-num">04</span>
          <span>OUR FOUNDATION</span>
        </div>
        <h2 className="section-headline">OUR CORE VALUES</h2>
        <p className="section-desc mt-2">
          The principles that guide our environmental transport operations and customer commitments every single day.
        </p>

        <div className="values-editorial-grid">
          {values.map((val) => (
            <div key={val.num} className="value-editorial-card">
              <div className="val-card-number">{val.num}</div>
              <h3 className="val-card-title">{val.title}</h3>
              <p className="val-card-desc">{val.desc}</p>
              <div className="val-card-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
