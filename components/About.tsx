import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <>
      <div className="items-center flex flex-col gap-4">
        <SectionHeader title="About"/>
        <div className="w-256">
          I&apos;m a full stack software engineer with experience building scalable backend services, APIs, and UIs to drive engagement. 
          I&apos;m passionate about solving meaningful problems and learning through ownership. 
          
        </div>
        <div>Outside of work, I enjoy traveling, tinkering, and cooking.</div>
      </div>
    </>
  )
}