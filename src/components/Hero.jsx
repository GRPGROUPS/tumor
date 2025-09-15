import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img 
          src={heroImage} 
          alt="Medical AI brain scanning technology"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-inner text-center">
          <span className="hero-badge">
            AI-Powered Medical Diagnosis
          </span>

          <h1 className="hero-title">
            Advanced <span className="highlight-text">Brain Tumor</span> Detection
          </h1>

          <p className="hero-description">
            Upload your brain scan images and get instant AI-powered analysis with professional-grade accuracy. 
            Our advanced neural networks detect tumors with precision to assist medical professionals.
          </p>

          <div className="hero-buttons">
            <Button variant="medical" size="lg" className="hero-button-primary">
              Start Analysis
            </Button>
            <Button variant="medicalOutline" size="lg" className="hero-button-secondary">
              Learn More
            </Button>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">AI</div>
              <h3>AI-Powered</h3>
              <p>Advanced neural networks trained on thousands of medical scans</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Get comprehensive analysis results within seconds</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Medical Grade</h3>
              <p>Professional accuracy designed for healthcare providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
