import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="grid footer-grid">
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-icon">
                <span className="icon-text">🧠</span>
              </div>
              <span className="brand-title">BrainScan AI</span>
            </div>
            <p className="brand-description">
              Advanced AI-powered brain tumor detection system designed to assist healthcare professionals 
              with accurate and rapid medical imaging analysis.
            </p>
            <div className="brand-copyright">
              © 2024 BrainScan AI. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Medical</h3>
            <ul className="footer-list">
              <li>Brain Tumor Detection</li>
              <li>MRI Analysis</li>
              <li>CT Scan Reading</li>
              <li>Medical Reports</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-list">
              <li>Documentation</li>
              <li>Medical Guidelines</li>
              <li>Contact Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            <strong>Medical Disclaimer:</strong> This AI tool is designed to assist healthcare professionals and should not be used as a substitute for professional medical diagnosis, treatment, or advice. Always consult qualified medical professionals for health-related decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
