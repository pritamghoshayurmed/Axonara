import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button/Button';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const dashboardImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          h1Ref.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          btnRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          dashboardRef.current,
          { y: 60, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
          '-=0.3'
        );

      // Parallax on scroll
      gsap.to(dashboardImgRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Ambient Texture */}
      <img
        src="/hero-border-shape.png"
        alt=""
        className="hero__border-shape"
        aria-hidden="true"
      />

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge" ref={badgeRef}>
          <span className="hero__badge-pill">Services</span>
          Solutions for the Digital Age
        </div>

        {/* Headline */}
        <h1 className="hero__title" ref={h1Ref}>
          Engineering <span className="hero__title-orange">Intelligence</span>
          <br />
          Scaling Possibility
        </h1>

        {/* Subtext */}
        <p className="hero__subtext" ref={subtextRef}>
          We provide end-to-end solutions for AI, Automation, Data Engineering, Full Stack Development, Voice AI, and E-Commerce.
        </p>

        {/* CTA Button */}
        <div className="hero__btn" ref={btnRef}>
          <div className="hero__btn-wrapper">
            <Button label="Explore Services" variant="primary" size="lg" href="#about" />
          </div>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="hero__dashboard-wrapper" ref={dashboardRef}>
        <img
          src="/hero-shape.webp"
          alt=""
          className="hero__shape-blob"
          aria-hidden="true"
        />
        <img
          ref={dashboardImgRef}
          src="/product_dashboard.webp"
          alt="Axonara Professional Solutions"
          className="hero__dashboard-img"
        />
      </div>
    </section>
  );
};

export default Hero;
