import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section id="testimonials" className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 fade-in-up"
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {testimonial.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to experience Coffee Haven for yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Visit Us Today
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;