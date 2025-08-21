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
    <footer className="bg-coffee-dark text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Coffee Haven</h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Brewing exceptional coffee experiences since 2020. We're passionate about 
              serving the finest blends and creating a warm, welcoming space for our community.
            </p>
            <div className="text-sm text-cream/60">
              <p>123 Coffee Street</p>
              <p>Downtown, City 12345</p>
              <p className="mt-2">(555) 123-BREW</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream/80 hover:text-gold transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-gold hover:text-coffee-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-gold hover:text-coffee-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-gold hover:text-coffee-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Hours */}
            <div className="text-sm text-cream/60">
              <p className="font-medium text-cream/80 mb-2">Hours</p>
              <p>Mon - Fri: 6:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm mb-4 md:mb-0">
            © 2025 Coffee Haven. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;