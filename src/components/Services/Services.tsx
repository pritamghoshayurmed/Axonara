import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Services.css';

type ServiceTab = {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  listItems: string[];
  callout: string;
  image: string;
  imageAlt: string;
  theme: 'cyan' | 'orange' | 'blend';
};

const serviceTabs: ServiceTab[] = [
  {
    id: 'analytics',
    title: 'Analytics',
    subtitle: 'Insights in real time',
    heading: 'Create Executive Analytics Systems That Move Decisions Faster',
    description:
      'Turn fragmented reporting into a high-confidence decision engine with dashboard architecture, KPI governance, and visual storytelling tuned for leadership teams.',
    listItems: [
      '5x faster reporting cycles for leadership teams',
      'Unified KPI layer across product, sales, and ops',
      'Higher confidence decisions with clearer metrics',
    ],
    callout: 'Launch faster. Engage smarter. Market with AI.',
    image: '/bidashboard_services.svg',
    imageAlt: 'Analytics dashboard design and KPI visualization',
    theme: 'cyan',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    subtitle: 'Conversion-led storefronts',
    heading: 'Build Premium Ecommerce Journeys That Convert at Every Step',
    description:
      'From discovery to checkout, we design high-performance commerce platforms engineered for speed, trust, and measurable revenue growth.',
    listItems: [
      'Seamless checkout experiences built for trust',
      'Stronger conversion rates through UX precision',
      'Scalable storefront architecture for growth campaigns',
    ],
    callout: 'Sell with clarity. Scale with confidence. Grow without friction.',
    image: '/ecommerce.jpg',
    imageAlt: 'Ecommerce product browsing and purchase experience',
    theme: 'orange',
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    subtitle: 'Product-grade engineering',
    heading: 'Ship Full Stack Products With Craft, Speed, and Reliability',
    description:
      'We handle frontend, backend, APIs, and cloud delivery as one system so your product moves from roadmap to production without bottlenecks.',
    listItems: [
      'Unified architecture across frontend and backend',
      'Reliable release cadence with production-grade quality',
      'Performance-focused engineering from day one',
    ],
    callout: 'Design once. Build cleanly. Scale endlessly.',
    image: '/full-stack-development.jpg',
    imageAlt: 'Engineering team collaborating on full stack product development',
    theme: 'cyan',
  },
  {
    id: 'automation',
    title: 'Automation',
    subtitle: 'AI workflows at scale',
    heading: 'Deploy AI and Automation Flows That Multiply Team Output',
    description:
      'Eliminate repetitive operations using practical AI systems, custom copilots, and automation journeys that reduce overhead and improve execution quality.',
    listItems: [
      'Lower operational cost through intelligent workflows',
      'Faster execution with custom internal copilots',
      'More time for strategic work across every team',
    ],
    callout: 'Automate the repetitive. Elevate the strategic.',
    image: '/services_aiandautomation.jpg',
    imageAlt: 'AI automation workflows and intelligent operations',
    theme: 'blend',
  },
];

const TabIcon: React.FC<{ tabId: string }> = ({ tabId }) => {
  if (tabId === 'analytics') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16" />
        <path d="M7 15V8" />
        <path d="M12 15V5" />
        <path d="M17 15v-4" />
      </svg>
    );
  }

  if (tabId === 'ecommerce') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="19" r="1.6" />
        <circle cx="17" cy="19" r="1.6" />
        <path d="M3 5h2l2.1 10h10.9l2-7H7.6" />
      </svg>
    );
  }

  if (tabId === 'fullstack') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="2" />
        <rect x="4" y="14" width="16" height="6" rx="2" />
        <path d="M12 10v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13l3 3 11-11" />
      <path d="M12 3v5" />
      <path d="M21 12h-5" />
    </svg>
  );
};

const ListIcon: React.FC<{ index: number }> = ({ index }) => {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19l8-8" />
        <path d="M10 5h9v9" />
        <path d="M4 14l6 6" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16" />
        <path d="M7 14v-3" />
        <path d="M12 14V8" />
        <path d="M17 14V6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M18 9l-6-6-6 6" />
      <path d="M18 15l-6 6-6-6" />
    </svg>
  );
};

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);

  const activeService = useMemo(
    () => serviceTabs.find((tab) => tab.id === activeTab) ?? serviceTabs[0],
    [activeTab]
  );

  return (
    <section className="services" id="about">
      <div className="container">
        <div className="services__header">
          <span className="section-badge">PREMIUM SERVICES</span>
          <h2 className="section-title">Perfect for Every Ambitious Digital Team</h2>
          <p className="section-subtitle">
            Select a capability and explore how we combine design craft, engineering depth, and measurable business outcomes.
          </p>
        </div>

        <div className="services__tabs" role="tablist" aria-label="Service categories">
          {serviceTabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                className={`services__tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                data-theme={tab.theme}
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${tab.id}`}
                id={`service-tab-${tab.id}`}
              >
                <span className="services__tab-icon" aria-hidden="true">
                  <TabIcon tabId={tab.id} />
                </span>
                <span className="services__tab-content">
                  <span className="services__tab-title">{tab.title}</span>
                  <span className="services__tab-subtitle">{tab.subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            className="services__panel"
            id={`service-panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeService.id}`}
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            data-theme={activeService.theme}
          >
            <div className="services__panel-layer"></div>
            <div className="services__panel-left">
              <h3 className="services__panel-heading">{activeService.heading}</h3>
              <p className="services__panel-description">{activeService.description}</p>

              <ul className="services__panel-list" aria-label="Service benefits">
                {activeService.listItems.map((item, index) => (
                  <li key={item}>
                    <span className="services__panel-list-icon" aria-hidden="true">
                      <ListIcon index={index} />
                    </span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>

              <div className="services__panel-callout">{activeService.callout}</div>

              <button className="services__panel-cta" type="button">
                Free Credits
              </button>
            </div>

            <motion.div
              className="services__panel-right"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={activeService.image}
                alt={activeService.imageAlt}
                className="services__panel-image"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
