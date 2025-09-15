import React from "react";
import './AnalysisResults.css';

const AnalysisResults = ({ result, onNewAnalysis }) => {
  if (!result) return null; // Avoid rendering if no result

  return (
    <section className="analysis-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center">Analysis Results</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <div className="card-header">
                Detection Result
                <span className="badge">
                  {result.tumorDetected ? "Tumor Detected" : "No Tumor Detected"}
                </span>
              </div>
              <div className="card-content">
                <div className="confidence-bar">
                  <div
                    className="confidence-progress"
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">Medical Recommendation</div>
              <div className="card-content">{result.recommendation}</div>
            </div>
          </div>

          <div className="card analysis-details">
            <div className="analysis-detail">AI Model: ResNet-50 Enhanced</div>
            <div className="analysis-detail">Training Data: 50,000+ Scans</div>
            <div className="analysis-detail">Accuracy: 95.7%</div>
          </div>

          <div className="text-center mt-8">
            <button className="button-medical" onClick={onNewAnalysis}>
              Analyze Another Scan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisResults;
