import React, { useState } from 'react';
import { Award, Calendar, X, ExternalLink } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import DoodleButton from '../DoodleButton/DoodleButton';
import './CertificateSection.scss';
import firstProject from '../../assets/screenshot_20042025_183121.jpg';
import secondProject from '../../assets/screenshot_20042025_183317.jpg';

const CertificateSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const certificates = [
    {
      title: "Understanding of Cloud Fundamentals",
      issuer: "Corsera",
      date: "February 2023",
      description: "Fundamentals of cloud computing, including cloud service models, deployment models, and security considerations.",
      imageUrl: firstProject,
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "CipherSchools",
      date: "November 2023",
      description: "In-depth understanding of data structures and algorithms, including arrays, linked lists, trees, and sorting algorithms.",
      imageUrl: secondProject,
    }
  ];

  const handleShowImage = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  return (
    <section id="certificates" className="certificate-section">
      <FadeInSection>
        <h2 id="certificates-title">Certificates</h2>
        
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="certificate-card">
                <DoodleBorder>
                  <div className="certificate-icon">
                    <Award size={32} />
                  </div>
                  
                  <h3 className="certificate-title">{certificate.title}</h3>
                  
                  <div className="certificate-meta">
                    <div className="certificate-issuer">{certificate.issuer}</div>
                    <div className="certificate-date">
                      <Calendar size={16} />
                      <span>{certificate.date}</span>
                    </div>
                  </div>
                  
                  <p className="certificate-description">{certificate.description}</p>
                  
                  <div className="certificate-actions">
                    <DoodleButton 
                      className="view-certificate-btn"
                      onClick={() => handleShowImage(certificate.imageUrl)}
                    >
                      View Certificate
                    </DoodleButton>
                    
                    {certificate.credentialUrl && (
                      <a 
                        href={certificate.credentialUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verify-link"
                      >
                        <ExternalLink size={16} />
                        <span>Verify</span>
                      </a>
                    )}
                  </div>
                </DoodleBorder>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        {activeImage && (
          <div className="certificate-modal">
            <div className="certificate-modal-content">
              <button 
                className="close-modal-btn"
                onClick={handleCloseImage}
                aria-label="Close certificate modal"
              >
                <X size={24} />
              </button>
              <img src={activeImage} alt="Certificate" />
            </div>
            <div className="certificate-modal-overlay" onClick={handleCloseImage}></div>
          </div>
        )}
        
        <div className="certificate-decorations">
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default CertificateSection;