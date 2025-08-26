import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Clients', path: '/clients' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Software Development', path: '/services#development' },
        { name: 'Cloud Migration', path: '/services#migration' },
        { name: 'App Maintenance', path: '/services#maintenance' },
        { name: 'Implementation Support', path: '/services#support' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '#' },
        { name: 'Case Studies', path: '#' },
        { name: 'Documentation', path: '#' },
        { name: 'Support Center', path: '#' },
      ],
    },
  };

  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/technova', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/technova', label: 'Twitter' },
    { icon: 'fab fa-github', url: 'https://github.com/technova', label: 'GitHub' },
    { icon: 'fab fa-medium', url: 'https://medium.com/@technova', label: 'Medium' },
  ];

  return (
    <footer className="bg-primary-950/50 backdrop-blur-sm border-t border-white/10">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold gradient-text mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                <i className="fas fa-brain text-white text-sm"></i>
              </div>
              <span>TechNova</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Empowering digital transformation through cutting-edge AI and cloud technologies. 
              We build intelligent solutions that drive business growth and innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} TechNova. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;
