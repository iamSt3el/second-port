import React from 'react';
import { BookOpen, Calendar, GraduationCap, MapPin, Award, School } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './EducationSection.scss';

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      description: "Pursuing a degree in Computer Science and Engineering with focus on AI/ML and web development.",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2022 - Present",
      iconBg: "#93c5fd", // blue-300
    },
    {
      degree: "12th Grade",
      field: "Science & Mathematics",
      description: "Completed higher secondary education with focus on Physics, Chemistry, Mathematics and Computer Science.",
      institution: "Matrix High School",
      location: "Sikar, Rajasthan",
      period: "2020 - 2021",
      iconBg: "#fde047", // yellow-300
    },
    {
      degree: "10th Grade",
      field: "Science & Mathematics",
      description: "Completed secondary education with excellent academic performance.",
      institution: "Hind Academy School",
      location: "Chirawa, Rajasthan",
      period: "2018 - 2019",
      iconBg: "#f9a8d4", // pink-300
    }
  ];

  return (
    <section id="education" className="education-section">
      <FadeInSection>
        <h2 id="education-title">Education</h2>
        
        <div className="education-timeline">
          <div className="timeline-line"></div>
          
          {educationItems.map((item, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" style={{ backgroundColor: item.iconBg }}></div>
                <DoodleBorder className="education-card">
                  <div className="education-icon" style={{ backgroundColor: item.iconBg }}>
                    {index === 0 ? <GraduationCap size={32} /> : <School size={32} />}
                  </div>
                  
                  <h3 className="education-degree">{item.degree}</h3>
                  {item.field && <p className="education-field">{item.field}</p>}
                  
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
                  
                  <div className="education-decoration">
                    <div className="decoration-element element-1"></div>
                    <div className="decoration-element element-2"></div>
                  </div>
                  
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