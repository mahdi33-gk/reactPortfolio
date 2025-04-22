// Update the Contact component to use the custom hooks and data
import React from 'react';
import { contactInfo, socialLinks } from '../data/content';
import { useFormValidation } from '../hooks';

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  const validate = (values) => {
    let errors = {};
    
    // Name validation
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    // Message validation
    if (!values.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const {
    values,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted
  } = useFormValidation(initialState, validate);

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-info">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">Feel free to reach out for collaboration opportunities or just to say hello!</p>
            
            <div className="contact-details space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item flex items-start gap-4">
                  <div className="icon-box text-highlight text-2xl">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links flex gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="social-icon" aria-label={link.name}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {isSubmitted && (
              <div className="form-message p-4 mb-6 rounded bg-green-500/20 text-green-400">
                Your message has been sent successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full bg-secondary border ${errors.name ? 'border-red-500' : 'border-accent'} rounded p-3 focus:outline-none focus:border-highlight`}
                />
                {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full bg-secondary border ${errors.email ? 'border-red-500' : 'border-accent'} rounded p-3 focus:outline-none focus:border-highlight`}
                />
                {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-accent rounded p-3 focus:outline-none focus:border-highlight"
                />
              </div>
              
              <div className="form-group mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-secondary border ${errors.message ? 'border-red-500' : 'border-accent'} rounded p-3 focus:outline-none focus:border-highlight`}
                ></textarea>
                {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
