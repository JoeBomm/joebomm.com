export default function Header() {
  return (
    <header className="p-4 shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.467 8.467" fill="none" stroke-width="0.45" stroke="currentColor" className="size-8">
            <path d="M1.69 5.112S3.535 9.4 4.015 7.021c.469-2.323.4-7.02.4-7.02"/>
            <path d="M2.85.993S5.827-.06 6.04.28c.215.34-1.862 2.898-1.862 2.898s3.12-.978 3.488-.483C8.034 3.192.734 8.364.734 8.364"/>
          </svg>
          <h1 className="text-xl font-bold text-heading pl-4">Joe Bommarito</h1>    
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="https://github.com/JoeBomm" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
          <a href="mailto:hello@joebomm.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
          <a href="/JoeBommaritoResume.pdf" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}