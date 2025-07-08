import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

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
        className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <h1>Hi, I&apos;m Joe</h1>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <About/>
          <Projects/>
          <Contact/>         
        </main>
      </div>
    </>
  );
}
