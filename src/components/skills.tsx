export default function Skill() {
  return (
    <div className="w-[80%] h-[545px] flex flex-col mt-56">
      <div className="w-full h-[20%] flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-left pb-10 font-bold animate-fade-in">
          My Skills
        </h1>
      </div>

      {/* Marquee effect for the skill images */}
      <div className="w-full h-[80%] overflow-hidden">
        <div className="marquee flex gap-40 animate-marquee mt-20">
          {[
            "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
            "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-[150px] h-[150px] rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
