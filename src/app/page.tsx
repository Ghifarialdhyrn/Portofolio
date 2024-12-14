import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Skill from "@/components/skills";
import Testimoni from "@/components/testimoni";

export default function Home() {
  return (
    <div>
      <header className="bg-black w-full h-[80px] flex justify-center items-center fixed">
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
        className="bg-black w-full xl:h-[1300px] sm:h-[2500px] flex flex-col justify-start items-center"
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
