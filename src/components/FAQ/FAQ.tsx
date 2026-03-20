import React, { useRef, useState } from 'react';
import './FAQ.css';
import Button from '../Button/Button';

const faqs = [
  {
    question: 'What is Axonara?',
    answer: 'Axonara is a digital solutions company that designs and delivers custom AI automation systems, analytics platforms, ecommerce experiences, and full-stack applications for ambitious teams.',
  },
  {
    question: 'Can I integrate Axonara solutions with my existing tools?',
    answer: 'Absolutely. We start with a comprehensive audit of your existing tech stack and integrate seamlessly with your current platforms, APIs, and data sources.',
  },
  {
    question: 'Is Axonara suitable for small teams?',
    answer: 'Yes! Our services are designed for teams of any size. We offer flexible engagement models, from focused single projects to ongoing strategic partnerships.',
  },
  {
    question: 'Do you offer real-time collaboration and support?',
    answer: 'Yes. We provide dedicated support channels, regular strategy reviews, and collaborate closely with your team throughout design, build, and launch phases.',
  },
  {
    question: 'What happens after project launch?',
    answer: 'We offer post-launch optimization, performance monitoring, and strategic roadmap support to ensure your solution continues to scale with your business.',
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
            <h2 className="section-title">Frequently Asked <span className="faq__title-highlight">Questions</span></h2>
            <p className="section-subtitle">
              In this section, we address common queries about Axonara's service capabilities, integration options, and support to help you understand our approach.
            </p>
            <Button label="Contact Us" variant="primary" href="/contact" size="md" />
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
          <span className="cta-banner__badge">✺ CTA</span>
          <h2 className="cta-banner__title">Ready to Boost Your <span className="cta-banner__title-highlight">Business?</span></h2>
          <p className="cta-banner__subtitle">
            Empower your team with advanced tools to streamline workflows, nurture customer relationships, and drive sustainable business growth more efficiently today.
          </p>
          <Button label="Contact Us" variant="primary" href="/contact" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
