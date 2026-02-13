export default function Hero() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/30">
          Full-Stack Developer
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Hi, I'm a developer skilled in{' '}
          <span className="text-accent">MERN Stack</span> &{' '}
          <span className="text-accent">React Native</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          I build scalable web and mobile applications with TypeScript, React,
          Node.js, and MongoDB. Passionate about clean code and great UX.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-primary font-medium hover:bg-accent-dim transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="rounded-xl bg-card border border-gray-800 p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-400">
            <code>{`const dev = {
  stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  mobile: 'React Native',
  language: 'TypeScript',
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
