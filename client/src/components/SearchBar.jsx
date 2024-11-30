import { Search } from 'lucide-react';
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name, university, or expertise..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};