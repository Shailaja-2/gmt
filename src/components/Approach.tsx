import React from 'react';

const Approach = () => {
  const principles = [
    {
      image: "/grp.jpg",
      title: "Goal-Oriented",
      description: "We work together to identify clear, achievable goals and create a roadmap for your healing journey."
    },
    {
      image: "/methods.jpg",
      title: "Evidence-Based",
      description: "I utilize proven therapeutic methods including CBT, DBT, EMDR, and mindfulness-based interventions."
    },
    {
      image: "/idea.jpg",
      title: "Insight-Focused",
      description: "Developing self-awareness and understanding the root causes of challenges for lasting change."
    },
    {
      image: "/happy.jpg",
      title: "Compassionate",
      description: "A warm, non-judgmental environment where you feel safe to explore and express your authentic self."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Therapeutic Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe in a holistic, client-centered approach that honors your unique experiences 
            while providing the structure and support needed for meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 overflow-hidden">
                <img 
                  src={principle.image} 
                  alt={principle.title} 
                  className="h-16 w-16 object-cover rounded-full" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Treatment Modalities
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-gray-600 text-sm">Identifying and changing negative thought patterns and behaviors.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Dialectical Behavior Therapy (DBT)</h4>
                <p className="text-gray-600 text-sm">Building skills for emotional regulation and distress tolerance.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">EMDR Therapy</h4>
                <p className="text-gray-600 text-sm">Processing traumatic memories and reducing their emotional impact.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mindfulness-Based Interventions</h4>
                <p className="text-gray-600 text-sm">Developing present-moment awareness and acceptance.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What to Expect
            </h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Initial Consultation</h4>
                  <p className="text-gray-600 text-sm">We'll discuss your concerns, goals, and determine if we're a good fit.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Assessment & Planning</h4>
                  <p className="text-gray-600 text-sm">Comprehensive evaluation to create your personalized treatment plan.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Active Treatment</h4>
                  <p className="text-gray-600 text-sm">Regular sessions focused on achieving your therapeutic goals.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Progress & Maintenance</h4>
                  <p className="text-gray-600 text-sm">Monitoring progress and developing skills for long-term wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
