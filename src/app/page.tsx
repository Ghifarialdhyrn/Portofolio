import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Skill from "@/components/skills";

export default function Home() {
  return (
    <div>
      <header className="w-full h-[80px] flex justify-center items-center sticky">
        <Navbar />
      </header>

      <section
        id="hero"
        className=" w-full h-[692px] pt-[80px] flex justify-center items-center"
      >
        <Hero />
      </section>

      <section
        id="skill"
        className="w-full h-[692px] flex justify-center items-center"
      >
        <Skill />
      </section>

      <section
        id="about"
        className="bg-black w-full h-[692px] flex justify-center items-center"
      >
        <About />
      </section>

      <section
        id="project"
        className="bg-black w-full h-[1800px] flex flex-col justify-center items-center"
      >
        <Project />
      </section>
    </div>
  );
}
