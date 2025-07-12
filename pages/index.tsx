import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Header />
      <div 
      className={`${geistSans.className} ${geistMono.className}flex flex-col items-center  p-4 gap-4`}>
        <main className="flex flex-col items-center gap-12">
          <About/>
          <Projects/>
        </main>
      </div>
    </>
  );
}
