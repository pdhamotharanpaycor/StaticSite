import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutData from '../data/about.json';

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(aboutData);
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
              About <span className="gradient-text">TechNova</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of software development through AI innovation and digital transformation excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-gradient-to-r from-primary-950/30 to-accent-950/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {data.whoWeAre.title}
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {data.whoWeAre.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.whoWeAre.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                    <span className="text-white/90">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="neural-card p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
                <p className="text-white/80">
                  A diverse group of passionate technologists, designers, and strategists 
                  working together to build the future of software.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[data.goal, data.vision, data.mission].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="neural-card p-8 text-center card-hover-effect"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`fas ${index === 0 ? 'fa-target' : index === 1 ? 'fa-eye' : 'fa-compass'} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-6 text-center card-hover-effect"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From innovative startup to trusted technology partner - our evolution in the digital transformation space.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2020',
                title: 'Foundation',
                description: 'TechNova was founded with a vision to democratize AI and cloud technologies for businesses of all sizes.'
              },
              {
                year: '2021',
                title: 'First AI Solutions',
                description: 'Launched our first AI-powered applications, helping clients achieve 40% efficiency improvements.'
              },
              {
                year: '2022',
                title: 'Cloud Excellence',
                description: 'Became certified cloud partners with major providers, expanding our migration and optimization services.'
              },
              {
                year: '2023',
                title: 'Scale & Growth',
                description: 'Reached 50+ successful projects and established ourselves as leaders in digital transformation.'
              },
              {
                year: '2024',
                title: 'Innovation Hub',
                description: 'Opened our AI research lab and launched advanced machine learning solutions for enterprise clients.'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="neural-card p-6">
                    <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-white/80">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
