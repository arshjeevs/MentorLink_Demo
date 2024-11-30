import { Users, Target, Sparkles } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: "Community",
      description: "Building a supportive network of students and mentors who share knowledge and experiences."
    },
    {
      icon: <Target className="h-12 w-12 text-indigo-600" />,
      title: "Excellence",
      description: "Striving for academic excellence through personalized guidance and support."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-indigo-600" />,
      title: "Innovation",
      description: "Embracing new ways of learning and connecting in the digital age."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 