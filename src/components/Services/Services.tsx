import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  {
    id: 'data-engineering',
    index: '01',
    tag: 'ANALYTICS',
    accent: 'cyan',
    title: 'BI Dashboard Engineering',
    description: 'Build executive-ready BI dashboards with trusted metrics, real-time KPI visibility, and decision-focused visual layers that make data instantly actionable.',
    image: '/bidashboard_services.svg',
  },
  {
    id: 'ecommerce',
    index: '02',
    tag: 'COMMERCE',
    accent: 'orange',
    title: 'E-Commerce Experience Platforms',
    description: 'Design conversion-first commerce journeys with fast storefronts, secure checkout flows, and scalable architecture built to support growth campaigns.',
    image: '/ecommerce.jpg',
  },
  {
    id: 'fullstack',
    index: '03',
    tag: 'ENGINEERING',
    accent: 'cyan',
    title: 'Full Stack Product Development',
    description: 'Ship production-grade web products across frontend, backend, API, and cloud deployment with a single engineering workflow focused on speed and reliability.',
    image: '/full-stack-development.jpg',
  },
  {
    id: 'ai-automation',
    index: '04',
    tag: 'AUTOMATION',
    accent: 'orange',
    title: 'AI and Automation',
    description: 'Integrate intelligent automation into daily operations using AI-driven workflows, agentic support flows, and custom copilots that reduce overhead at scale.',
    image: '/services_aiandautomation.jpg',
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          {
            y: 30,
            opacity: 0,
            filter: 'blur(6px)'
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 86%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
            rotateX: 10,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 84%',
              toggleActions: 'play none none none'
            }
          }
        );

        if (imageRef.current[i]) {
          gsap.fromTo(
            imageRef.current[i],
            { scale: 1.14, yPercent: -8 },
            {
              scale: 1,
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.3
              }
            }
          );

          gsap.to(imageRef.current[i], {
            y: i % 2 === 0 ? -8 : 8,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="about" ref={sectionRef}>
      <div className="container">
        <div className="services__header" ref={headerRef}>
          <span className="section-badge">PREMIUM SERVICES</span>
          <h2 className="section-title">Built to Look Sharp. Engineered to Scale.</h2>
          <p className="section-subtitle">
            We design high-impact digital systems that blend performance, polish, and business outcomes.
          </p>
        </div>

        <div className="services__list">
          {serviceItems.map((service, i) => (
            <div
              key={service.id}
              className={`services__item ${i % 2 !== 0 ? 'services__item--reverse' : ''}`}
              data-accent={service.accent}
              ref={(el) => { cardsRef.current[i] = el; }}
            >
              <div className="services__item-orb"></div>
              <div className="services__item-content">
                <div className="services__item-meta">
                  <span className="services__item-number">{service.index}</span>
                  <span className="services__item-tag">{service.tag}</span>
                </div>
                <h3 className="services__item-title">{service.title}</h3>
                <p className="services__item-text">{service.description}</p>
              </div>
              <div className="services__item-image-wrapper">
                <div className="services__item-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services__item-image"
                    ref={(el) => { imageRef.current[i] = el; }}
                  />
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
