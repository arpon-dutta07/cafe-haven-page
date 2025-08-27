import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, X, Coffee } from 'lucide-react';
import latteArtImage from '@/assets/gallery-latte-art.jpg';
import pastriesImage from '@/assets/gallery-pastries.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';
import baristaImage from '@/assets/gallery-barista.jpg';
import beansImage from '@/assets/gallery-beans.jpg';
import dessertsImage from '@/assets/gallery-desserts.jpg';
import espressoImage from '@/assets/gallery-espresso.jpg';
import seatingImage from '@/assets/gallery-seating.jpg';

const galleryItems = [
  { 
    id: 1, 
    image: latteArtImage, 
    title: "Perfect Latte Art", 
    category: "Beverages", 
    description: "Our baristas create beautiful designs with every cup",
    details: "At Cafe Haven, our baristas are trained in the delicate art of latte design. Each cup is a canvas for our skilled team, who create intricate patterns using perfectly steamed milk and rich espresso. We believe presentation is just as important as taste, making every coffee a visual delight."
  },
  { 
    id: 2, 
    image: pastriesImage, 
    title: "Fresh Pastries", 
    category: "Food", 
    description: "Baked daily in our kitchen",
    details: "Our pastries are baked fresh every morning using traditional recipes and premium ingredients. From buttery croissants to decadent chocolate treats, each pastry is crafted to perfectly complement our coffee selection. We source local ingredients whenever possible to ensure maximum freshness and flavor."
  },
  { 
    id: 3, 
    image: interiorImage, 
    title: "Cozy Interior", 
    category: "Atmosphere", 
    description: "A warm, inviting space to relax",
    details: "Cafe Haven's interior is designed to create a warm, welcoming atmosphere where customers can relax, work, or socialize. Our space features comfortable seating, warm lighting, and thoughtful design elements that reflect our commitment to creating a true haven for coffee lovers. The natural wood elements and earth tones create a calming environment."
  },
  { 
    id: 4, 
    image: baristaImage, 
    title: "Master Barista", 
    category: "Team", 
    description: "Skilled professionals crafting your perfect drink",
    details: "Our baristas undergo extensive training in coffee preparation techniques, flavor profiles, and customer service. Each team member is passionate about coffee and dedicated to crafting the perfect drink for every customer. They're always happy to make recommendations based on your preferences or answer questions about our coffee program."
  },
  { 
    id: 5, 
    image: beansImage, 
    title: "Premium Beans", 
    category: "Ingredients", 
    description: "Ethically sourced from around the world",
    details: "We carefully select our coffee beans from premium growing regions around the world. Our head roaster works directly with farmers to ensure quality and consistency. We roast in small batches to bring out the unique flavor profile of each origin, resulting in exceptionally fresh and flavorful coffee with distinctive character."
  },
  { 
    id: 6, 
    image: dessertsImage, 
    title: "Delicious Desserts", 
    category: "Food", 
    description: "Sweet treats to complement your coffee",
    details: "Our dessert menu features a rotating selection of cakes, tarts, and cookies made from scratch in our kitchen. Our pastry chef creates seasonal specialties alongside classic favorites, using high-quality ingredients and traditional techniques. Each dessert is designed to pair perfectly with our coffee offerings."
  },
  { 
    id: 7, 
    image: espressoImage, 
    title: "Espresso Excellence", 
    category: "Beverages", 
    description: "The foundation of our coffee program",
    details: "Our espresso program is the heart of Cafe Haven. We use a custom blend developed specifically for our shop, featuring notes of chocolate, caramel, and subtle fruit. Our La Marzocco machines are calibrated multiple times daily to ensure consistent extraction, and each shot is pulled with precision by our trained baristas."
  },
  { 
    id: 8, 
    image: seatingImage, 
    title: "Comfortable Seating", 
    category: "Atmosphere", 
    description: "Perfect for work or relaxation",
    details: "We've created varied seating options to accommodate different needs - from cozy armchairs for relaxation to communal tables for socializing and dedicated workspaces with power outlets. Our furniture is selected for both style and comfort, ensuring you can enjoy your time at Cafe Haven whether you're staying for five minutes or five hours."
  }
];

// Bento grid item component for consistent styling
const BentoItem = ({ item, onClick, className }) => {
  return (
    <div 
      className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${className}`}
      onClick={() => onClick(item)}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Darker overlay */}
      <img 
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 opacity-90 group-hover:opacity-95 transition-all duration-500">
        {/* Darker gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sage-light text-xs font-medium uppercase tracking-wider mb-1 inline-block">
                {item.category}
              </span>
              <h3 className="text-white font-medium text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm font-light max-w-xs hidden md:block">
                {item.description}
              </p>
            </div>
            <div className="bg-[#5D4037] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {/* Darker brown color */}
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal component for displaying detailed information
const ImageModal = ({ item, onClose }) => {
  if (!item) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Darker overlay */}
      <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto bg-[#F5F5F5]"> {/* Slightly darker background */}
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-5 h-5 text-[#5D4037]" /> {/* Coffee icon */}
            <span className="text-[#5D4037]/80 text-xs font-medium uppercase tracking-wider inline-block">
              {item.category}
            </span>
          </div>
          <h3 className="text-[#3E2723] text-2xl md:text-3xl font-medium mb-4"> {/* Darker brown text */}
            {item.title}
          </h3>
          <p className="text-[#4E342E] text-base mb-6 leading-relaxed"> {/* Darker text */}
            {item.details}
          </p>
          <Button 
            onClick={onClose}
            className="bg-[#5D4037] hover:bg-[#4E342E] text-white" /* Darker brown button */
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const handleCloseModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  return (
    <section id="gallery" className="py-20 bg-[#FAFAFA]"> {/* Slightly darker background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#5D4037] mb-6"> {/* Darker brown heading */}
            Our Gallery
          </h2>
          <p className="text-lg text-[#5D4037]/80 max-w-2xl mx-auto font-light"> {/* Darker text */}
            A glimpse into our world of coffee and community. Each image tells a story of our passion for quality and craftsmanship.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[180px]">
            {/* Featured large item (spans 3x2) */}
            <div className="md:col-span-3 md:row-span-2">
              <BentoItem item={galleryItems[0]} onClick={handleItemClick} className="h-full shadow-xl" />
            </div>
            
            {/* Medium item (spans 3x1) */}
            <div className="md:col-span-3 md:row-span-1">
              <BentoItem item={galleryItems[1]} onClick={handleItemClick} className="h-full shadow-lg" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[2]} onClick={handleItemClick} className="h-full shadow-md" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[3]} onClick={handleItemClick} className="h-full shadow-md" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[4]} onClick={handleItemClick} className="h-full shadow-md" />
            </div>
            
            {/* Medium item (spans 3x1) */}
            <div className="md:col-span-3 md:row-span-1">
              <BentoItem item={galleryItems[5]} onClick={handleItemClick} className="h-full shadow-lg" />
            </div>
            
            {/* Small item */}
            <div className="md:col-span-1 md:row-span-1">
              <BentoItem item={galleryItems[6]} onClick={handleItemClick} className="h-full shadow-md" />
            </div>
            
            {/* Medium item (spans 2x1) - Seating image */}
            <div className="md:col-span-2 md:row-span-1">
              <BentoItem item={galleryItems[7]} onClick={handleItemClick} className="h-full shadow-lg" />
            </div>
          </div>
          
          {/* View All Button */}
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-[#5D4037] text-[#5D4037] hover:bg-[#5D4037]/10 px-6 py-2">
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modal for displaying detailed information */}
      {selectedItem && (
        <ImageModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Gallery;