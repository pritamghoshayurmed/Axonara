import React from 'react';
import './Testimonials.css';

const allTestimonials = [
  { name: 'Adam Smith', title: 'Web Developer', quote: '"AI-powered insights are great! This SEO tool helps us stay ahead of the competition by predicting upcoming search trends and suggesting."', initials: 'AS', color: '#FF6500' },
  { name: 'Lewis Oscar', title: 'Digital Marketer', quote: 'Got in on the @family beta and first impression is that THIS is the web2 delightful UI/UX that web3 has been missing', initials: 'LO', color: '#44D5CC' },
  { name: 'Jack Callies', title: 'Full-Stack Developer', quote: 'Got in on the @family beta and first impression is that THIS is the web2 delightful UI/UX that web3 has been missing', initials: 'JC', color: '#6366F1' },
  { name: 'Harry Jackson', title: 'Businessman', quote: '"Increased our rankings and improvements in our search software."', initials: 'HJ', color: '#EC4899' },
  { name: 'Arthur Polis', title: 'Owner @XYZ', quote: '"We love how user-friendly the interface is, especially for our non-technical staff."', initials: 'AP', color: '#10B981' },
  { name: 'Allen Brown', title: 'Product Designer', quote: '"The content optimization feature is one of the best I have ever used. Highly recommended!"', initials: 'AB', color: '#F59E0B' },
  { name: 'Oliver Walker', title: 'Content Writer', quote: '"This software takes the complexity out of technical SEO and makes it accessible for everyone."', initials: 'OW', color: '#3B82F6' },
  { name: 'Sarah Mitchell', title: 'VP of Sales', quote: '"Zyforia completely transformed how our sales team operates. We closed 40% more deals in the first quarter."', initials: 'SM', color: '#8B5CF6' }
];

const row1 = allTestimonials.slice(0, 4);
const row2 = allTestimonials.slice(4, 8);

const MarqueeRow: React.FC<{ items: typeof row1; direction?: 'left' | 'right'; speed?: number }> = ({ items, direction = 'left', speed = 40 }) => {
  return (
    <div className={`testimonials__marquee-row`} style={{ '--duration': `${speed}s`, '--direction': direction === 'left' ? 'normal' : 'reverse' } as any}>
      <div className="testimonials__marquee-track">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="testicard">
            <div className="testicard__header">
              <div className="testicard__avatar" style={{ background: t.color }}>{t.initials}</div>
              <div className="testicard__info">
                <div className="testicard__name">{t.name}</div>
                <div className="testicard__title">{t.title}</div>
              </div>
            </div>
            <div className="testicard__body">
              <p>{t.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container testimonials__container">
        <div className="testimonials__header">
          <span className="section-badge testimonials__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            TESTIMONIAL
          </span>
          <h2 className="section-title testimonials__title">
            What our <span className="testimonials__title-orange">customers</span><br />are saying
          </h2>
        </div>
      </div>

      <div className="testimonials__marquee-wrapper">
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </div>
    </section>
  );
};

export default Testimonials;
