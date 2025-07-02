import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
   consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.preferredTime ||
      !formData.consent
    ) {
      setIsSubmitted(true);
      return;
    }

    console.log('Form data:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredTime: '',
        consent: false,
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    const updatedValue =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the first step? I'm here to help. Reach out to schedule your
            consultation or ask any questions about my services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">(323) 555-0192</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:serena@blakepsychology.com"
                      className="underline"
                    >
                      serena@blakepsychology.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Office Location</h4>
                  <p className="text-gray-600">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>
                      <strong>In-person:</strong> Tue & Thu, 10 AM – 6 PM
                    </p>
                    <p>
                      <strong>Virtual (Zoom):</strong> Mon, Wed & Fri, 1 PM – 5 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-700">
                  8 years of practice, 500+ client sessions focused on anxiety,
                  trauma, and relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="border border-green-700 rounded-xl shadow-md p-8 bg-white">
              <h3 className="text-2xl font-serif font-bold text-green-900 mb-6 text-center">
                Get In Touch
              </h3>
              <p className="text-center text-gray-700 mb-8">
                Simply fill out the brief fields below and Dr. Serena Blake will be in
                touch with you soon, usually within one business day. This form is
                safe, private, and completely free.
              </p>

              {isSubmitted &&
              formData.name &&
              formData.email &&
              formData.phone &&
              formData.message &&
              formData.preferredTime &&
              formData.consent ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Thank you!
                  </h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full border ${
                        !formData.name && isSubmitted
                          ? 'border-red-500'
                          : 'border-green-700'
                      } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
                      placeholder="Your full name"
                    />
                    {!formData.name && isSubmitted && (
                      <p className="text-sm text-red-600 mt-1">Name is required.</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full border ${
                        !formData.phone && isSubmitted
                          ? 'border-red-500'
                          : 'border-green-700'
                      } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
                      placeholder="(555) 123-4567"
                    />
                    {!formData.phone && isSubmitted && (
                      <p className="text-sm text-red-600 mt-1">
                        Phone number is required.
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full border ${
                        !formData.email && isSubmitted
                          ? 'border-red-500'
                          : 'border-green-700'
                      } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
                      placeholder="you@example.com"
                    />
                    {!formData.email && isSubmitted && (
                      <p className="text-sm text-red-600 mt-1">Email is required.</p>
                    )}
                  </div>

                  {/* What brings you here */}
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      What brings you here?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`w-full border ${
                        !formData.message && isSubmitted
                          ? 'border-red-500'
                          : 'border-green-700'
                      } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
                      placeholder="Tell us how we can help..."
                    />
                    {!formData.message && isSubmitted && (
                      <p className="text-sm text-red-600 mt-1">
                        This field is required.
                      </p>
                    )}
                  </div>

                  {/* Preferred time */}
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Preferred time to reach you
                    </label>
                    <input
                      type="text"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className={`w-full border ${
                        !formData.preferredTime && isSubmitted
                          ? 'border-red-500'
                          : 'border-green-700'
                      } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
                      placeholder="e.g. Morning, Afternoon, Weekends"
                    />
                    {!formData.preferredTime && isSubmitted && (
                      <p className="text-sm text-red-600 mt-1">
                        Please specify a preferred time.
                      </p>
                    )}
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <label className="text-gray-800 text-sm">
                      I agree to be contacted by Dr. Serena Blake via phone or email.
                    </label>
                  </div>
                  {!formData.consent && isSubmitted && (
                    <p className="text-sm text-red-600">
                      Consent is required to proceed.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-green-800 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-900 transition"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
