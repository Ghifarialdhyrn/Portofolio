import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="w-[80%] text-white flex flex-row justify-between place-self-center font-bold">
      <a href="#hero">
        <img src={logo.src} alt="" width={40} />
      </a>
      <ul className="flex flex-row gap-10 align-middle items-center text-[17px]">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <button className="bg-white text-black px-4 py-2 rounded-lg flex flex-row">
        Resume
      </button>
    </nav>
  );
}
