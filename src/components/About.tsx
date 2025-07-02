import React from 'react';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/src/assets/imagedr.jpg" 
                alt="Dr. Serena Blake"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
          </div>

          {/* Right Side: Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hi, I'm Dr. Serena Blake
            </h2>

            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>

            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
             Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space where you can explore your emotions and move forward with confidence.
            </p>

            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              With over 8 years of professional experience in mental health counseling, I deeply enjoy working with individuals from all walks of life. My mission is to guide you in building emotional resilience, clarity, and confidence on your journey toward healing.
            </p>

            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              My therapeutic approach is grounded in compassion, integrity, and proven techniques—designed to foster inner peace, healthy relationships, and lasting personal growth.
            </p>

            {/* Icon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Licensed Professional</h3>
                  <p className="text-gray-700">LCSW | 15+ Years Experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-700">M.A. in Clinical Psychology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Specialties</h3>
                  <p className="text-gray-700">Trauma, Relationships, Anxiety</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Therapy Style</h3>
                  <p className="text-gray-700">Holistic & Person-Centered</p>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Professional Affiliations</h3>
              <ul className="space-y-1 text-gray-800">
                <li>• American Psychological Association</li>
                <li>• National Association of Social Workers</li>
                <li>• Marriage & Family Therapy Association</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
