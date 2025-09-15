import { useState, useCallback } from "react";
import  {Button } from "../components/ui/button"  // Adjust the path as needed
import { Card, CardContent } from "../components/ui/Card"; // Adjust the path as needed
import { useToast } from "../components/ui/use-toast"; // Adjust the path as needed
import './ImageUpload.css';


const ImageUpload = ({ onImageAnalyzed }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, []);

  const handleFile = (file) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    setSelectedImage(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const simulateAnalysis = async () => {
    if (!selectedImage) return;

    setAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const mockResult = {
      tumorDetected: Math.random() > 0.5,
      confidence: Math.floor(Math.random() * 30) + 70,
      tumorType: ["Glioblastoma", "Meningioma", "Pituitary Adenoma"][Math.floor(Math.random() * 3)],
      recommendation: "Consult with a neurologist for further evaluation"
    };

    setAnalyzing(false);
    onImageAnalyzed?.(mockResult);

    toast({
      title: "Analysis Complete",
      description: "Your brain scan has been analyzed successfully."
    });
  };

  return (
    <section className="upload-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="header">
            <h2>Upload Your Brain Scan</h2>
            <p>Upload MRI, CT scan, or other brain imaging files for instant AI analysis</p>
          </div>

          <Card className="upload-card">
            <CardContent>
              <div
                className={`upload-area ${dragActive ? 'drag-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="file-input"
                />

                {previewUrl ? (
                  <div className="preview">
                    <img src={previewUrl} alt="Preview" />
                    <p>{selectedImage?.name}</p>
                  </div>
                ) : (
                  <div className="placeholder">
                    <div className="icon">📁</div>
                    <p>Drop your brain scan here, or click to browse</p>
                    <p>Supports: JPEG, PNG, DICOM, and other medical imaging formats</p>
                  </div>
                )}
              </div>

              {selectedImage && (
                <div className="action-buttons">
                  <Button
                    variant="medical"
                    size="lg"
                    onClick={simulateAnalysis}
                    disabled={analyzing}
                  >
                    {analyzing ? 'Analyzing...' : 'Analyze Scan'}
                  </Button>
                  <Button
                    variant="medicalOutline"
                    onClick={() => {
                      setSelectedImage(null);
                      setPreviewUrl(null);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
