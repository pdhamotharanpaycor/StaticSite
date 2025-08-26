import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clientsData from '../data/clients.json';

const Clients = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(clientsData);
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

      {/* Client Statistics */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {data.statistics.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.statistics.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center neural-card p-6"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-6 card-hover-effect cursor-pointer"
                onClick={() => setSelectedClient(client)}
              >
                {/* Client Logo */}
                <div className="bg-white/10 rounded-lg p-4 mb-6 text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-16 object-contain filter brightness-200"
                  />
                </div>

                {/* Client Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                  <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                    {client.industry}
                  </span>
                </div>

                {/* Project */}
                <div className="mb-4">
                  <h4 className="text-white/90 font-semibold mb-2">Project:</h4>
                  <p className="text-white/70 text-sm">{client.project}</p>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-lg p-3 border border-white/10">
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-1">Key Result</div>
                    <div className="text-white font-semibold">{client.result}</div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="text-center mt-4">
                  <span className="text-white/50 text-xs">Click to read testimonial</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
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
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Technology', icon: 'fas fa-microchip' },
              { name: 'Finance', icon: 'fas fa-coins' },
              { name: 'Healthcare', icon: 'fas fa-heartbeat' },
              { name: 'E-commerce', icon: 'fas fa-shopping-cart' },
              { name: 'Education', icon: 'fas fa-graduation-cap' },
              { name: 'Logistics', icon: 'fas fa-truck' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-6 text-center card-hover-effect"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${industry.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-semibold text-sm">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
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
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real results from real partnerships - see how we've helped businesses achieve their digital transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.clients.slice(0, 2).map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="neural-card p-8"
              >
                {/* Quote */}
                <div className="mb-6">
                  <i className="fas fa-quote-left text-primary-400 text-3xl mb-4"></i>
                  <p className="text-white/90 text-lg leading-relaxed italic">
                    "{client.testimonial}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-8 object-contain filter brightness-200"
                  />
                  <div>
                    <div className="text-white font-semibold">{client.name}</div>
                    <div className="text-white/60 text-sm">{client.industry}</div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white/90 font-semibold mb-2">Project:</h4>
                    <p className="text-white/70 text-sm">{client.project}</p>
                  </div>
                  <div>
                    <h4 className="text-white/90 font-semibold mb-2">Result:</h4>
                    <p className="text-primary-400 font-semibold text-sm">{client.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center neural-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create the next success story together. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Project
                <i className="fas fa-rocket ml-2"></i>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View More Cases
                <i className="fas fa-external-link-alt ml-2"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedClient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedClient(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="neural-card p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedClient.name}</h3>
              <button
                onClick={() => setSelectedClient(null)}
                className="text-white/70 hover:text-white"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="mb-6">
              <i className="fas fa-quote-left text-primary-400 text-2xl mb-4"></i>
              <p className="text-white/90 leading-relaxed italic">
                "{selectedClient.testimonial}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-white/60">Industry:</span>
                <div className="text-white">{selectedClient.industry}</div>
              </div>
              <div>
                <span className="text-white/60">Project:</span>
                <div className="text-white">{selectedClient.project}</div>
              </div>
              <div className="md:col-span-2">
                <span className="text-white/60">Key Result:</span>
                <div className="text-primary-400 font-semibold">{selectedClient.result}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Clients;
