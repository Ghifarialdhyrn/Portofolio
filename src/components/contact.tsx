import imgcontact1 from "../../public/contact1.png";
import imgcontact2 from "../../public/contact2.png";
import imgcontact3 from "../../public/contact3.png";
import imgcontact4 from "../../public/contact4.png";

export default function Contact() {
  return (
    <div className="w-[80%] h-[545px] flex flex-row justify-center items-center">
      <div className="w-[50%]">
        <form action="" className="">
          <input
            type="text"
            placeholder="Your Name"
            className="border-black border-2 w-[500px] h-[56px] rounded-lg pl-5 mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-black border-2 w-[500px] h-[56px] rounded-lg pl-5 mb-5"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border-black border-2 w-[500px] h-[56px] rounded-lg pl-5 mb-5"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border-black border-2 w-[500px] h-[140px] rounded-lg pl-5 mb-5"
          />
        </form>
        <div className="gap-[25px] flex flex-row">
          <button className="bg-black text-white w-[173px] h-[56px] font-bold text-xl rounded-md pb-1">
            Get In Touch
          </button>
          <button className="bg-black text-white w-[56px] h-[56px] font-bold text-xl rounded-md pb-1 justify-center align-middle items-center">
            <a href="https://www.linkedin.com/in/ghifarialdhyrn/">
              <img
                src={imgcontact1.src}
                alt=""
                width={35}
                className="ml-[11px] pt-1"
              />
            </a>
          </button>
          <button className="bg-black text-white w-[56px] h-[56px] font-bold text-xl rounded-md pb-1">
            <a href="https://github.com/Ghifarialdhyrn">
              <img
                src={imgcontact2.src}
                alt=""
                width={35}
                className="ml-[11px] pt-1"
              />
            </a>
          </button>
          <button className="bg-black text-white w-[56px] h-[56px] font-bold text-xl rounded-md pb-1">
            <a href="https://instagram.com/ghifarialdhy">
              <img
                src={imgcontact3.src}
                alt=""
                width={35}
                className="ml-[11px] pt-1"
              />
            </a>
          </button>
          <button className="bg-black text-white w-[56px] h-[56px] font-bold text-xl rounded-md pb-1">
            <a href="https://www.tiktok.com/@ghifarialdhyrn">
              <img
                src={imgcontact4.src}
                alt=""
                width={35}
                className="ml-[11px] pt-1"
              />
            </a>
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <h1 className="font-bold text-[55px] text-black">
          Lets talk for <br /> Something special
        </h1>
        <p className="text-gray-500 py-5">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <h2 className="font-bold text-[25px] text-black">
          Ghifarialdhy@mail.com <br /> 08123456789
        </h2>
      </div>
    </div>
  );
}
