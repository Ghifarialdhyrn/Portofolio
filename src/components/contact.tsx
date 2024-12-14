import imgcontact1 from "../../public/contact1.png";
import imgcontact2 from "../../public/contact2.png";
import imgcontact3 from "../../public/contact3.png";
import imgcontact4 from "../../public/contact4.png";

export default function Contact() {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center py-10">
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="border-black border-2 w-full h-[56px] rounded-lg pl-5 mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-black border-2 w-full h-[56px] rounded-lg pl-5 mb-5"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border-black border-2 w-full h-[56px] rounded-lg pl-5 mb-5"
          />
          <textarea
            placeholder="Your Message"
            className="border-black border-2 w-full h-[140px] rounded-lg pl-5 mb-5"
          />
          <button className="bg-black text-white w-full h-[56px] font-bold text-xl rounded-md">
            Get In Touch
          </button>
        </form>
        <div className="flex gap-3 mt-5">
          {[imgcontact1, imgcontact2, imgcontact3, imgcontact4].map(
            (img, index) => (
              <a
                key={index}
                href={
                  [
                    "https://www.linkedin.com/in/ghifarialdhyrn/",
                    "https://github.com/Ghifarialdhyrn",
                    "https://instagram.com/ghifarialdhy",
                    "https://www.tiktok.com/@ghifarialdhyrn",
                  ][index]
                }
              >
                <img
                  src={img.src}
                  alt=""
                  width={35}
                  className="bg-black text-white rounded-md p-2"
                />
              </a>
            )
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 text-left ml-20">
        <h1 className="font-bold text-[30px] md:text-[55px] text-black">
          Let's talk for <br /> Something special
        </h1>
        <p className="text -gray-500 py-5">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <h2 className="font-bold text-[20px] md:text-[25px] text-black">
          Ghifarialdhy@mail.com <br /> 08123456789
        </h2>
      </div>
    </div>
  );
}
