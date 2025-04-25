import React from 'react';
import { BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './EducationSection.scss';

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology",
      description: "Pursuing a degree in Computer Science and Engineering.",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2021 - Present",
    },
    {
      degree: "12 th Grade",
      institution: "Matrix Hight School",
      location: "Sikar, Rajasthan",
      period: "2020 - 2021",
    },
    {
      degree: "10 th Grade",
      institution: "Hind Academy School",
      location: "Chirawa, Rajasthan",
      period: "2018 - 2019"
    }
  ];

  return (
    <section id="education" className="education-section">
      <FadeInSection>
        <h2 id="education-title">Education</h2>
        
        <div className="education-items">
          {educationItems.map((item, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="education-item">
                <DoodleBorder className="education-card">
                  <div className="education-icon">
                    <GraduationCap size={32} />
                  </div>
                  
                  <h3 className="education-degree">{item.degree}</h3>
                  
                  <div className="education-details">
                    <div className="education-detail">
                      <BookOpen size={18} />
                      <span>{item.institution}</span>
                    </div>
                    
                    <div className="education-detail">
                      <MapPin size={18} />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="education-detail">
                      <Calendar size={18} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="education-description">{item.description}</p>
                  
                  {item.courses && (
                    <div className="education-courses">
                      <h4>Key Courses:</h4>
                      <div className="course-tags">
                        {item.courses.map((course, i) => (
                          <span key={i} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.achievements && (
                    <div className="education-achievements">
                      <h4>Achievements:</h4>
                      <ul className="achievement-list">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="doodle-decoration top-right"></div>
                  <div className="doodle-decoration bottom-left"></div>
                </DoodleBorder>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        <div className="education-background-elements">
          <div className="doodle-element element-1"></div>
          <div className="doodle-element element-2"></div>
          <div className="doodle-element element-3"></div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default EducationSection;