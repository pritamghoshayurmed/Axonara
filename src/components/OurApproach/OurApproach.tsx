import React from 'react';
import './OurApproach.css';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description:
      'We map your current workflows, systems, and growth bottlenecks to build a clear execution baseline.',
  },
  {
    step: '02',
    title: 'Architecture & Roadmap',
    description:
      'Our team defines the service mix, technical architecture, and phased delivery plan tied to business outcomes.',
  },
  {
    step: '03',
    title: 'Build, Integrate, Launch',
    description:
      'We deliver production-ready automation, dashboards, and product systems with transparent weekly progress.',
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description:
      'After launch, we continuously improve performance, reliability, and conversion through measured iteration.',
  },
];

const highlights = [
  { value: '50+', label: 'Clients Served' },
  { value: '100+', label: 'Systems Delivered' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Strategic Support' },
];

const OurApproach: React.FC = () => {
  return (
    <section className="our-approach" id="our-approach">
      <div className="container">
        <div className="our-approach__header">
          <span className="section-badge">OUR PROCESS</span>
          <h2 className="section-title">How We Deliver High-Impact Service Systems</h2>
          <p className="section-subtitle">
            From strategy to implementation, our process is designed to produce measurable outcomes across AI automation,
            analytics, ecommerce, and full stack delivery.
          </p>
        </div>

        <div className="our-approach__grid" role="list" aria-label="Delivery process steps">
          {processSteps.map((item) => (
            <article key={item.step} className="our-approach__card" role="listitem">
              <span className="our-approach__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="our-approach__highlights" aria-label="Company highlights">
          {highlights.map((item) => (
            <div key={item.label} className="our-approach__metric">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
