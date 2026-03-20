import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/LegalPages.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container legal-page__content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: March 2026</p>

          <section>
            <h2>Introduction</h2>
            <p>
              At Axonara, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other information you provide when contacting us.</li>
              <li><strong>Automatic Data:</strong> Information about your device, browser type, IP address, and pages visited.</li>
              <li><strong>Cookies:</strong> Information stored on your device to enhance your experience.</li>
            </ul>
          </section>

          <section>
            <h2>Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Generate a personal profile about you so that future visits to the Site are personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve user experience.</li>
              <li>Respond to your inquiries and fulfill your requests.</li>
              <li>Send you marketing and promotional communications.</li>
            </ul>
          </section>

          <section>
            <h2>Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> When required by law or when we have a good faith belief that disclosure is necessary.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share information with vendors and contractors who perform services on our behalf.</li>
              <li><strong>Business Transfers:</strong> We may transfer information in connection with a merger, sale, or acquisition of all or part of our business.</li>
            </ul>
          </section>

          <section>
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at privacy@axonara.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
