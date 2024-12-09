import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Socials() {
  return (
    <div className="flex space-x-4 items-center justify-center sm:justify-start">
      <Link
        href="https://github.com/Tenico05"
        target="_blank"
        rel="noopener noreferrer"
        className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200"
        style={{ animationDelay: '0s' }}
        aria-label="GitHub profile"
      >
        <Github className="w-10 h-10 text-[var(--color-text-light)]" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/nicolai-medbø-0795b0276/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200"
        style={{ animationDelay: '0.5s' }}
        aria-label="LinkedIn profile"
      >
        <Linkedin className="w-10 h-10 text-[var(--color-text-light)]" />
      </Link>
      <Link
        href="mailto:tenico05@gmail.com"
        className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200"
        style={{ animationDelay: '1s' }}
        aria-label="Send email"
      >
        <Mail className="w-10 h-10 text-[var(--color-text-light)]" />
      </Link>
    </div>
  )
}
