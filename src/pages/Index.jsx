import { useState } from "react";
import Header from "../components/Header";        // Adjust the path as needed
import Hero from "../components/Hero";
import ImageUpload from "../components/ImageUpload";
import AnalysisResults from "../components/AnalysisResults";
import Footer from "./Footer";

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
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageUpload onImageAnalyzed={handleImageAnalyzed} />
      <AnalysisResults result={analysisResult} onNewAnalysis={handleNewAnalysis} />
      <Footer />
    </div>
  );
};

export default Index;
