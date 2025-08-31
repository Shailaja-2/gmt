import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Softened overlay for mood */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-800/80 to-teal-700/80"></div>

      {/* Background image */}
      <img
        src="/assets/womanimg.jpg"
        alt="Peaceful therapy environment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find Your Path to
            <span className="block text-teal-200">Mental Wellness</span>
          </h1>
          <p className="mt-6 text-xl text-white/100 text-bold leading-relaxed">
            Professional, compassionate therapy services to help you navigate life's challenges. 
            Together, we'll work towards healing, growth, and lasting positive change.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-teal-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </button>
            <a
              href="tel:(555) 123-4567"
              className="border border-white/100 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-200 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-white/100 text-sm">Years Experience</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/100 text-sm">Clients Helped</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-white/100 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
