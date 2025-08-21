import React from 'react';

const galleryItems = [
  { id: 1, image: "☕", title: "Perfect Latte Art", category: "Beverages" },
  { id: 2, image: "🥐", title: "Fresh Pastries", category: "Food" },
  { id: 3, image: "🏪", title: "Cozy Interior", category: "Atmosphere" },
  { id: 4, image: "👨‍🍳", title: "Master Barista", category: "Team" },
  { id: 5, image: "🫘", title: "Premium Beans", category: "Ingredients" },
  { id: 6, image: "🍰", title: "Delicious Desserts", category: "Food" },
  { id: 7, image: "☕", title: "Espresso Excellence", category: "Beverages" },
  { id: 8, image: "🪑", title: "Comfortable Seating", category: "Atmosphere" },
  { id: 9, image: "🌱", title: "Sustainable Sourcing", category: "Values" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of coffee, craftsmanship, and community
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-xl cursor-pointer hover-zoom ${
                index % 5 === 0 ? 'md:row-span-2' : ''
              } ${index % 7 === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="bg-gradient-coffee aspect-square flex items-center justify-center text-6xl md:text-7xl lg:text-8xl shadow-lg">
                {item.image}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-coffee-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-cream font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gold text-sm font-medium">
                    {item.category}
                  </p>
                  <div className="mt-4">
                    <span className="text-cream text-sm border border-cream/30 px-3 py-1 rounded-full hover:bg-cream hover:text-coffee-dark transition-all duration-200">
                      View More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;