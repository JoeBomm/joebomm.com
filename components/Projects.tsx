import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {

  const projects: ProjectCardProps[] = [
    {title: "Vinyl Boys", url: "https://github.com/JoeBomm/vinylboys", imageRef: "", description: "Users make groups and select albums that fit a theme that is served by the website", devLogUrl: "https://github.com/JoeBomm/vinylboys/wiki/devlog"},
  ];

  const projectCount = projects.length

  const getGridCols = () => {
  if (projectCount === 1) return "grid-cols-1";
  if (projectCount === 2) return "grid-cols-2";
  return "grid-cols-3";
};
  

  return (
    <>
      <div className="items-center flex flex-col gap-2">
        <SectionHeader title="Projects"/>
        <div className={`grid ${getGridCols()} gap-6`}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.title}
              title={project.title} 
              url={project.url} 
              imageRef={project.imageRef} 
              description={project.description} 
              devLogUrl={project.devLogUrl}
            />
          ))}
        </div>
      </div>
    </>
  )
}