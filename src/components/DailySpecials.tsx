import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cappuccinoImage from '@/assets/special-cappuccino.jpg';
import latteImage from '@/assets/special-latte.jpg';
import mochaImage from '@/assets/special-mocha.jpg';
import coldbrewImage from '@/assets/special-coldbrew.jpg';
import macchiatoImage from '@/assets/special-macchiato.jpg';

const specials = [
  {
    id: 1,
    name: "Signature Cappuccino",
    price: "$4.50",
    description: "Rich espresso topped with velvety steamed milk foam and a hint of cinnamon",
    image: cappuccinoImage
  },
  {
    id: 2,
    name: "Vanilla Latte",
    price: "$5.25",
    description: "Smooth espresso with steamed milk and premium vanilla syrup, topped with foam art",
    image: latteImage
  },
  {
    id: 3,
    name: "Mocha Delight",
    price: "$5.75",
    description: "Decadent blend of espresso, steamed milk, and Belgian chocolate, finished with whipped cream",
    image: mochaImage
  },
  {
    id: 4,
    name: "Cold Brew",
    price: "$4.00",
    description: "Smooth, less acidic coffee brewed slowly for 12 hours, served over ice",
    image: coldbrewImage
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    price: "$5.50",
    description: "Espresso marked with steamed milk and finished with rich caramel drizzle",
    image: macchiatoImage
  }
];

const DailySpecials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === specials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? specials.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === specials.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="specials" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Today's Special Blends
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted beverages made with the finest ingredients and served with love
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {specials.map((special) => (
                <div key={special.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-0 shadow-xl mx-4">
                    <CardContent className="p-8 text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={special.image} 
                          alt={special.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {special.name}
                      </h3>
                      <p className="text-3xl font-bold text-accent mb-4">
                        {special.price}
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                        {special.description}
                      </p>
                      <Button 
                        className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full"
                      >
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card hover:bg-accent border-primary/20 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card hover:bg-accent border-primary/20 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {specials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;