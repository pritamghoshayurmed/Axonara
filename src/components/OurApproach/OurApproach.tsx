import React from 'react';
import './OurApproach.css';
import benifitsIcon1 from '../../assets/benifits-icon1.svg';
import beinitsIcon2 from '../../assets/beinits-icon2.svg';
import chartIcon1 from '../../assets/chart-icon1.svg';

const processSteps = [
  {
    icon: benifitsIcon1,
    iconAlt: 'Workflow benefit icon',
    title: 'Discovery & Audit',
    description:
      'We map your current workflows, systems, and growth bottlenecks to build a clear execution baseline.',
  },
  {
    icon: beinitsIcon2,
    iconAlt: 'Lead tracking benefit icon',
    title: 'Architecture & Roadmap',
    description:
      'Our team defines the service mix, technical architecture, and phased delivery plan tied to business outcomes.',
  },
  {
    icon: chartIcon1,
    iconAlt: 'Chart insight icon',
    title: 'Build, Integrate, Launch',
    description:
      'We deliver production-ready automation, dashboards, and product systems with transparent weekly progress.',
  },
  {
    icon: benifitsIcon1,
    iconAlt: 'Optimization benefit icon',
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
        <div className="our-approach__accent accent-top"></div>
        <div className="our-approach__accent accent-bottom"></div>

        <div className="our-approach__header">
          <span className="section-badge">OUR PROCESS</span>
          <h2 className="section-title">How We Deliver High-Impact Service Systems</h2>
          <p className="section-subtitle">
            From strategy to implementation, our process is designed to produce measurable outcomes across AI automation,
            analytics, ecommerce, and full stack delivery.
          </p>
        </div>

        <div className="our-approach__process-wrapper">
          <div className="our-approach__grid" role="list" aria-label="Delivery process steps">
            {processSteps.map((item) => (
              <article
                key={item.title}
                className="our-approach__card"
                role="listitem"
              >
                <div className="our-approach__card-inner">
                  <div className="our-approach__icon-badge" aria-hidden="true">
                    <img src={item.icon} alt={item.iconAlt} className="our-approach__icon" />
                  </div>
                  <h3 className="our-approach__card-title">{item.title}</h3>
                  <p className="our-approach__card-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="our-approach__highlights" aria-label="Company highlights">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="our-approach__metric"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="our-approach__metric-inner">
                <strong className="our-approach__metric-value">{item.value}</strong>
                <span className="our-approach__metric-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
