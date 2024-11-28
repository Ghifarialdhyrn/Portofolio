import heroimg1 from "../assets/img-hero.jpg";

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
          I'm Ghifarialdhy Rahmansyah N Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to specimen book.
        </p>
      </div>
      <div className="w-[50%] justify-items-end items-end">
        <img src={heroimg1.src} alt="" width={700} />
      </div>
    </div>
  );
}
