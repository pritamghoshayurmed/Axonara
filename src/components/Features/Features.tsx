import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.set(card, { transformPerspective: 1000 });

        gsap.fromTo(
          card,
          {
            y: 56,
            opacity: 0,
            scale: 0.95,
            rotationX: 7,
            rotationY: i % 2 === 0 ? -4 : 4,
            filter: 'blur(6px)',
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 0.95,
            ease: 'power4.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        const innerItems = card.querySelectorAll('.features__card-top, .features__card-bottom, .features__card-top h3, .features__card-top p');
        gsap.fromTo(
          innerItems,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.14 + i * 0.08,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 84%',
              toggleActions: 'play none none none',
            },
          }
        );

        if (i === 0) {
          gsap.fromTo(
            card.querySelector('.automation-video-wrap'),
            { y: 18, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.72,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (i === 1) {
          gsap.fromTo(
            card.querySelectorAll('.bi-bar'),
            { scaleY: 0.2, transformOrigin: 'center bottom', opacity: 0.35 },
            {
              scaleY: 1,
              opacity: 0.95,
              duration: 0.6,
              stagger: 0.09,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

          gsap.fromTo(
            card.querySelectorAll('.bi-point'),
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.35,
              stagger: 0.08,
              ease: 'back.out(2)',
              delay: 0.2,
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (i === 2) {
          gsap.fromTo(
            card.querySelectorAll('.voice-wave span'),
            { scaleY: 0.3, transformOrigin: 'center bottom' },
            {
              scaleY: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

          const bubbles = card.querySelectorAll('.voice-bubble');
          gsap.fromTo(
            bubbles,
            (idx: number) => ({
              opacity: 0,
              x: idx % 2 === 0 ? -24 : 24,
              y: 8,
            }),
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.45,
              stagger: 0.32,
              ease: 'power3.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

        }

        if (i === 3) {
          gsap.fromTo(
            card.querySelectorAll('.commerce-suite__panel, .commerce-suite__kpi, .commerce-suite__sidebar, .commerce-suite__topbar'),
            { y: 20, opacity: 0, scale: 0.92 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

          gsap.fromTo(
            card.querySelectorAll('.commerce-suite__stage-fill, .commerce-suite__source-fill'),
            { scaleX: 0, transformOrigin: 'left center' },
            {
              scaleX: 1,
              duration: 0.65,
              stagger: 0.06,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

          gsap.fromTo(
            card.querySelectorAll('.commerce-suite__line-path, .commerce-suite__order-path'),
            { strokeDashoffset: 420, opacity: 0.25 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.16,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );

          gsap.fromTo(
            card.querySelectorAll('.commerce-suite__ring-progress'),
            { scale: 0.8, opacity: 0.25 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              stagger: 0.18,
              ease: 'back.out(1.8)',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="features__header">
          <span className="section-badge">✦ Features</span>
          <h2 className="section-title features__title">
            Built for Your Core<br />Digital Offerings
          </h2>
          <p className="section-subtitle">
            From AI automation to engineering delivery, these capabilities mirror
            how Axonara executes modern transformation projects.
          </p>
        </div>

        {/* Row 1: 2.5 : 1.5 ratio */}
        <div className="features__row features__row--1">
          {/* Card: AI and Automation (wide) */}
          <div
            className="features__card features__card--wide features__card--lead"
            ref={(el) => { cardsRef.current[0] = el; }}
          >
            <div className="features__card-top">
              <div className="features__card-icon" style={{ background: 'rgba(255,101,0,0.1)' }}>
                <img src="/feature-icon1.svg" alt="" />
              </div>
              <h3>AI and Automation</h3>
              <p>Automate repetitive workflows with intelligent orchestration, approvals, and always-on execution logic.</p>
            </div>
            <div className="features__card-bottom features__card-bottom--lead">
              <div className="automation-video-wrap" aria-hidden="true">
                <video
                  className="automation-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/nodes.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>

          {/* Card: Data Engineering and BI (narrow) */}
          <div
            className="features__card features__card--narrow features__card--integration"
            ref={(el) => { cardsRef.current[1] = el; }}
          >
            <div className="features__card-top">
              <div className="features__card-icon" style={{ background: 'rgba(68,213,204,0.1)' }}>
                <img src="/feature-icon2.svg" alt="" />
              </div>
              <h3>Data Engineering and BI</h3>
              <p>Build trusted pipelines and decision-grade dashboards that scale from source systems to executive reporting.</p>
            </div>
            <div className="features__card-bottom features__card-bottom--integration">
              <div className="bi-panel">
                <div className="bi-panel__top">
                  <span>BI Throughput</span>
                  <span className="bi-live">Live</span>
                </div>

                <div className="bi-chart">
                  <svg viewBox="0 0 320 180" aria-hidden="true">
                    <defs>
                      <linearGradient id="biFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(68,213,204,0.45)" />
                        <stop offset="100%" stopColor="rgba(68,213,204,0)" />
                      </linearGradient>
                    </defs>
                    {[20, 60, 100, 140].map((y) => (
                      <line key={y} x1="14" y1={y} x2="306" y2={y} className="bi-grid" />
                    ))}
                    {[52, 88, 64, 112, 96].map((h, idx) => (
                      <rect
                        key={idx}
                        className="bi-bar"
                        x={24 + idx * 56}
                        y={164 - h}
                        width="26"
                        height={h}
                        rx="7"
                      />
                    ))}
                    <path className="bi-area" d="M37 108 L93 86 L149 98 L205 72 L261 56 L261 164 L37 164 Z" fill="url(#biFill)" />
                    <polyline className="bi-line" points="37,108 93,86 149,98 205,72 261,56" />
                    {[[37,108],[93,86],[149,98],[205,72],[261,56]].map(([x, y], idx) => (
                      <circle key={idx} className="bi-point" cx={x} cy={y} r="4.5" />
                    ))}
                  </svg>
                </div>

                <div className="bi-metrics">
                  {[
                    { label: 'Freshness', value: '< 5 min' },
                    { label: 'Pipeline SLA', value: '99.95%' },
                  ].map((item) => (
                    <div key={item.label} className="bi-metric">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 1.5 : 2.5 ratio */}
        <div className="features__row features__row--2">
          {/* Card: Voice AI Agents (narrow) */}
          <div
            className="features__card features__card--narrow features__card--ai"
            ref={(el) => { cardsRef.current[2] = el; }}
          >
            <div className="features__card-top">
              <div className="features__card-icon" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <img src="/feature-icon3.svg" alt="" />
              </div>
              <h3>Voice AI Agents</h3>
              <p>Deploy natural, multilingual voice agents for customer support, lead qualification, and appointment routing.</p>
            </div>
            <div className="features__card-bottom features__card-bottom--ai">
              <div className="voice-console">
                <div className="voice-console__header">
                  <span className="ai-orb" aria-hidden="true" />
                  <p>Call Flow Active</p>
                  <small>Latency 210 ms</small>
                </div>

                <div className="voice-wave" aria-hidden="true">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} style={{ '--i': i } as React.CSSProperties} />
                  ))}
                </div>

                <div className="voice-transcript">
                  <div className="voice-bubble voice-bubble--assistant voice-bubble--1">
                    <span className="voice-text-reveal">Intent: Product Query. Confidence 97%.</span>
                  </div>
                  <div className="voice-bubble voice-bubble--user voice-bubble--2">
                    <span className="voice-text-reveal">Do you have enterprise plans available?</span>
                  </div>
                  <div className="voice-bubble voice-bubble--assistant voice-bubble--3">
                    <span className="voice-text-reveal">Yes! We have 3 enterprise tiers. Transferring details now.</span>
                  </div>
                  <div className="voice-bubble voice-bubble--user voice-bubble--4">
                    <span className="voice-text-reveal">What's included in the premium tier?</span>
                  </div>
                  <div className="voice-bubble voice-bubble--assistant voice-bubble--5">
                    <span className="voice-text-reveal">24/7 support, custom integrations, and dedicated account manager.</span>
                  </div>
                  <div className="voice-bubble voice-bubble--user voice-bubble--6">
                    <span className="voice-text-reveal">Can I speak to someone about pricing?</span>
                  </div>
                  <div className="voice-bubble voice-bubble--assistant voice-bubble--7">
                    <span className="voice-text-reveal">Connecting you to our sales team now.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Full Stack and E-Commerce (wide) */}
          <div
            className="features__card features__card--wide features__card--analytics"
            ref={(el) => { cardsRef.current[3] = el; }}
          >
            <div className="features__card-top">
              <div className="features__card-icon" style={{ background: 'rgba(236,72,153,0.1)' }}>
                <img src="/feature-icon4.svg" alt="" />
              </div>
              <h3>Full Stack and E-Commerce Delivery</h3>
              <p>Ship robust apps and commerce platforms with performance-first architecture, secure APIs, and conversion-focused UX.</p>
            </div>
            <div className="features__card-bottom features__card-bottom--analytics">
              <div className="commerce-suite" aria-hidden="true">
                <div className="commerce-suite__shell">
                  <aside className="commerce-suite__sidebar">
                    <div className="commerce-suite__brand">
                     
                      <strong>Axon Commerce</strong>
                    </div>
                    <div className="commerce-suite__nav">
                      {['Dashboard', 'Orders', 'Products', 'Customers', 'Reports'].map((item, idx) => (
                        <span key={item} className={idx === 0 ? 'is-active' : ''}>{item}</span>
                      ))}
                    </div>
                  </aside>

                  <div className="commerce-suite__main">
                    <div className="commerce-suite__topbar">
                      <h4>Dashboard</h4>
                      <div className="commerce-suite__search">Search stock, order, etc</div>
                      <div className="commerce-suite__user">MG</div>
                    </div>

                    <div className="commerce-suite__kpis">
                      <div className="commerce-suite__kpi commerce-suite__kpi--highlight">
                        <span>Total Sales</span>
                        <strong>$983,410</strong>
                        <small>+3.34% vs last week</small>
                      </div>
                      <div className="commerce-suite__kpi">
                        <span>Total Orders</span>
                        <strong>58,375</strong>
                        <small>-2.89% vs last week</small>
                      </div>
                      <div className="commerce-suite__kpi">
                        <span>Total Visitors</span>
                        <strong>237,782</strong>
                        <small>+8.02% vs last week</small>
                      </div>
                    </div>

                    <div className="commerce-suite__grid">
                      <div className="commerce-suite__panel commerce-suite__panel--analytics">
                        <div className="commerce-suite__panel-head">
                          <p>Revenue Analytics</p>
                          <small>Last 8 Days</small>
                        </div>
                        <svg viewBox="0 0 520 190" className="commerce-suite__line-chart">
                          {[32, 70, 108, 146].map((y) => (
                            <line key={y} x1="16" y1={y} x2="504" y2={y} className="commerce-suite__chart-grid" />
                          ))}
                          <path className="commerce-suite__line-path" d="M26 124 C 86 88, 126 118, 182 84 C 242 58, 306 106, 364 74 C 422 44, 458 80, 496 68" />
                          <path className="commerce-suite__order-path" d="M26 146 C 74 166, 124 116, 182 136 C 242 154, 304 102, 364 128 C 414 146, 458 128, 496 142" />
                        </svg>
                      </div>

                      <div className="commerce-suite__panel commerce-suite__panel--target">
                        <div className="commerce-suite__panel-head">
                          <p>Monthly Target</p>
                          <small>85%</small>
                        </div>
                        <div className="commerce-suite__ring">
                          <div className="commerce-suite__ring-progress" />
                          <div className="commerce-suite__ring-value">85%</div>
                        </div>
                        <p className="commerce-suite__target-note">Great progress. Revenue pacing above expected trajectory.</p>
                      </div>

                      <div className="commerce-suite__panel commerce-suite__panel--conversion">
                        <div className="commerce-suite__panel-head">
                          <p>Conversion Rate</p>
                          <small>This Week</small>
                        </div>
                        {[
                          { label: 'Product Views', value: 25000, pct: 100 },
                          { label: 'Add to Cart', value: 12000, pct: 48 },
                          { label: 'Checkout', value: 8500, pct: 34 },
                          { label: 'Purchases', value: 6200, pct: 25 },
                        ].map((item) => (
                          <div key={item.label} className="commerce-suite__stage">
                            <div className="commerce-suite__stage-labels">
                              <span>{item.label}</span>
                              <strong>{item.value.toLocaleString()}</strong>
                            </div>
                            <div className="commerce-suite__stage-track">
                              <span className="commerce-suite__stage-fill" style={{ width: `${item.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="commerce-suite__panel commerce-suite__panel--sources">
                        <div className="commerce-suite__panel-head">
                          <p>Traffic Sources</p>
                          <small>Mix</small>
                        </div>
                        {[
                          { label: 'Direct Traffic', value: 40 },
                          { label: 'Organic Search', value: 30 },
                          { label: 'Social Media', value: 15 },
                          { label: 'Referral Traffic', value: 10 },
                          { label: 'Email Campaigns', value: 5 },
                        ].map((item) => (
                          <div key={item.label} className="commerce-suite__source">
                            <span>{item.label}</span>
                            <div className="commerce-suite__source-track">
                              <span className="commerce-suite__source-fill" style={{ width: `${item.value}%` }} />
                            </div>
                            <strong>{item.value}%</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
