import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coffee.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Brewed with Love,
            <br />
            <span className="text-gold">Served with Passion</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the finest blends from around the world in our cozy, welcoming café
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-coffee-dark font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Menu
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Our Story
            </Button>
          </div>

          {/* Coffee Cup with Steam Animation */}
          <div className="flex justify-center">
            <div className="relative coffee-steam">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-2xl">☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-cream"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;