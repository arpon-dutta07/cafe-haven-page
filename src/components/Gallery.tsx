import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
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
  { id: 1, image: latteArtImage, title: "Perfect Latte Art", category: "Beverages", description: "Our baristas create beautiful designs with every cup" },
  { id: 2, image: pastriesImage, title: "Fresh Pastries", category: "Food", description: "Baked daily in our kitchen" },
  { id: 3, image: interiorImage, title: "Cozy Interior", category: "Atmosphere", description: "A warm, inviting space to relax" },
  { id: 4, image: baristaImage, title: "Master Barista", category: "Team", description: "Skilled professionals crafting your perfect drink" },
  { id: 5, image: beansImage, title: "Premium Beans", category: "Ingredients", description: "Ethically sourced from around the world" },
  { id: 6, image: dessertsImage, title: "Delicious Desserts", category: "Food", description: "Sweet treats to complement your coffee" },
  { id: 7, image: espressoImage, title: "Espresso Excellence", category: "Beverages", description: "The foundation of our coffee program" },
  { id: 8, image: seatingImage, title: "Comfortable Seating", category: "Atmosphere", description: "Perfect for work or relaxation" },
  { id: 9, image: sustainableImage, title: "Sustainable Sourcing", category: "Values", description: "Supporting farmers and the environment" }
];

// Bento grid item component for consistent styling
const BentoItem = ({ item, className }) => {
  return (
    <div className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <img 
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 opacity-80 group-hover:opacity-90 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sage-light text-xs font-medium uppercase tracking-wider mb-1 inline-block">
                {item.category}
              </span>
              <h3 className="text-white font-medium text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm font-light max-w-xs hidden md:block">
                {item.description}
              </p>
            </div>
            <div className="bg-earth-brown/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-earth-brown mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-stone-gray max-w-2xl mx-auto font-light">
            A glimpse into our world of coffee and community. Each image tells a story of our passion for quality and craftsmanship.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[200px]">
            {/* Featured large item (spans 2x2) */}
            <div className="md:col-span-2 md:row-span-2">
              <BentoItem item={galleryItems[0]} className="h-full shadow-xl" />
            </div>
            
            {/* Medium item (spans 2x1) */}
            <div className="md:col-span-2 md:row-span-1">
              <BentoItem item={galleryItems[1]} className="h-full shadow-lg" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[2]} className="h-full shadow-md" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[3]} className="h-full shadow-md" />
            </div>
            
            {/* Tall item (spans 1x2) */}
            <div className="md:col-span-1 md:row-span-2">
              <BentoItem item={galleryItems[4]} className="h-full shadow-lg" />
            </div>
            
            {/* Medium item (spans 2x1) */}
            <div className="md:col-span-2 md:row-span-1">
              <BentoItem item={galleryItems[5]} className="h-full shadow-lg" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[6]} className="h-full shadow-md" />
            </div>
            
            {/* Wide item (spans 3x1) */}
            <div className="md:col-span-3 md:row-span-1">
              <BentoItem item={galleryItems[7]} className="h-full shadow-xl" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[8]} className="h-full shadow-md" />
            </div>
          </div>
          
          {/* View All Button */}
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-earth-brown text-earth-brown hover:bg-earth-brown/10 px-6 py-2">
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;