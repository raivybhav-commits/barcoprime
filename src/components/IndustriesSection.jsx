import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesSection({ onOpenModal }) {
  const industries = [
    {
      num: '01',
      title: 'CONSTRUCTION SITES',
      desc: 'Efficient waste collection and disposal solutions for construction, renovation, and major infrastructure projects.'
    },
    {
      num: '02',
      title: 'COMMERCIAL BUILDINGS',
      desc: 'Reliable waste management services tailored for corporate offices, shopping malls, and business complexes.'
    },
    {
      num: '03',
      title: 'INDUSTRIAL FACILITIES',
      desc: 'Safe handling and transportation of non-hazardous industrial waste with complete regulatory compliance.'
    },
    {
      num: '04',
      title: 'RESIDENTIAL COMMUNITIES',
      desc: 'Clean, reliable, and sustainable waste management for residential communities, villas, and housing areas.'
    },
    {
      num: '05',
      title: 'RECYCLING CENTRES',
      desc: 'Supporting bulk recycling operations with efficient transportation and sustainable waste transfer solutions.'
    },
    {
      num: '06',
      title: 'GOVERNMENT & PUBLIC SECTOR',
      desc: 'Trusted waste management solutions for municipalities, government entities, and public infrastructure.'
    }
  ];

  return (
    <section id="industries" className="section-padding">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-num">08</span>
          <span>TARGET SECTORS</span>
        </div>
        <h2 className="section-headline">INDUSTRIES WE SERVE</h2>
        <p className="section-desc mt-2">
          Providing reliable environmental transportation and waste management solutions across diverse industries.
        </p>

        <div className="industries-editorial-grid">
          {industries.map((ind) => (
            <div key={ind.num} className="industry-editorial-card" onClick={onOpenModal}>
              <div className="ind-card-head">
                <span className="ind-card-num">{ind.num}</span>
              </div>
              <h3 className="ind-card-title">{ind.title}</h3>
              <p className="ind-card-body">{ind.desc}</p>
              <div className="ind-card-action">
                <span>REQUEST SOLUTION</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
