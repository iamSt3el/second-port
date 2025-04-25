import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';

// Import components
import DoodleBorder from '../../components/DoodleBorder/DoodleBorder';
import DoodleButton from '../../components/DoodleButton/DoodleButton';
import NavItem from '../../components/NavItem/NavItem';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import EducationSection from '../../components/EducationSection/EducationSection';
import CertificateSection from '../../components/CertificateSection/CertificateSection';
import AchievementSection from '../../components/AchievementSection/AchievementSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import DoodleLandingSection from '../../components/DoodleLandingSection/DoodleLandingSection';

// Import styles
import './StudentPortfolio.scss';

const StudentPortfolio = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [animateDoodle, setAnimateDoodle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  
  // Debug flag to help troubleshoot
  const [debugInfo, setDebugInfo] = useState({ scrollY: 0 });

  useEffect(() => {
    // Trigger doodle animation when component mounts
    setAnimateDoodle(true);
    
    // Show header when scrolled down
    const handleScroll = () => {
      // Update debug info
      setDebugInfo({ scrollY: window.scrollY });
      
      // Show header when scrolled down
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      
      // Update active section based on scroll position
      const scrollPositionWithOffset = window.scrollY + 200;
      
      const landingSection = document.getElementById('landing');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const educationSection = document.getElementById('education');
      const projectsSection = document.getElementById('projects');
      const certificatesSection = document.getElementById('certificates');
      const achievementsSection = document.getElementById('achievements');
      const contactSection = document.getElementById('contact');
      
      if (landingSection && window.scrollY < landingSection.offsetHeight - 200) {
        setActiveSection('landing');
      } else if (aboutSection && scrollPositionWithOffset < aboutSection.offsetTop + aboutSection.offsetHeight) {
        setActiveSection('about');
      } else if (skillsSection && scrollPositionWithOffset < skillsSection.offsetTop + skillsSection.offsetHeight) {
        setActiveSection('skills');
      } else if (educationSection && scrollPositionWithOffset < educationSection.offsetTop + educationSection.offsetHeight) {
        setActiveSection('education');
      } else if (projectsSection && scrollPositionWithOffset < projectsSection.offsetTop + projectsSection.offsetHeight) {
        setActiveSection('projects');
      } else if (certificatesSection && scrollPositionWithOffset < certificatesSection.offsetTop + certificatesSection.offsetHeight) {
        setActiveSection('certificates');
      } else if (achievementsSection && scrollPositionWithOffset < achievementsSection.offsetTop + achievementsSection.offsetHeight) {
        setActiveSection('achievements');
      } else if (contactSection) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Set active section immediately for UI feedback
      setActiveSection(sectionId);
      
      // Show header when navigating to any section
      setShowHeader(true);
      
      // Get offset for header height
      const headerHeight = 80;
      
      // Scroll to the section
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
    
    setMobileMenuOpen(false);
  };
  
  // This function is specifically for the explore button
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      // Force the header to appear
      setShowHeader(true);
      
      // Use setTimeout to ensure header is visible first
      setTimeout(() => {
        // Direct DOM scroll for maximum reliability
        window.scrollTo({
          top: aboutSection.offsetTop - 80, // 80px header offset
          behavior: 'smooth'
        });
        
        // Also update active section
        setActiveSection('about');
      }, 10);
    }
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

  return (
    <div className="student-portfolio">
      {/* Animated Doodles */}
      <div className={`animated-doodles ${animateDoodle ? 'animate' : ''}`} />

      {/* Header / Navigation */}
      <header className={showHeader ? 'visible' : ''}>
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
            <NavItem active={activeSection === 'education'} onClick={() => scrollToSection('education')}>
              Education
            </NavItem>
            <NavItem active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>
              Projects
            </NavItem>
            <NavItem active={activeSection === 'certificates'} onClick={() => scrollToSection('certificates')}>
              Certificates
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
        {/* Landing Section */}
        <section id="landing">
          <DoodleLandingSection onExploreClick={handleExploreClick} />
        </section>
      
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
                    <img src="/api/placeholder/400/400" alt="Jane Student" />
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
        
        {/* Education Section */}
        <EducationSection />
        
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
        
        {/* Certificates Section */}
        <CertificateSection />
        
        {/* Achievements Section */}
        <AchievementSection />
        
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