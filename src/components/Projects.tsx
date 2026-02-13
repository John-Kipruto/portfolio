const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack MERN e-commerce app with auth, payments, and admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description:
      'Cross-platform mobile app built with React Native and Firebase sync.',
    stack: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    title: 'API Gateway',
    description:
      'Scalable REST/GraphQL API gateway with rate limiting and caching.',
    stack: ['Node.js', 'Express', 'Redis', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-14 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl bg-card border border-gray-800 p-6 hover:border-accent/30 transition-colors flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 flex-1 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
