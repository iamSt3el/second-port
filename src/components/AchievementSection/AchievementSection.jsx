import React, { useState } from 'react';
import { Trophy, Calendar, Eye, X, ExternalLink } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import DoodleButton from '../DoodleButton/DoodleButton';
import './AchievementSection.scss';

import cipherThone from '../../assets/image copy.png';
import innotek from '../../assets/image copy 2.png';
import leetcode from '../../assets/image copy 3.png';

const AchievementSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const achievements = [
    {
      title: "CipherThone 2nd Runner Up",
      issuer: "CipherSchools",
      date: "2023-2024",
      description: "Participated in a national-level hackathon and secured the 2nd runner-up position for developing a legal chatbot.",
      imageUrl: cipherThone
    },
    {
      title: "Innotek showcase",
      issuer: "Lovely Professional University",
      date: "2024",
      description: "Showcase legal chatbot project at Innotek 2024, a tech fest organized by Lovely Professional University. Demonstrated the capabilities of the chatbot to a diverse audience.",
      imageUrl: innotek
    },
    {
      title: "140 + leetcode problems solved",
      issuer: "LeetCode",
      date: "2023 - Current",
      description: "Achieved a milestone of solving over 140 problems on LeetCode, showcasing proficiency in data structures and algorithms.",
      imageUrl: leetcode
    }
  ];

  const handleShowImage = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  return (
    <section id="achievements" className="achievement-section">
      <FadeInSection>
        <h2 id="achievements-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="achievement-card">
                <div className="achievement-image">
                  <img src={achievement.imageUrl} alt={achievement.title} />
                  <div className="achievement-badge">
                    <Trophy size={24} />
                  </div>
                </div>
                
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h3>{achievement.title}</h3>
                    <span className="achievement-date">
                      <Calendar size={14} />
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="achievement-issuer">{achievement.issuer}</p>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  <div className="achievement-actions">
                    
                    
                    {achievement.credentialUrl && (
                      <a 
                        href={achievement.credentialUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verify-link"
                      >
                        <ExternalLink size={16} />
                        <span>Verify</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        {activeImage && (
          <div className="achievement-modal">
            <div className="achievement-modal-content">
              <button 
                className="close-modal-btn"
                onClick={handleCloseImage}
                aria-label="Close achievement modal"
              >
                <X size={24} />
              </button>
              <img src={activeImage} alt="Achievement" />
            </div>
            <div className="achievement-modal-overlay" onClick={handleCloseImage}></div>
          </div>
        )}
        
        <div className="achievement-background-elements">
          <div className="doodle-star star-1"></div>
          <div className="doodle-star star-2"></div>
          <div className="doodle-star star-3"></div>
          <div className="doodle-confetti confetti-1"></div>
          <div className="doodle-confetti confetti-2"></div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default AchievementSection;