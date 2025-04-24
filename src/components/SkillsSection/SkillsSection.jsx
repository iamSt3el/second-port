import React from 'react';
import { Code, Server, Figma, BrainCircuit, Database, Globe } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import SkillBar from '../SkillBar/SkillBar';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './SkillsSection.scss';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95, icon: Code, color: '#f97316' },
        { name: 'JavaScript', level: 90, icon: Code, color: '#eab308' },
        { name: 'React', level: 85, icon: Code, color: '#06b6d4' }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, icon: Server, color: '#22c55e' },
        { name: 'Python', level: 75, icon: Server, color: '#3b82f6' },
        { name: 'SQL', level: 70, icon: Database, color: '#8b5cf6' }
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'UI/UX Design', level: 85, icon: Figma, color: '#ec4899' },
        { name: 'Machine Learning', level: 65, icon: BrainCircuit, color: '#14b8a6' },
        { name: 'SEO', level: 75, icon: Globe, color: '#6366f1' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <FadeInSection>
        <h2 id="skills-title">My Skills</h2>
        
        <div className="skills-doodle-wrapper">
          <div className="doodle-circles">
            <div className="doodle-circle"></div>
            <div className="doodle-circle"></div>
            <div className="doodle-circle"></div>
          </div>
          
          <div className="skill-categories">
            {skillCategories.map((category, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="skill-category">
                  <DoodleBorder className="skill-category-border">
                    <h3 className="category-title">{category.name}</h3>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skillIndex}
                          name={skill.name}
                          level={skill.level}
                          icon={skill.icon}
                          color={skill.color}
                        />
                      ))}
                    </div>
                  </DoodleBorder>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <div className="skill-doodles">
            <div className="floating-icon icon-1">
              <Code size={36} />
            </div>
            <div className="floating-icon icon-2">
              <Server size={28} />
            </div>
            <div className="floating-icon icon-3">
              <BrainCircuit size={32} />
            </div>
            <div className="floating-icon icon-4">
              <Database size={24} />
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsSection;