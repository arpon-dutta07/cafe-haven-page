import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import sarahImage from '@/assets/customer-sarah.jpg';
import michaelImage from '@/assets/customer-michael.jpg';
import emilyImage from '@/assets/customer-emily.jpg';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "The best coffee in town! The atmosphere is so cozy and welcoming. I come here every morning for my latte and it never disappoints.",
    rating: 5,
    avatar: sarahImage
  },
  {
    id: 2,
    name: "Michael Chen",
    review: "Amazing cold brew and the staff is incredibly friendly. The latte art is beautiful and the taste is even better. Highly recommended!",
    rating: 5,
    avatar: michaelImage
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    review: "Coffee Haven has become my second home. Great wifi, comfortable seating, and the most delicious pastries. Perfect for work or relaxation.",
    rating: 5,
    avatar: emilyImage
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-sage-pale">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-earth-brown mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-stone-gray max-w-xl mx-auto font-light">
            Genuine experiences from our coffee community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border-0 shadow-sm hover-lift transition-all duration-200"
            >
              <CardContent className="p-8 text-center">
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden shadow-sm">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-light text-earth-brown mb-4">
                  {testimonial.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 text-sage-light fill-current"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-stone-gray leading-relaxed font-light text-sm">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-stone-gray mb-6 font-light">
            Ready to experience Coffee Haven?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sage-green hover:bg-sage-green/90 text-natural-white px-10 py-3 rounded-sm font-light transition-all duration-200 hover-lift">
              Visit Us Today
            </Button>
            <Button variant="outline" className="border border-sage-green text-sage-green hover:bg-sage-green hover:text-natural-white px-10 py-3 rounded-sm font-light transition-all duration-200 hover-lift">
              Leave a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;