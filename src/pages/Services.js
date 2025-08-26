import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import servicesData from '../data/services.json';

const Services = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData(servicesData);
      setLoading(false);
    }, 300);
  }, []);

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

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-8 card-hover-effect"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {data.process.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-6xl font-bold gradient-text mb-4 opacity-20">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="neural-card p-6 relative z-10 -mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>

                {/* Connection Line */}
                {index < data.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-gradient-to-r from-primary-400 to-accent-400 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
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
              Service <span className="gradient-text">Spotlight</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our services in detail and see how they can transform your business operations.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {data.services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService === index
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="neural-card p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Icon and Title */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <i className={`${data.services[selectedService].icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {data.services[selectedService].title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {data.services[selectedService].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
                <div className="space-y-4">
                  {data.services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies and CTA */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {data.services[selectedService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 text-white/90 rounded-full text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="btn-primary w-full">
                  Get Started
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center neural-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
                <i className="fas fa-calendar ml-2"></i>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Portfolio
                <i className="fas fa-external-link-alt ml-2"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
