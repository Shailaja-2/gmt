import React from 'react';
import { Brain, Users, Heart, Shield, Clock, User } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs, focusing on personal growth and healing.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Stress Management", "Self-Esteem Building"]
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication and conflict resolution strategies.",
      features: ["Communication Skills", "Conflict Resolution", "Trust Building", "Intimacy Enhancement"]
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "Family Therapy",
      description: "Restore harmony in family relationships and improve overall family dynamics.",
      features: ["Parent-Child Relations", "Sibling Conflicts", "Blended Families", "Family Communication"]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma using evidence-based approaches like EMDR and CBT.",
      features: ["PTSD Treatment", "Childhood Trauma", "Accident Recovery", "Abuse Recovery"]
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Crisis Intervention",
      description: "Immediate support and intervention during mental health crises and emergencies.",
      features: ["24/7 Support", "Safety Planning", "Emergency Counseling", "Referral Services"]
    },
    {
      icon: <User className="h-8 w-8 text-teal-600" />,
      title: "Group Therapy",
      description: "Peer support groups addressing specific issues with guided professional facilitation.",
      features: ["Support Groups", "Skill Building", "Peer Learning", "Community Healing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Therapy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a wide range of therapeutic services designed to meet you where you are 
            and support your journey toward mental wellness and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:scale-105"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Session Fees and FAQ */}
        <div className="mt-20 bg-gradient-to-tr from-indigo-50 to-blue-100 rounded-2xl p-10 shadow-inner">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Session Fees & Frequently Asked Questions
          </h2>

          <div className="mb-12 bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Session Fees</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li><span className="font-bold text-blue-700">• $200</span> / individual session</li>
              <li><span className="font-bold text-blue-700">• $240</span> / couples session</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Do you accept insurance?</h4>
              <p className="text-gray-700">
                <span className="text-blue-600 font-medium">No</span>, but a superbill is provided for self-submission.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Are online sessions available?</h4>
              <p className="text-gray-700">
                <span className="text-green-600 font-medium">Yes</span>—all virtual sessions via Zoom.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">What is your cancellation policy?</h4>
              <p className="text-gray-700">
                <span className="text-red-600 font-medium">24-hour notice</span> required.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Service Is Right for You?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I offer free 15-minute consultations to help determine the best approach for your unique situation. 
            Let's discuss your needs and create a personalized treatment plan together.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
