import React, { useState } from 'react';
import { Trophy, Calendar, Eye, X } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import DoodleButton from '../DoodleButton/DoodleButton';
import './AchievementSection.scss';

const AchievementSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const achievements = [
    {
      title: "Dean's List",
      issuer: "University of Technology",
      date: "2023-2024",
      description: "Recognized for outstanding academic achievement with GPA above 3.8 for three consecutive semesters.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Hackathon Winner",
      issuer: "TechCrunch Disrupt",
      date: "May 2023",
      description: "First place in the annual coding competition for developing an innovative solution for elderly care.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Research Publication",
      issuer: "International Journal of Computer Science",
      date: "January 2024",
      description: "Co-authored a paper on efficient algorithms for natural language processing in resource-constrained environments.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Leadership Award",
      issuer: "Student Government Association",
      date: "December 2023",
      description: "Recognized for exceptional leadership as president of the Computer Science Club, organizing workshops and mentoring sessions.",
      imageUrl: "/api/placeholder/800/600"
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
              <div className="achievement-item">
                <DoodleBorder isAchievement={true}>
                  <div className="achievement-header">
                    <h3>{achievement.title}</h3>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                  <p className="achievement-issuer">{achievement.issuer}</p>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  <DoodleButton 
                    className="view-achievement-btn"
                    onClick={() => handleShowImage(achievement.imageUrl)}
                  >
                    <Eye size={16} />
                    <span>View Achievement</span>
                  </DoodleButton>
                  
                  <div className="trophy-decoration">
                    <Trophy size={40} />
                  </div>
                </DoodleBorder>
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