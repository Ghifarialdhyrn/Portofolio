import imgskill1 from "../assets/skills1.png";

export default function Skill() {
  return (
    <div className="w-[80%] h-[545px] flex flex-col">
      <div className="w-full h-[20%] flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-left pb-10 font-bold">My Skills</h1>
      </div>
      <div className="w-full h-[80%] text-start flex flex-row gap-40">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="w-full h-[80%] text-start flex flex-row gap-40 pt-20">
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
}
