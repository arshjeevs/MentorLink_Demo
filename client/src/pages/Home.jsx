import { Link } from 'react-router-dom';
import { Users, Award, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-boxld mb-6 leading-tight">
              Connect with College Mentors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Get guidance from experienced college students and boost your academic success
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-all duration-200 inline-block"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:bg-white/10 transition-all duration-200 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen py-20 bg-white w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
              <p className="text-gray-600">
                Connect with top college students from prestigious universities who understand your journey
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">
                Book sessions that fit your schedule and learning pace, with 24/7 availability
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Join thousands of students who improved their academic performance with our mentorship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700"
            >
              Browse Mentors
            </Link>
            <Link
              to="/about"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}