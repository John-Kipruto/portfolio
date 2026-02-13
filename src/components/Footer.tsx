export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© {year} Full-Stack Developer Portfolio. Built with React & TypeScript.</p>
    </footer>
  )
}
