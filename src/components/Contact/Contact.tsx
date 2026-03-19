import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -40, filter: 'blur(8px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 48, y: 24, filter: 'blur(8px)' },
          {
            opacity: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__shell">
          <div className="contact__info" ref={leftRef}>
            <span className="section-badge"> CONTACT US</span>
            <h2 className="section-title">Let&apos;s Build Something Remarkable</h2>
            <p className="section-subtitle">
              Share your product vision, business goals, or current bottlenecks. We will respond with a strategic
              roadmap tailored for scale.
            </p>

            <div className="contact__highlights">
              <div className="contact__highlight">
                <span className="contact__dot" aria-hidden="true"></span>
                <span>Response within 24 business hours</span>
              </div>
              <div className="contact__highlight">
                <span className="contact__dot" aria-hidden="true"></span>
                <span>Strategy + execution, end-to-end delivery</span>
              </div>
              <div className="contact__highlight">
                <span className="contact__dot" aria-hidden="true"></span>
                <span>Expert teams in AI, BI, and Full Stack</span>
              </div>
            </div>
          </div>

          <form className="contact__form" ref={formRef}>
            <div className="contact__row">
              <label className="contact__field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Jane Anderson" required />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@company.com" required />
              </label>
            </div>

            <div className="contact__row">
              <label className="contact__field">
                <span>Company</span>
                <input type="text" name="company" placeholder="Your company name" />
              </label>
              <label className="contact__field">
                <span>Service</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="bi">BI Dashboard Engineering</option>
                  <option value="ecommerce">E-Commerce Platforms</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="ai">AI and Automation</option>
                </select>
              </label>
            </div>

            <label className="contact__field contact__field--full">
              <span>Project Details</span>
              <textarea name="message" rows={5} placeholder="Tell us about goals, timeline, and budget range..." required />
            </label>

            <button type="submit" className="contact__submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
