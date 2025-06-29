import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Joe Bommarito</h1>
        <nav className="flex items-center space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/JoeBommaritoResume.pdf" target="_blank" rel="noopener noreferrer">
            <Image
              src="/file.svg"
              alt="Resume"
              width={24}
              height={24}
             />
          </a>
          <a href="https://github.com/JoeBomm" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github-icon-white.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
        </nav>
      </div>
    </header>
  )
}