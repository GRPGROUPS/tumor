import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageUpload from "./components/ImageUpload";
import AnalysisResults from "./components/AnalysisResults";
import Footer from "./components/Footer";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageAnalyzed = (result) => {
    setAnalysisResult(result);
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
    const uploadSection = document.getElementById('upload');
    uploadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageUpload onImageAnalyzed={handleImageAnalyzed} />
      
      {analysisResult && (
        <AnalysisResults result={analysisResult} onNewAnalysis={handleNewAnalysis} />
      )}

      <Footer className="mt-auto" />
    </div>
  );
};

export default Index;
