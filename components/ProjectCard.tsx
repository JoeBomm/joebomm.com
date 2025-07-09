interface ProjectCardProps {
  title: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <a href="www.google.com" className="flex items-center justify-center size-64 rounded-xl bg-cream text-pistachio">{props.title}</a>
    </>
  )
}