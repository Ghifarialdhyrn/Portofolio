import imgexperience1 from "../../public/experience1.png";
import imgexperience2 from "../../public/experience2.png";

export default function Experience() {
  return (
    <div className="w-[90%] mx-auto flex flex-col justify-start items-center py-10 xl:h-[692px] sm:h-[1000px]">
      <h1 className="text-[30px] md:text-[40px] text-center text-white font-bold mb-5 animate-fade-in">
        My <b>Experience</b>
      </h1>
      {[
        {
          img: imgexperience1.src,
          title: "Web Developer (Human Capital Services) at PT Len Industri",
          description:
            "Saya pernah menjalani program internship di PT Len Industri, di mana saya ditempatkan sebagai web developer pada divisi Human Capital Services. Selama masa tersebut, saya bertanggung jawab untuk mengembangkan dan memelihara aplikasi berbasis web yang mendukung berbagai proses manajemen sumber daya manusia.",
        },
        {
          img: imgexperience2.src,
          title:
            "Adding Feature for Website Berbanjar (Project Dosen) at Rekayasa Perangkat Lunak UPI",
          description:
            "Website Berbanjar ini merupakan situs yang dikembangkan sebagai bagian dari tugas atau proyek yang diberikan oleh dosen. Penambahan fitur dimaksudkan untuk meningkatkan fungsionalitas dan pengalaman pengguna dari website tersebut.",
        },
      ].map((exp, index) => (
        <div
          key={index}
          className="border-white border-2 w-full md:w-[90%] h-auto my-5 p-5 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/10 animate-slide-in"
        >
          <div className="flex flex-row items-center mb-3">
            <img
              src={exp.img}
              alt=""
              width={60}
              className="mr-3 rounded-full transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-white font-bold text-xl">{exp.title}</h2>
          </div>
          <p className="text-white text-justify">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
