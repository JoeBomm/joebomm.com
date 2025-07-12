export interface ProjectCardProps {
  title: string,
  url: string,
  imageRef?: string,
  description?: string,
  devLogUrl?: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <div className="flex flex-col">
        <a href={props.url} className="p-4 bg-tea-green size-64 rounded-xl text-pistachio hover:shadow-pistachio hover:shadow-md">
          <div>
            <div className="text-4xl">
              {props.title}
            </div>
            <div className="pt-4">
              {props.description}
            </div>
          </div>
        </a>
        {props.devLogUrl ? <a href={props.devLogUrl} className="text-center hover:underline">devlog</a> : <></>}
      </div>
    </>
  )
}