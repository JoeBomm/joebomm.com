import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <>
      <div className="items-center flex flex-col gap-2">
        <SectionHeader title="Contact"/>
        <div className="flex gap-10">
          <a href="mailto:hello@joebomm.com" className="text-carrot-orange hover:underline">Send me an email</a>
          <a href="tel+13133388969" className="text-carrot-orange hover:underline">Give me a call</a>
        </div>
      </div>
    </>
  )
}