import { useState } from 'react';
import { mentors } from '../data/mentors';
import MentorCard from '../components/MentorCard';
import SearchBar from '../components/SearchBar';

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMentors = mentors.filter((mentor) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      mentor.name.toLowerCase().includes(searchTerm) ||
      mentor.university.toLowerCase().includes(searchTerm) ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Find Your Mentor</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}