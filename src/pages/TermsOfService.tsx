import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/LegalPages.css';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container legal-page__content">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: March 2026</p>

          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the Axonara website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Axonara's Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modifying or copying the materials;</li>
              <li>Using the materials for any commercial purpose or for any public display;</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Site;</li>
              <li>Removing any copyright or other proprietary notations from the materials;</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              The materials on Axonara's Site are provided on an 'as is' basis. Axonara makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2>Limitations</h2>
            <p>
              In no event shall Axonara or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Axonara's Site, even if Axonara or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on Axonara's Site could include technical, typographical, or photographic errors. Axonara does not warrant that any of the materials on its Site are accurate, complete, or current. Axonara may make changes to the materials contained on its Site at any time without notice.
            </p>
          </section>

          <section>
            <h2>Links</h2>
            <p>
              Axonara has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Axonara of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2>Modifications</h2>
            <p>
              Axonara may revise these terms of service for its Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Axonara operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at legal@axonara.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
