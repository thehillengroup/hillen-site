import React from 'react';

const projects = [
  {
    title: 'Skyline Ventures',
    description: 'Corporate redesign for a finance firm. React frontend, SEO optimization, and visual branding overhaul.',
    image: '/images/projects/layout-preview1.png',
    link: 'https://skylineventures.example.com',
    tags: ['Web Design', 'SEO', 'React'],
  },
  {
    title: 'CivicConnect Portal',
    description: 'Responsive public service portal. Node backend with React SPA. Used for community access and updates.',
    image: '/images/projects/layout-preview2.png',
    link: 'https://civicconnect.example.com',
    tags: ['Web App', 'Public Sector', 'React'],
  },
  {
    title: 'Hillen Internal Dashboard',
    description: 'Role-based internal dashboard with analytics widgets, integrated charts, and responsive layout.',
    image: '/images/projects/layout-preview3.png',
    link: '',
    tags: ['Internal Tools', 'Analytics', 'Custom Dev'],
  },
  {
    title: 'Legacy Migration Project',
    description: 'Full site migration from .NET to JAMstack. Headless CMS (Contentful), Gatsby frontend, optimized delivery.',
    image: '/images/projects/layout-preview4.png',
    link: '',
    tags: ['Migration', 'Gatsby', 'Headless CMS'],
  },
];

const Portfolio = () => (
  <section className="py-20 px-4 bg-white text-dark">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-primary">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary font-medium hover:underline pt-2"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
