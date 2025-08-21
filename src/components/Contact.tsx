import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-earth-brown mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-stone-gray max-w-xl mx-auto font-light">
            We'd love to hear from you. Visit us or send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-light text-earth-brown mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light text-stone-gray mb-2 block">
                      First Name
                    </label>
                    <Input 
                      className="border-sage-pale focus:border-sage-green rounded-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light text-stone-gray mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      className="border-sage-pale focus:border-sage-green rounded-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-light text-stone-gray mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="border-sage-pale focus:border-sage-green rounded-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-light text-stone-gray mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    className="border-sage-pale focus:border-sage-green rounded-sm min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button 
                  className="w-full bg-sage-green hover:bg-sage-green/90 text-natural-white font-light py-3 rounded-sm transition-all duration-200 hover-lift"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-sm hover-lift transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-natural-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-earth-brown mb-2">Visit Us</h4>
                    <p className="text-stone-gray font-light leading-relaxed">
                      123 Coffee Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-sm hover-lift transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-natural-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-earth-brown mb-2">Call Us</h4>
                    <p className="text-stone-gray font-light">
                      (555) 123-BREW<br />
                      <span className="text-sm">Daily 6:00 AM - 9:00 PM</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-sm hover-lift transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-natural-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-earth-brown mb-2">Email Us</h4>
                    <p className="text-stone-gray font-light">
                      hello@coffeehaven.com<br />
                      events@coffeehaven.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-sm hover-lift transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-natural-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-earth-brown mb-2">Opening Hours</h4>
                    <div className="text-stone-gray font-light space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;