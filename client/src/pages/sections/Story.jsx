export default function Story() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Story
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by a group of passionate educators and students, MentorLink emerged 
              from a simple observation: the power of peer-to-peer learning in academic success.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">The Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              What started as a small campus initiative has grown into a vibrant community
              of mentors and students, all united by the goal of making quality education
              more accessible and personalized.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Today</h3>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to innovate and expand our reach, leveraging technology
              to create meaningful connections and foster academic excellence across
              diverse communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 