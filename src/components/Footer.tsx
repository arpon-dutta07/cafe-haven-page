import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' },
    { name: 'Events', href: '#events' }
  ];

  return (
    <footer className="bg-earth-brown text-natural-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light mb-6">Coffee Haven</h3>
            <p className="text-natural-white/75 leading-relaxed mb-6 font-light">
              Creating exceptional coffee experiences with care and intention. 
              A peaceful space where quality and community meet.
            </p>
            <div className="text-sm text-natural-white/60 font-light space-y-1">
              <p>123 Coffee Street</p>
              <p>Downtown, City 12345</p>
              <p className="mt-3">(555) 123-BREW</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-light mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-natural-white/75 hover:text-sage-light transition-colors duration-200 py-1 font-light text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-light mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-natural-white/10 hover:bg-sage-light hover:text-earth-brown rounded-full flex items-center justify-center transition-all duration-200 hover-lift"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-natural-white/10 hover:bg-sage-light hover:text-earth-brown rounded-full flex items-center justify-center transition-all duration-200 hover-lift"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-natural-white/10 hover:bg-sage-light hover:text-earth-brown rounded-full flex items-center justify-center transition-all duration-200 hover-lift"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            
            {/* Hours */}
            <div className="text-sm text-natural-white/60 font-light">
              <p className="font-light text-natural-white/75 mb-3">Hours</p>
              <p>Mon - Fri: 6:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-natural-white/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-natural-white/50 text-sm mb-4 md:mb-0 font-light">
            © 2025 Coffee Haven. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-light">
            <a href="#" className="text-natural-white/50 hover:text-natural-white/75 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-natural-white/50 hover:text-natural-white/75 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-natural-white/50 hover:text-natural-white/75 transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;