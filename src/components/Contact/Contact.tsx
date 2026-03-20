import React, { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const budgetOptions = ['< $500', '$500 - $1k', '$1k - $5k', '$5k - $10k', 'More than $10k'];

const Contact: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[1]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <div className="contact-page__header">
          <h1>
            Let&apos;s Elevate Your Brand <span>Starting Today</span>
          </h1>
          <p>
            Connect with Axonara to explore strategic solutions that scale your business growth smarter and faster.
          </p>
        </div>

        <div className="contact-page__shell">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              Tell us what you are building. We will help you map out the smartest next steps.
            </p>

            <div className="contact-page__grid">
              <label>
                <span>First Name</span>
                <input type="text" name="firstName" placeholder="Your first name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="your@email.com" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Your phone number" required />
              </label>
              <label>
                <span>Organization</span>
                <input type="text" name="organization" placeholder="Your organization name" required />
              </label>
              <label className="contact-page__full">
                <span>Service Interested In</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="ai">AI and Automation</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="ecommerce">E-Commerce Solutions</option>
                  <option value="analytics">Data and BI Platforms</option>
                  <option value="voice">Voice AI Systems</option>
                </select>
              </label>
              <div className="contact-page__full">
                <span className="contact-page__budget-label">Project Budget</span>
                <div className="contact-page__budget-row">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`contact-page__budget-chip ${selectedBudget === option ? 'is-active' : ''}`}
                      onClick={() => setSelectedBudget(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <label className="contact-page__full">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Tell us about your goals, timeline, and desired outcomes..." required />
              </label>
              <div className="contact-page__full">
                <button type="submit" className="contact-page__submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          <div className="contact-page__meta">
            <div className="contact-page__meta-card">
              <h3>Address</h3>
              <p>123 Broadway, New York, NY, USA</p>
            </div>
            <div className="contact-page__meta-card">
              <h3>Email</h3>
              <p>contact@axonara.com</p>
              <p>hello@axonara.com</p>
            </div>
            <div className="contact-page__meta-card">
              <h3>Phone</h3>
              <p>+1 234 567 810</p>
              <p>+1 234 567 820</p>
            </div>
            <div className="contact-page__meta-card">
              <h3>Follow Us</h3>
              <div className="contact-page__socials" aria-label="Social links">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                  <FaXTwitter aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <FaYoutube aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
