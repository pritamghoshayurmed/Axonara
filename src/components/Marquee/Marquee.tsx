import React from 'react';
import './Marquee.css';

const serviceItems = [
  'AI Automation & Integration',
  'Custom Web & App Development',
  'Business Systems',
  'Internal Tools',
  'Sales Funnels',
  'Analytics Dashboards',
  'Ecommerce Experiences',
  'Full Stack Product Engineering',
];

const trustItems = [
  '50+ Happy Clients',
  '98% Client Satisfaction',
  '24/7 Dedicated Support',
  '5+ Years of Experience',
  '100+ Solutions Delivered',
  'Rapid Delivery Cycles',
];

const RibbonItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="marquee__item">
    <span className="marquee__item-icon">✦</span>
    <span className="marquee__item-name">{text}</span>
  </div>
);

const Marquee: React.FC = () => {
  return (
    <section className="marquee-section" aria-label="Service highlights">
      <div className="marquee-track-outer marquee-track-outer--top">
        <div className="marquee-track marquee-track--services">
          {[...serviceItems, ...serviceItems].map((item, i) => (
            <RibbonItem key={`service-${i}`} text={item} />
          ))}
        </div>
      </div>

      <div className="marquee-track-outer marquee-track-outer--bottom">
        <div className="marquee-track marquee-track--trust">
          {[...trustItems, ...trustItems].map((item, i) => (
            <RibbonItem key={`trust-${i}`} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
