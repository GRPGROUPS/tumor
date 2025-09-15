import { Button } from "@/components/ui/button";
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-icon">
              <span className="icon-text">🧠</span>
            </div>
            <span className="brand-title">BrainScan AI</span>
          </div>

          <nav className="header-nav">
            <button 
              onClick={() => scrollToSection('upload')}
              className="nav-button"
            >
              Upload
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-button"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-button"
            >
              Contact
            </button>
          </nav>

          <Button 
            variant="medical" 
            onClick={() => scrollToSection('upload')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
