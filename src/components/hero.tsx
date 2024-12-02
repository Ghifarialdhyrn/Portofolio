import heroimg1 from "../../public/img-hero.jpg";

export default function Hero() {
  return (
    <div className="w-[80%] h-[545px] flex flex-row justify-center items-center">
      <div className="w-[50%] flex flex-col justify-center items-start">
        <h1 className="text-[35px] text-left pb-10">
          Hello, I'am <b>Ghifarialdhy Rahmansyah N</b> <br />{" "}
          <b>Fullstack Developer</b>
          <br /> Based in <b>Indonesia.</b>
        </h1>
        <p>
          Ghifarialdhy enjoys working with both front-end and back-end
          technologies, combining creativity and technical skills to build
          dynamic and user-friendly web applications. With a focus on continuous
          learning and growth in the ever-evolving field of web development, he
          aims to contribute to impactful digital solutions that enhance user
          experiences and drive technological innovation.
        </p>
      </div>
      <div className="w-[50%] justify-items-end items-end">
        <img src={heroimg1.src} alt="" width={700} />
      </div>
    </div>
  );
}
