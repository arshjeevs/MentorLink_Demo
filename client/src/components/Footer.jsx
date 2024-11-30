import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">MentorLink</span>
            </div>
            <p className="mt-4 text-gray-400">
              Connecting students with mentors for a brighter future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link to="/mentors" className="block text-gray-400 hover:text-white">Find Mentors</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@mentorlink.com</p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> (555) 123-4567</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> San Francisco, CA</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MentorLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}