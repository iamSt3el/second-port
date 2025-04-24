import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeInSection from '../FadeInSection/FadeInSection';
import ContactForm from '../ContactForm/ContactForm';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './ContactSection.scss';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'jane@example.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9AM - 5PM'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <FadeInSection>
        <h2 id="contact-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <DoodleBorder className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Feel free to reach out to me with any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="contact-info-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">
                      <item.icon size={22} />
                    </div>
                    <div className="contact-details">
                      <h4 className="contact-item-title">{item.title}</h4>
                      <p className="contact-item-content">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="contact-social-doodle">
                <div className="doodle-arrow"></div>
                <div className="doodle-text">Let's connect!</div>
              </div>
            </DoodleBorder>
          </div>
          
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </FadeInSection>
      
      <div className="contact-background-elements">
        <div className="doodle-element element-1"></div>
        <div className="doodle-element element-2"></div>
        <div className="doodle-element element-3"></div>
        <div className="doodle-element element-4"></div>
      </div>
    </section>
  );
};

export default ContactSection;