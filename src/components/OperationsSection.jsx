import React, { useState } from 'react';

export default function OperationsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'COLLECTION',
      subtitle: 'Efficient Waste Collection',
      desc: 'Scheduled and on-demand skip placements, bin collection, and site waste loading using specialized equipment.',
      details: 'Deploying heavy-duty containers, hydraulic skip lifters, and trained personnel for seamless site clearance.'
    },
    {
      num: '02',
      title: 'TRANSPORTATION',
      subtitle: 'Safe & Timely Transport',
      desc: 'GPS-monitored heavy transport vehicles ensuring secure, prompt, and compliant transit to designated facilities.',
      details: 'Strict adherence to traffic and safety guidelines, minimizing transit risk and guaranteeing on-schedule arrivals.'
    },
    {
      num: '03',
      title: 'RECYCLING / DISPOSAL',
      subtitle: 'Responsible Treatment',
      desc: 'Sorting, resource recovery, and material segregation at approved environmental handling centers.',
      details: 'Prioritizing material recovery to divert usable waste from landfills in accordance with sustainability standards.'
    },
    {
      num: '04',
      title: 'COMPLIANCE',
      subtitle: 'Environmentally Compliant',
      desc: 'Full regulatory compliance, manifest tracking, and eco-friendly operational audits for every journey.',
      details: 'Providing verified disposal manifests and full alignment with municipal and environmental authority frameworks.'
    }
  ];

  return (
    <section id="operations" className="section-padding operations-editorial-section">
      <div className="container">
        <div className="eyebrow text-accent">
          <span className="eyebrow-num text-white">06</span>
          <span>OPERATIONAL EXCELLENCE</span>
        </div>
        <h2 className="section-headline text-white">OUR OPERATIONS</h2>
        <p className="section-desc text-light-dim mt-2">
          Driving Sustainable Waste Solutions
        </p>

        {/* Timeline Horizontal Track */}
        <div className="timeline-progress-container">
          <div className="timeline-horizontal-track">
            <div className="timeline-track-bar">
              <div
                className="timeline-fill-bar"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`timeline-node ${activeStep === idx ? 'node-active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="node-number-circle">
                  <span>{step.num}</span>
                </div>
                <h3 className="node-title">{step.title}</h3>
                <p className="node-subtitle">{step.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Active Stage Focused Detail Box */}
          <div className="operations-stage-detail">
            <div className="stage-detail-left">
              <div className="detail-stage-num">OPERATIONAL STAGE {steps[activeStep].num} IN FOCUS</div>
              <h3 className="detail-stage-title">{steps[activeStep].subtitle}</h3>
              <p className="detail-stage-text">{steps[activeStep].desc}</p>
              <p className="detail-stage-bullet">{steps[activeStep].details}</p>
            </div>
            <div className="stage-detail-right">
              <div className="detail-image-box">
                <img
                  src={`/assets/brochure_page_${(activeStep % 3) + 3}.png`}
                  alt={steps[activeStep].title}
                  className="detail-stage-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
