export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-14 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded">
        Get In Touch
      </h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-gray-400 text-lg">
          I'm open to new opportunities and collaborations. Whether you have a
          project in mind or just want to connect — let's talk!
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:johnkipruto157@gmail.com"
            className="px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
          >
            johnkipruto157@gmail.com
          </a>
          <a
            href="https://github.com/John-Kipruto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-kipruto-81005121b/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
