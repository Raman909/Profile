import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // EmailJS configuration
  const serviceId = 'service_eok1cmi';
  const templateId = 'template_8k15ipg';
  const publicKey = 'TFwfhFQfe_n5YF6eX';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Raman Kumar Mishra'
      };

      // Send email
      const response = await emailjs.send(serviceId, templateId, templateParams);
      
      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-background">
        <div className="container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently looking for internship opportunities and exciting projects 
                in Software Development, AI/ML, and Cloud Computing. Feel free to reach out!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramanmishra25432543@gmail.com" target="_blank" rel="noopener noreferrer">
                      ramanmishra25432543@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+919555190209">+91 9555190209</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-buttons">
                  <a 
                    href="https://github.com/Raman909" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-button github"
                  >
                    <span className="social-icon">📱</span>
                    <span className="social-text">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/raman-mishra-80a703261/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-button linkedin"
                  >
                    <span className="social-icon">💼</span>
                    <span className="social-text">LinkedIn</span>
                  </a>
                </div>
          </div>
          </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              {submitError && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {submitError}
                </div>
              )}

              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${isSubmitted ? 'submitted' : ''} ${isLoading ? 'loading' : ''}`}
                disabled={isLoading || isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <span className="submit-icon">✅</span>
                    Message Sent!
                  </>
                ) : isLoading ? (
                  <>
                    <span className="submit-icon">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="submit-icon">📤</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to work together?</h3>
          <p>I'm always excited to discuss new projects and opportunities. Let's create something amazing!</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;