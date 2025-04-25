import React from 'react';
import {
  Code,
  Server,
  Figma,
  BrainCircuit,
  Database,
  Globe,
  Paintbrush,
  Cpu,
  Radar,
  Terminal,
  Layers,
  Monitor,
  Plug,
  Brain,
  Camera,
  Mic,
  Atom,
  Flame,
  Puzzle,
  Smile,
  Search,
  LayoutDashboard,
  GitBranch,
  Github,
  TerminalSquare,
  Book,
  Lightbulb,
  LayoutGrid
} from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import SkillBar from '../SkillBar/SkillBar';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './SkillsSection.scss';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'C++', level: 80, icon: Code, color: '#3b82f6' },
        { name: 'Java', level: 75, icon: Code, color: '#f59e0b' },
        { name: 'JavaScript', level: 70, icon: Terminal, color: '#eab308' },
        { name: 'Python', level: 85, icon: Cpu, color: '#3b82f6' }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95, icon: Code, color: '#f97316' },
        { name: 'React', level: 85, icon: Monitor, color: '#06b6d4' }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, icon: Server, color: '#22c55e' },
        { name: 'API Integration', level: 75, icon: Plug, color: '#0ea5e9' }
      ]
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'Machine Learning', level: 80, icon: Brain, color: '#14b8a6' },
        { name: 'TensorFlow', level: 80, icon: Atom, color: '#f97316' },
        { name: 'PyTorch', level: 75, icon: Flame, color: '#ef4444' },
        { name: 'Scikit-learn', level: 75, icon: Puzzle, color: '#facc15' },
        { name: 'Haystack AI', level: 70, icon: Search, color: '#22d3ee' },
        { name: 'ComfyUI', level: 65, icon: LayoutDashboard, color: '#06b6d4' }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 85, icon: GitBranch, color: '#f43f5e' },
        { name: 'GitHub', level: 85, icon: Github, color: '#000' },
        { name: 'Linux', level: 80, icon: TerminalSquare, color: '#64748b' },
        { name: 'Google APIs', level: 75, icon: Globe, color: '#3b82f6' },
        { name: 'Docker', level: 80, icon: Atom, color: '#f97316' },
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'UI/UX Design', level: 85, icon: Figma, color: '#ec4899' },
        { name: 'Data Structures & Algorithms', level: 80, icon: Book, color: '#8b5cf6' },
        { name: 'Problem Solving', level: 80, icon: Lightbulb, color: '#eab308' },
        { name: 'Streamlit', level: 70, icon: LayoutGrid, color: '#f43f5e' }
      ]
    }
  ];
  

  return (
    <section id="skills" className="skills-section">
      <FadeInSection>
        <h2 id="skills-title">My Skills</h2>
        
        <div className="skills-doodle-wrapper">
          
          <div className="skill-categories">
            {skillCategories.map((category, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="skill-category">
                  <DoodleBorder className={`skill-category-border category-${index + 1}`}>
                    <div className="category-icon-wrapper">
                      <div className="category-icon">
                        {index === 0 ? <Code size={28} /> : 
                         index === 1 ? <Server size={28} /> : 
                         <Paintbrush size={28} />}
                      </div>
                    </div>
                    <h3 className="category-title">{category.name}</h3>
                    <div className="skill-category-divider">
                      <svg width="100%" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,5 Q40,0 80,5 T160,5 T240,5" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
                    </div>
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
          
        
          
          <div className="skill-connecting-lines">
            <svg className="connecting-line line-1" width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q75,0 140,50" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            <svg className="connecting-line line-2" width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q75,100 140,50" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </FadeInSection>
      
      <div className="skills-background-elements">
        <div className="notebook-line"></div>
        <div className="notebook-line"></div>
        <div className="notebook-line"></div>
        <div className="notebook-line"></div>
      </div>
    </section>
  );
};

export default SkillsSection;