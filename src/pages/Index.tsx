import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DailySpecials from '@/components/DailySpecials';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DailySpecials />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
