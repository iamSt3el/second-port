import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Download, Menu, X } from 'lucide-react';

// Import components
import DoodleBorder from '../../components/DoodleBorder/DoodleBorder';
import DoodleButton from '../../components/DoodleButton/DoodleButton';
import NavItem from '../../components/NavItem/NavItem';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ContactSection from '../../components/ContactSection/ContactSection';

import ProfileImage from '../../assets/image.jpeg';

// Import styles
import './StudentPortfolio.scss';

const StudentPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [animateDoodle, setAnimateDoodle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger doodle animation when component mounts
    setAnimateDoodle(true);
    
    // Setup section highlighting based on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const achievementsSection = document.getElementById('achievements');
      const contactSection = document.getElementById('contact');
      
      if (aboutSection && scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight) {
        setActiveSection('about');
      } else if (skillsSection && scrollPosition < skillsSection.offsetTop + skillsSection.offsetHeight) {
        setActiveSection('skills');
      } else if (projectsSection && scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight) {
        setActiveSection('projects');
      } else if (achievementsSection && scrollPosition < achievementsSection.offsetTop + achievementsSection.offsetHeight) {
        setActiveSection('achievements');
      } else if (contactSection) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Machine Learning Classifier",
      description: "Built a machine learning model to classify images of handwritten digits with 98% accuracy.",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "Personal Finance App",
      description: "Developed a mobile app to help students track expenses and save money with budget recommendations.",
      tags: ["React Native", "Firebase", "UI/UX"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "Climate Change Dashboard",
      description: "Created an interactive visualization of climate data to raise awareness about environmental issues.",
      tags: ["D3.js", "JavaScript", "Data Visualization"],
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      issuer: "University of Technology",
      date: "2023-2024",
      description: "Recognized for outstanding academic achievement with GPA above 3.8 for three consecutive semesters."
    },
    {
      title: "Hackathon Winner",
      issuer: "TechCrunch Disrupt",
      date: "May 2023",
      description: "First place in the annual coding competition for developing an innovative solution for elderly care."
    },
    {
      title: "Research Publication",
      issuer: "International Journal of Computer Science",
      date: "January 2024",
      description: "Co-authored a paper on efficient algorithms for natural language processing in resource-constrained environments."
    },
    {
      title: "Leadership Award",
      issuer: "Student Government Association",
      date: "December 2023",
      description: "Recognized for exceptional leadership as president of the Computer Science Club, organizing workshops and mentoring sessions."
    }
  ];

  return (
    <div className="student-portfolio">
      {/* Animated Doodles */}
      <div className={`animated-doodles ${animateDoodle ? 'animate' : ''}`} />

      {/* Header / Navigation */}
      <header>
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-bg"></div>
              <div className="logo-text">JS</div>
            </div>
            <h1>Jane Student</h1>
          </div>
          
          {/* Mobile menu toggle */}
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="bar"></div>
          </button>
          
          <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
            <NavItem active={activeSection === 'about'} onClick={() => scrollToSection('about')}>
              About Me
            </NavItem>
            <NavItem active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>
              Skills
            </NavItem>
            <NavItem active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>
              Projects
            </NavItem>
            <NavItem active={activeSection === 'achievements'} onClick={() => scrollToSection('achievements')}>
              Achievements
            </NavItem>
            <NavItem active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>
              Contact
            </NavItem>
          </nav>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about">
          <FadeInSection>
            <div className="about-section">
              <div>
                <h2 id="about-title">About Me</h2>
                <DoodleBorder>
                  <p className="text-lg mb-4">
                    Hello! I'm Jane, a Computer Science student passionate about solving real-world problems through technology. 
                    I specialize in web development, machine learning, and creative coding.
                  </p>
                  <p className="text-lg mb-4">
                    Currently pursuing my Bachelor's degree at the University of Technology, I'm constantly exploring the 
                    intersection of technology and human experience. When not coding, you can find me sketching, 
                    hiking, or volunteering at local tech workshops.
                  </p>
                  <p className="text-lg mb-6">
                    I believe in creating technology that makes a positive impact on society and am looking for 
                    opportunities to collaborate on meaningful projects.
                  </p>
                  
                  <div className="social-icons">
                    <SocialIcon icon={Github} href="#" label="GitHub" />
                    <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
                    <SocialIcon icon={Instagram} href="#" label="Instagram" />
                    <SocialIcon icon={Mail} href="mailto:jane@example.com" label="Email" />
                  </div>
                  
                  <DoodleButton className="download-cv">
                    <Download size={18} />
                    <span>Download CV</span>
                  </DoodleButton>
                </DoodleBorder>
              </div>
              
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <div className="rotating-circle"></div>
                  <div className="profile-image">
                    <img src={ProfileImage} alt="Jane Student" />
                  </div>
                  <div className="decorative-dot top"></div>
                  <div className="decorative-dot bottom"></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <section id="projects">
          <FadeInSection>
            <h2 id="projects-title">My Projects</h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <FadeInSection key={index} delay={index * 200}>
                  <ProjectCard {...project} />
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements">
          <FadeInSection>
            <h2 id="achievements-title">Certificates & Achievements</h2>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <FadeInSection key={index} delay={index * 200}>
                  <AchievementCard {...achievement} />
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-icons">
            <SocialIcon icon={Github} href="#" label="GitHub" />
            <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
            <SocialIcon icon={Instagram} href="#" label="Instagram" />
            <SocialIcon icon={Mail} href="mailto:jane@example.com" label="Email" />
          </div>
          <p className="copyright">
            Designed and built with ❤️ by Jane Student © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StudentPortfolio;