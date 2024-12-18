import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skill from "@/components/skills";
import Testimoni from "@/components/testimoni";

export default function Home() {
  return (
    <div>
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
        id="experience"
        className="bg-black w-full flex justify-center items-center"
      >
        <Experience />
      </section>

      <section id="about" className="w-full flex justify-center items-center">
        <About />
      </section>

      <section
        id="project"
        className="bg-black w-full xl:h-[auto] pb-20 sm:h-[auto] sm:mb-20 flex flex-col justify-start items-center gap-10"
      >
        <Project />
      </section>

      <section
        id="testimonial"
        className="w-full h-[692px] flex justify-center items-center"
      >
        <Testimoni />
      </section>

      <section
        id="contact"
        className="w-full h-[692px] flex justify-center items-center"
      >
        <Contact />
      </section>
    </div>
  );
}
