import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Dr. Serena Blake, PsyD</h3>
                <p className="text-sm text-gray-400">Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing compassionate, evidence-based care to support healing, self-awareness, and growth.
            </p>
            <div className="flex space-x-2 text-sm text-gray-400">
              <span>License #CA98765</span>
              <span>•</span>
              <span>Practicing in California</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  About Dr. Blake
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  Therapeutic Approach
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  Contact & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Individual Therapy</li>
              <li>Couples Counseling</li>
              <li>Family Therapy</li>
              <li>Trauma Therapy</li>
              <li>Crisis Intervention</li>
              <li>Group Therapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="tel:3235550192" className="hover:text-white transition-colors">
                  (323) 555-0192
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:serena@blakepsychology.com" className="hover:text-white transition-colors">
                  serena@blakepsychology.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p>
                  1287 Maplewood Drive<br />
                  Los Angeles, CA 90026
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p>
                  In-person: Tue & Thu, 10AM–6PM<br />
                  Virtual (Zoom): Mon, Wed & Fri, 1PM–5PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Serena Blake. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            <p>
              If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room. 
              For crisis support, contact the National Suicide Prevention Lifeline at 988.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
