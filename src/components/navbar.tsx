import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-[80%] flex flex-row justify-between place-self-center font-bold">
      <img src={logo.src} alt="" width={40} />
      <ul className="flex flex-row gap-10 align-middle items-center text-[17px]">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded-lg flex flex-row">
        Resume
      </button>
    </nav>
  );
}
