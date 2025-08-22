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
    <section id="specials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-earth-brown mb-6">
            Today's Special Blends
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto font-light leading-relaxed">
            Handcrafted beverages made with care and the finest ingredients
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
                  <Card className="bg-card border-0 shadow-sm mx-4 hover-lift transition-all duration-200">
                    <CardContent className="p-8 text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-sm overflow-hidden shadow-sm">
                        <img 
                          src={special.image} 
                          alt={special.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-light text-earth-brown mb-3">
                        {special.name}
                      </h3>
                      <p className="text-2xl font-light text-sage-green mb-4">
                        {special.price}
                      </p>
                      <p className="text-stone-gray text-sm leading-relaxed max-w-sm mx-auto font-light mb-6">
                        {special.description}
                      </p>
                      <Button 
                        className="bg-sage-green hover:bg-sage-green/90 text-natural-white font-light px-8 py-2 rounded-sm transition-all duration-200 hover-lift"
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card hover:bg-sage-pale border-sage-pale shadow-sm rounded-sm"
          >
            <ChevronLeft className="h-5 w-5 text-sage-green" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card hover:bg-sage-pale border-sage-pale shadow-sm rounded-sm"
          >
            <ChevronRight className="h-5 w-5 text-sage-green" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {specials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-sage-green'
                    : 'bg-sage-pale hover:bg-sage-light'
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