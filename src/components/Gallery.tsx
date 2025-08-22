import React from 'react';
import { Button } from '@/components/ui/button';
import latteArtImage from '@/assets/gallery-latte-art.jpg';
import pastriesImage from '@/assets/gallery-pastries.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';
import baristaImage from '@/assets/gallery-barista.jpg';
import beansImage from '@/assets/gallery-beans.jpg';
import dessertsImage from '@/assets/gallery-desserts.jpg';
import espressoImage from '@/assets/gallery-espresso.jpg';
import seatingImage from '@/assets/gallery-seating.jpg';
import sustainableImage from '@/assets/gallery-sustainable.jpg';

const galleryItems = [
  { id: 1, image: latteArtImage, title: "Perfect Latte Art", category: "Beverages" },
  { id: 2, image: pastriesImage, title: "Fresh Pastries", category: "Food" },
  { id: 3, image: interiorImage, title: "Cozy Interior", category: "Atmosphere" },
  { id: 4, image: baristaImage, title: "Master Barista", category: "Team" },
  { id: 5, image: beansImage, title: "Premium Beans", category: "Ingredients" },
  { id: 6, image: dessertsImage, title: "Delicious Desserts", category: "Food" },
  { id: 7, image: espressoImage, title: "Espresso Excellence", category: "Beverages" },
  { id: 8, image: seatingImage, title: "Comfortable Seating", category: "Atmosphere" },
  { id: 9, image: sustainableImage, title: "Sustainable Sourcing", category: "Values" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-earth-brown mb-6">
            Gallery
          </h2>
          <p className="text-lg text-stone-gray max-w-xl mx-auto font-light">
            A glimpse into our world of coffee and community
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-sm cursor-pointer hover-lift transition-all duration-200 ${
                index % 5 === 0 ? 'md:row-span-2' : ''
              } ${index % 7 === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-earth-brown/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-natural-white font-medium text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sage-light text-sm font-light uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;