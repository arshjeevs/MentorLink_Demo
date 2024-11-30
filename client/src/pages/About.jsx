import Mission from './sections/Mission';
import Values from './sections/Values';
import Story from './sections/Story';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Mission />
        <Values />
        <Story />
      </div>
    </div>
  );
}