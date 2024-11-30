import { useState } from 'react';
import { Mail, MessageSquare, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91',
    subject: 'Query regarding',
    message: 'I would like to know more about ',
    category: 'iitjee'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const categories = [
    { value: 'iitjee', label: 'IIT JEE' },
    { value: 'neet', label: 'NEET' },
    { value: 'boards', label: 'Board Exams' },
    { value: 'other', label: 'Other' }
  ];

  const messagePlaceholders = {
    'iitjee': 'I would like to know more about IIT JEE preparation...',
    'neet': 'I have questions about NEET preparation...',
    'boards': 'I need help with Board exam preparation...',
    'other': 'I would like to inquire about...'
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setFormData(prev => ({
      ...prev,
      category: newCategory,
      message: messagePlaceholders[newCategory]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    console.log('Sending data:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          category: formData.category
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setFormData({ name: '', email: '', phone: '', subject: '', message: '', category: '' });
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!',
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+91 1234567890"
                  pattern="[0-9+\s-]*"
                  title="Please enter a valid phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={messagePlaceholders[formData.category]}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2 disabled:opacity-75 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {submitStatus.message && (
            <div
              className={`mt-4 p-4 rounded ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">info@mentorlink.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-gray-600">Available 9 AM - 5 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}