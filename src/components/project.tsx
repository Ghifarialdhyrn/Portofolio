import imgproject1 from "../../public/project.png";
import imgproject2 from "../../public/project2.png";
import linkimg from "../../public/link.png";

export default function Project() {
  return (
    <>
      <h1 className="text-[40px] text-center text-white py-10 font-bold">
        My <b>Projects</b>
      </h1>
      <div className="w-[80%] h-[545px] flex flex-row justify-center items-center text-white">
        <div className="w-[50%] flex flex-col justify-center items-start">
          <img
            src={imgproject1.src}
            alt=""
            width={500}
            className="border-white border-2 rounded-3xl"
          />
        </div>
        <div className="w-[50%] text-left">
          <h1 className="text-[40px] pb-5 font-bold">01</h1>
          <h2 className="text-[35px] pb-5 font-bold">Replicating Web Gojek</h2>
          <p className="text-justify mb-2">
            Pengembangan front-end replikasi website **Gojek** hingga bagian
            "Skala Kami" dilakukan menggunakan React dan Tailwind CSS untuk
            menciptakan antarmuka yang modern, responsif, dan menyerupai desain
            asli. React digunakan untuk mengelola komponen-komponen antarmuka
            secara modular, sehingga memudahkan pengembangan dan pemeliharaan
            kode. Tailwind CSS dimanfaatkan untuk mendesain elemen visual secara
            efisien dengan pendekatan utility-first yang fleksibel, memastikan
            tata letak yang presisi dan estetika yang konsisten. Bagian "Skala
            Kami" direplika dengan perhatian terhadap detail, termasuk
            elemen-elemen seperti statistik, ikon, dan teks deskriptif, untuk
            menghadirkan pengalaman visual yang mirip dengan website Gojek asli.
            Kombinasi React dan Tailwind CSS memungkinkan hasil yang cepat,
            responsif, dan optimal.
          </p>
          <a href="https://replicating-gojek.vercel.app/">
            <img
              src={linkimg.src}
              alt=""
              width={20}
              height={20}
              className="pt-5"
            />
          </a>
        </div>
      </div>

      <div className="w-[80%] h-[545px] flex flex-row justify-center items-center text-white">
        <div className="w-[50%] text-letf">
          <h1 className="text-[40px] pb-5 font-bold">02</h1>
          <h2 className="text-[35px] pb-5 font-bold">Todo List</h2>
          <p className="text-justify mb-2">
            Pengembangan Front-End Website ToDo List menggunakan React dilakukan
            dengan memanfaatkan kekuatan library ini dalam membangun antarmuka
            yang interaktif dan dinamis. Aplikasi ini memungkinkan pengguna
            untuk menambahkan daftar tugas melalui formulir input yang
            disediakan, memberikan pengalaman yang sederhana dan intuitif.
            Selain itu, fitur untuk menghapus daftar tugas memungkinkan pengguna
            mengelola tugas yang tidak lagi relevan. Tugas yang sudah selesai
            dapat ditandai dengan mudah, misalnya menggunakan checkbox, sehingga
            mempermudah identifikasi tugas yang telah diselesaikan. Untuk
            meningkatkan kegunaan, aplikasi ini juga menampilkan jumlah tugas
            yang sudah selesai, memberikan pengguna wawasan tentang progres
            mereka secara real-time. Dengan React, aplikasi ini menjadi cepat,
            responsif, dan efisien dalam pengelolaan data.
          </p>
          <a href="https://todolist-web-sepia.vercel.app/">
            <img
              src={linkimg.src}
              alt=""
              width={20}
              height={20}
              className="pt-5"
            />
          </a>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-end">
          <img
            src={imgproject2.src}
            alt=""
            width={500}
            className="border-white border-2 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
