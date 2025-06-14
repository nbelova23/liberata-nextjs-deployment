import Link from 'next/link';

const exercises = [
  { slug: '01-getting-started', title: '01 - Getting Started', description: 'Learn basic Next.js pages and routing' },
  { slug: '02-data-fetching', title: '02 - Data Fetching', description: 'Fetch data from APIs and databases' },
  { slug: '03-dynamic-routes', title: '03 - Dynamic Routes', description: 'Create pages with dynamic URLs' },
  { slug: '04-layouts', title: '04 - Layouts', description: 'Build shared layouts and components' },
  { slug: '05-authentication', title: '05 - Authentication', description: 'Add user login and protected pages' },
  { slug: '06-state-management', title: '06 - State Management', description: 'Manage data across your application' },
  { slug: '07-deployment', title: '07 - Deployment', description: 'Deploy your website to the internet' },
  { slug: '08-testing', title: '08 - Testing', description: 'Test your code to ensure it works correctly' },
];

export default function ExercisesIndex() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">🚀 Next.js Learning Path</h1>
        <p className="text-xl text-gray-600">Master modern web development step by step</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {exercises.map((ex, index) => (
          <div key={ex.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-800">{ex.title}</h2>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {index < 4 ? 'Basic' : 'Advanced'}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{ex.description}</p>
            <Link 
              href={`/exercises/${ex.slug}`} 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Start Exercise →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Learning Tips</h3>
          <ul className="text-gray-600 space-y-1">
            <li>• Start with Exercise 1 and work through them in order</li>
            <li>• Take your time - understanding is more important than speed</li>
            <li>• Experiment with the code and try breaking things!</li>
            <li>• Ask questions when you get stuck</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 