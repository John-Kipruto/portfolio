const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'React Native', 'Next.js', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Tools & More',
    skills: ['Git', 'Docker', 'AWS', 'Jest', 'Vite'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-14 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl bg-card border border-gray-800 p-6 hover:border-accent/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-accent mb-4">{category.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
