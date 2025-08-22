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

        {/* Pinterest-Style Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {/* Large featured item */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl cursor-pointer hover-lift transition-all duration-300 shadow-lg">
              <img 
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-natural-white font-medium text-lg mb-1">
                    {galleryItems[0].title}
                  </h3>
                  <p className="text-sage-light text-sm font-light">
                    {galleryItems[0].category}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Medium items */}
            {galleryItems.slice(1, 3).map((item) => (
              <div key={item.id} className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-300 shadow-md">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-natural-white font-medium text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sage-light text-xs">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Tall item */}
            <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-300 shadow-md">
              <img 
                src={galleryItems[3].image}
                alt={galleryItems[3].title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-natural-white font-medium text-sm mb-1">
                    {galleryItems[3].title}
                  </h3>
                  <p className="text-sage-light text-xs">
                    {galleryItems[3].category}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Small items */}
            {galleryItems.slice(4, 8).map((item) => (
              <div key={item.id} className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-300 shadow-md">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-natural-white font-medium text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sage-light text-xs">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Wide item */}
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-300 shadow-md">
              <img 
                src={galleryItems[8].image}
                alt={galleryItems[8].title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-natural-white font-medium text-lg mb-1">
                    {galleryItems[8].title}
                  </h3>
                  <p className="text-sage-light text-sm">
                    {galleryItems[8].category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;