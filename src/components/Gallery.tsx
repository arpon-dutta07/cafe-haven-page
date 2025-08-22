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

        {/* Modern Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-300 mb-6 break-inside-avoid ${
                index % 3 === 0 ? 'aspect-[4/5]' : 
                index % 5 === 0 ? 'aspect-[4/3]' : 
                'aspect-square'
              }`}
            >
              <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown via-earth-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-natural-white font-medium text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sage-light text-sm font-light uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </div>
              
              {/* Modern Corner Badge */}
              <div className="absolute top-3 right-3 bg-sage-green/90 text-natural-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;