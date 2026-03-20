import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button/Button';
import './Pricing.css';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Basic Plan',
    price: '$35',
    period: '/month',
    description: 'Perfect for small teams and startups.',
    features: [
      'Up to 5 team members',
      '5,000 contact records',
      'Email integration',
      'Basic reporting',
      'Mobile app access',
      '24/5 email support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro Plan',
    price: '$50',
    period: '/month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited team members',
      'Unlimited contact records',
      'All integrations included',
      'Advanced AI analytics',
      'Custom workflows',
      'Priority 24/7 support',
      'Custom onboarding',
    ],
    highlighted: true,
  },
];

const CheckIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="rgba(255,101,0,0.12)" />
    <path d="M5 8l2 2 4-4" stroke="#FF6500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pricing" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="pricing__header">
          <span className="section-badge">✦ Pricing</span>
          <h2 className="section-title">Our Flexible Pricing Plans</h2>
          <p className="section-subtitle">
            No hidden fees. Cancel anytime. Start free for 14 days.
          </p>
        </div>

        <div className="pricing__cards">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card ${plan.highlighted ? 'pricing__card--pro' : ''}`}
              ref={(el) => { cardsRef.current[i] = el; }}
            >
              {plan.highlighted && (
                <div className="pricing__badge">Most Popular</div>
              )}

              <div className="pricing__card-header">
                <h4 className="pricing__plan-name">{plan.name}</h4>
                <p className="pricing__plan-desc">{plan.description}</p>
                <div className="pricing__price">
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__period">{plan.period}</span>
                </div>
              </div>

              <div className="pricing__divider" />

              <ul className="pricing__features">
                {plan.features.map((feature, j) => (
                  <li key={j} className="pricing__feature-item">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing__cta">
                <Button
                  label="Get Started"
                  variant={plan.highlighted ? 'primary' : 'dark'}
                  size="lg"
                  href="/contact"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
