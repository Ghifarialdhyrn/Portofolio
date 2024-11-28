import imgexperience1 from "@/assets/experience1.png";
import imgexperience2 from "@/assets/experience2.png";

export default function Experience() {
  return (
    <div className="w-[80%] h-[545px] flex flex-col justify-start items-center">
      <h1 className="text-[40px] text-center text-white font-bold">
        My <b>Experience</b>
      </h1>
      <div className="border-white border-2 w-[90%] h-[170px] mt-10 mb-5">
        <div className="flex flex-row ml-10 my-5">
          <img src={imgexperience1.src} width={60} />
          <h2 className="text-white ml-10 align-middle font-bold text-xl">
            Web Developer (Human Capital Services) at PT Len Industri
          </h2>
        </div>
        <p className="text-white mx-10 text-justify">
          Saya pernah menjalani program internship di PT Len Industri, di mana
          saya ditempatkan sebagai web developer pada divisi Human Capital
          Services. Selama masa tersebut, saya bertanggung jawab untuk
          mengembangkan dan memelihara aplikasi berbasis web yang mendukung
          berbagai proses manajemen sumber daya manusia.
        </p>
      </div>
      <div className="border-white border-2 w-[90%] h-[170px] my-10">
        <div className="flex flex-row ml-10 my-5">
          <img src={imgexperience2.src} width={40} />
          <h2 className="text-white ml-16 mt-1 align-middle font-bold text-xl">
            Adding Feature for Website Berbanjar (Project Dosen) at Rekayasa
            Perangkat Lunak UPI
          </h2>
        </div>
        <p className="text-white mx-10 text-justify">
          Website Berbanjar ini merupakan situs yang dikembangkan sebagai bagian
          dari tugas atau proyek yang diberikan oleh dosen. Penambahan fitur
          dimaksudkan untuk meningkatkan fungsionalitas dan pengalaman pengguna
          dari website tersebut, sehingga dapat memenuhi kebutuhan yang lebih
          baik atau mendukung tujuan proyek yang sedang dijalankan.
        </p>
      </div>
    </div>
  );
}
