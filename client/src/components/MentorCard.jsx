import { Star, Calendar } from 'lucide-react';
import PropTypes from 'prop-types';

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={mentor.imageUrl}
        alt={mentor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
        <p className="text-gray-600 mb-2">{mentor.university}</p>
        <p className="text-gray-500 mb-4">{mentor.major}</p>
        
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="text-gray-700">{mentor.rating}</span>
          <span className="text-gray-500 ml-2">({mentor.totalSessions} sessions)</span>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Availability</h4>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{mentor.availability.join(', ')}</span>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Book Session
        </button>
      </div>
    </div>
  );
}

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    totalSessions: PropTypes.number.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
    availability: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};