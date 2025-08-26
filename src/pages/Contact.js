import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import contactData from '../data/contact.json';

const Contact = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    setTimeout(() => {
      setData(contactData);
      setLoading(false);
    }, 300);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
      });
      setFormData({});
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {data.heading.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-6">
              {data.heading.subtitle}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {data.heading.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              {/* Address */}
              <div className="neural-card p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Address</h3>
                    <p className="text-white/80">
                      {data.contactInfo.address.street}<br/>
                      {data.contactInfo.address.city}, {data.contactInfo.address.state} {data.contactInfo.address.zipCode}<br/>
                      {data.contactInfo.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="neural-card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-white/80">{data.contactInfo.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="neural-card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-white/80">{data.contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="neural-card p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Business Hours</h3>
                    <div className="space-y-1 text-white/80">
                      <p>{data.contactInfo.business_hours.weekdays}</p>
                      <p>{data.contactInfo.business_hours.weekends}</p>
                      <p className="text-primary-400 font-semibold">{data.contactInfo.business_hours.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="neural-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {data.socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`${social.icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="neural-card p-8">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                
                {formStatus.message && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/40 text-green-400' 
                      : formStatus.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/40 text-red-400'
                      : 'bg-primary-500/20 border border-primary-500/40 text-primary-400'
                  }`}>
                    {formStatus.type === 'loading' && (
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                    )}
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {data.formFields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-white font-semibold mb-2">
                        {field.label}
                        {field.required && <span className="text-red-400 ml-1">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={4}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                        />
                      )}
                    </div>
                  ))}
                  
                  <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.type === 'loading' ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find <span className="gradient-text">Our Office</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Located in the heart of Silicon Valley, we're easily accessible and always ready to meet in person.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="neural-card p-2 overflow-hidden"
          >
            {/* Embedded Map Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-primary-900/50 to-accent-900/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-6xl text-white/30 mb-4"></i>
                <p className="text-white/60">Interactive Map</p>
                <p className="text-white/40 text-sm">
                  Coordinates: {data.mapCoordinates.lat}, {data.mapCoordinates.lng}
                </p>
                <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white/80 rounded-lg transition-colors duration-300">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most projects range from 2-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive maintenance and support packages to ensure your applications continue to perform optimally."
              },
              {
                question: "Can you work with our existing tech stack?",
                answer: "Absolutely! We're experienced with a wide range of technologies and can integrate with your existing systems seamlessly."
              },
              {
                question: "How do you ensure data security and compliance?",
                answer: "We follow industry best practices for security, including encryption, secure coding practices, and compliance with relevant regulations like GDPR and HIPAA."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
