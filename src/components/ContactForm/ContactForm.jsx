import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import DoodleButton from '../DoodleButton/DoodleButton';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // This would normally be an API call to send the email
    // For demo purposes, we'll just show a success message
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-form-container">
      <div className="doodle-lines left"></div>
      <div className="doodle-lines right"></div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <User size={18} />
            <span>Your Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Jane Doe"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Mail size={18} />
            <span>Your Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="jane@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            <MessageSquare size={18} />
            <span>Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input form-textarea"
            placeholder="Hi there! I'd like to talk about..."
            rows="5"
          ></textarea>
        </div>
        
        {formStatus.message && (
          <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
            {formStatus.message}
          </div>
        )}
        
        <div className="form-submit">
          <DoodleButton className="submit-button" type="submit">
            <Send size={18} />
            <span>Send Message</span>
          </DoodleButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;