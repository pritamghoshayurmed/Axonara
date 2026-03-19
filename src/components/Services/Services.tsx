import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    description: 'Empower your business with cutting-edge AI solutions and intelligent automation that streamlines operations, reduces manual effort, and drives unprecedented efficiency across your organization.',
    image: '/ai-automation.png',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & BI',
    description: 'Transform raw data into actionable insights with our robust data engineering and business intelligence solutions. We build scalable pipelines and intuitive dashboards for data-driven results.',
    image: '/data-engineering.png',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'From frontend to backend, we build scalable, high-performance web and mobile applications tailored to your specific business needs using the latest technology stacks.',
    image: '/fullstack.png',
  },
  {
    id: 'voice-ai',
    title: 'Voice AI Agents',
    description: 'Next-generation voice AI agents that provide human-like interactions and seamless customer support automation, enhancing your user engagement and reducing operational costs.',
    image: '/product_dashboard.webp', // Fallback
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Comprehensive e-commerce platforms designed to maximize conversions, provide premium shopping experiences, and scale with your growing business requirements.',
    image: '/single-card1.png', // Fallback
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Entrance animation
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            x: i % 2 === 0 ? -100 : 100,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
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
    <section className="services" id="about" ref={sectionRef}>
      <div className="container">
        <div className="services__header">
          <span className="section-badge">✦ Services</span>
          <h2 className="section-title">End-to-End Digital Solutions</h2>
          <p className="section-subtitle">
            Axonara provides comprehensive services tailored to push the boundaries of what's possible for your business.
          </p>
        </div>

        <div className="services__list">
          {serviceItems.map((service, i) => (
            <div
              key={service.id}
              className={`services__item ${i % 2 !== 0 ? 'services__item--reverse' : ''}`}
              ref={(el) => { cardsRef.current[i] = el; }}
            >
              <div className="services__item-content">
                <div className="services__item-number">0{i + 1}</div>
                <h3 className="services__item-title">{service.title}</h3>
                <p className="services__item-text">{service.description}</p>
                <div className="services__item-gradient-blob"></div>
              </div>
              <div className="services__item-image-wrapper">
                <div className="services__item-image-container">
                  <img src={service.image} alt={service.title} className="services__item-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
