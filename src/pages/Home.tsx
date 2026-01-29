import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Các dự án của tôi
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/${project.id}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              {project.avatar && (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={project.avatar}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-blue-500 font-medium mb-3">
                  {project.startDate} - {project.endDate}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Chưa có dự án nào. Hãy thêm dự án vào file{' '}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                src/data/projects.ts
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
