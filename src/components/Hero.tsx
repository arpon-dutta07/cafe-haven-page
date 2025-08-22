import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coffee.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video placeholder - you can replace with actual video */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* Future: Replace with actual video element */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video> */}
        </div>
        <div className="absolute inset-0 bg-gradient-earth opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-natural-white mb-8 leading-tight">
            Brewed with Love,
            <br />
            <span className="text-sage-light font-normal">Served with Passion</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-natural-white/85 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Discover the finest blends from around the world in our peaceful, welcoming space
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-sage-green hover:bg-sage-green/90 text-natural-white font-light px-10 py-4 text-lg rounded-sm transition-all duration-200 hover-lift shadow-sm"
            >
              View Menu
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-natural-white/80 text-natural-white hover:bg-natural-white hover:text-earth-brown font-light px-10 py-4 text-lg rounded-sm transition-all duration-200 hover-lift bg-transparent"
            >
              Our Story
            </Button>
          </div>

          {/* Coffee Cup with Gentle Steam Animation */}
          <div className="flex justify-center">
            <div className="relative coffee-steam">
              <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl text-natural-white">☕</span>
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