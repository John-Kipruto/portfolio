const projects = [
  {
    title: "Admin Dashboard",
    description:
      "Full-featured admin panel with analytics, user management, and data visualization.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x340/1a1a24/00d4aa?text=Admin+Dashboard",
    github: "https://github.com",
    liveLink: "https://lovers-admin-dashboard.vercel.app/",
  },
  {
    title: "E-commerce",
    description:
      "Full-stack MERN e-commerce app with auth, payments, and product catalog.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://placehold.co/600x340/1a1a24/00d4aa?text=E-commerce",
    github: "https://github.com",
    liveLink: "https://tech-store-commerce.vercel.app/",
  },
  {
    title: "Elite Cinemas",
    description:
      "Movie discovery app with search, ratings, and watchlist. Built with MERN stack.",
    stack: ["React", "Node.js", "MongoDB", "TMDB API"],
    image: "https://placehold.co/600x340/1a1a24/00d4aa?text=Elite+Cinemas",
    github: "https://github.com",
    liveLink: "https://elite-cinemas.vercel.app/",
  },
];

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
            className="rounded-xl bg-card border border-gray-800 overflow-hidden hover:border-accent/30 transition-colors flex flex-col"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 flex-1 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-accent transition-colors text-sm font-medium"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors text-sm font-medium"
                >
                  <ExternalLinkIcon />
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
