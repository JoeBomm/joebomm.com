import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <>
      <div className="items-center flex flex-col gap-2">
        <SectionHeader title="Projects"/>
        <div className="grid grid-cols-3 gap-6">
          <ProjectCard title="1"/>
          <ProjectCard title="2"/>
          <ProjectCard title="3"/>
          <ProjectCard title="4"/>
          <ProjectCard title="5"/>
          <ProjectCard title="6"/>
        </div>
      </div>
    </>
  )
}