import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer M.",
      location: "San Francisco, CA",
      text: "Dr. Serena helped me through the darkest period of my life. Her compassionate approach and practical strategies gave me the tools I needed to rebuild my confidence and find joy again.",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "Portland, OR",
      text: "As someone who was skeptical about therapy, Dr. Serena made me feel comfortable from day one. Her evidence-based approach and genuine care helped save my marriage.",
      rating: 5
    },
    {
      name: "Sarah L.",
      location: "Seattle, WA",
      text: "The trauma therapy sessions were life-changing. Dr. Serena's expertise in EMDR helped me process experiences I'd been carrying for years. I finally feel free.",
      rating: 5
    },
    {
      name: "David & Lisa K.",
      location: "Denver, CO",  
      text: "Couples counseling with Dr. Serena transformed our relationship. We learned to communicate effectively and reconnected in ways we never thought possible.",
      rating: 5
    },
    {
      name: "Amanda T.",
      location: "Austin, TX",
      text: "Dr. Serena's holistic approach addressed not just my anxiety, but helped me understand the root causes. Six months later, I'm a completely different person.",
      rating: 5
    },
    {
      name: "Robert W.",
      location: "Phoenix, AZ",
      text: "The family therapy sessions helped us heal years of hurt and misunderstanding. Dr. Serena guided us with patience and wisdom through every difficult conversation.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what my clients have to say about their therapy experience and 
            the positive changes they've achieved in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of clients who have found peace, growth, and renewed hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Consultation
              </button>
              <a 
                href="tel:(555) 123-4567" 
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;