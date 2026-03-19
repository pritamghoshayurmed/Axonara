import React, { useRef, useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How long is the free trial?',
    answer: 'Your free trial lasts 14 days with full access to all Pro features. No credit card required to get started.',
  },
  {
    question: 'Can I import my existing data?',
    answer: 'Yes! Zyforia supports CSV imports and direct integrations with popular CRMs like HubSpot and Salesforce. Our migration wizard makes it seamless.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are SOC 2 Type II certified, use end-to-end encryption, and are fully GDPR compliant. Your data is yours, always.',
  },
  {
    question: 'How many users can I add?',
    answer: 'The Basic Plan includes up to 5 users. The Pro Plan comes with unlimited team members at no additional per-seat cost.',
  },
  {
    question: 'Do you offer custom enterprise pricing?',
    answer: 'Yes! For teams over 50 members or with custom requirements, contact our sales team for tailored pricing and dedicated support.',
  },
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void; index: number }> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span>{question}</span>
        <span className="faq__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className="faq__answer-wrapper"
        role="region"
        id={`faq-a-${index}`}
        aria-labelledby={`faq-q-${index}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 300}px` : '0px' }}
      >
        <div className="faq__answer">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__inner">
          {/* Left */}
          <div className="faq__left">
            <span className="section-badge">✦ FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Got questions? We've got answers. Can't find what you're looking for? Reach out to our team.
            </p>
            <a href="mailto:hello@zyforia.com" className="faq__contact-link">
              Contact Support →
            </a>
          </div>

          {/* Right */}
          <div className="faq__right">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Banner */}
      <div className="cta-banner" id="contact">
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__title">Ready to Boost Your Sales?</h2>
          <p className="cta-banner__subtitle">
            Join 10,000+ teams already growing with Zyforia. Start free, cancel anytime.
          </p>
          <div className="cta-banner__form">
            <input
              type="email"
              className="cta-banner__input"
              placeholder="Enter your work email"
              aria-label="Email address"
            />
            <button className="cta-banner__btn">
              Get Started Free
              <span className="cta-banner__btn-arrow">→</span>
            </button>
          </div>
          <p className="cta-banner__note">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
