import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/LegalPages.css';

const CookieSettings: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container legal-page__content">
          <h1>Cookie Settings</h1>
          <p className="last-updated">Last updated: March 2026</p>

          <section>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. They allow us to recognize your device and store information about your preferences or past actions.
            </p>
          </section>

          <section>
            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Site to function properly. They enable core functionality such as security, network management, and accessibility.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our Site by collecting and reporting information anonymously.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies enable personalized features and remember your preferences to enhance your user experience.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track your across websites and display personalized advertisements based on your interests.
              </li>
            </ul>
          </section>

          <section>
            <h2>Your Cookie Choices</h2>
            <p>
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our Site.
            </p>
            <p>You can manage your cookie preferences using the following options:</p>
            <ul>
              <li>Adjust your browser's privacy settings</li>
              <li>Use our cookie preference center (if available)</li>
              <li>Opt-out of third-party tracking</li>
              <li>Clear your cookies from your browser settings</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Cookies</h2>
            <p>
              We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties have their own privacy policies and cookie practices.
            </p>
          </section>

          <section>
            <h2>Cookie Duration</h2>
            <p>
              Cookies may be either session-based (deleted when you close your browser) or persistent (stored on your device for a specified period or until you delete them).
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              You have the right to know what cookies are on your device and to control them. You can delete cookies at any time through your browser settings. Deleting cookies may affect your ability to use certain features of our Site.
            </p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Settings page to reflect changes in technology, legal requirements, or our practices. Please check back periodically for updates.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at privacy@axonara.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookieSettings;
