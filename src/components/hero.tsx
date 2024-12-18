import heroimg1 from "../../public/img-hero.jpg";

export default function Hero() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center mt-40">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 transition-transform duration-300 hover:scale-105">
          Hello, I'm <b>Ghifarialdhy Rahmansyah N</b>, <br /> a{" "}
          <b>Fullstack Developer</b>
          <br /> Based in <b>Indonesia</b>.
        </h1>
        <p className="text-gray-700 transition-colors duration-300 hover:text-gray-500">
          I enjoy working with both front-end and back-end technologies,
          combining creativity and technical skills to build dynamic and
          user-friendly web applications. My focus is on creating impactful
          digital solutions that enhance user experiences.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={heroimg1.src}
          alt="Hero"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </div>
  );
}
