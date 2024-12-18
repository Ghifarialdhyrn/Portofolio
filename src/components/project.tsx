import imgproject1 from "../../public/project.png";
import imgproject2 from "../../public/project2.png";
import imgproject3 from "../../public/project3.png";
import imgproject4 from "../../public/project4.png";
import linkimg from "../../public/link.png";

export default function Project() {
  return (
    <>
      <h1 className="text-[40px] text-center text-white py-10 font-bold animate__animated animate__fadeIn">
        My <b>Projects</b>
      </h1>

      {/* First Project */}
      <div className="w-[80%] h-auto flex flex-col sm:flex-row justify-center items-center text-white mb-10 animate__animated animate__fadeIn">
        <div className="w-full sm:w-[50%] flex justify-center mb-5 sm:mb-0">
          <img
            src={imgproject1.src}
            alt="Project 1"
            width={500}
            className="border-white border-2 rounded-3xl transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full sm:w-[50%] text-left">
          <h1 className="text-[40px] pb-5 font-bold">01</h1>
          <h2 className="text-[35px] pb-5 font-bold">Replicating Web Gojek</h2>
          <p className="text-justify mb-2">
            Pengembangan front-end replikasi website <b>Gojek</b> hingga bagian
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
              alt="Project Link"
              width={20}
              height={20}
              className="pt-5 transform transition duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>

      {/* Second Project */}
      <div className="w-[80%] h-auto flex flex-col sm:flex-row justify-center items-center text-white animate__animated animate__fadeIn">
        <div className="w-full sm:w-[50%] text-left">
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
          <a href="https://todolist-web-sooty.vercel.app/">
            <img
              src={linkimg.src}
              alt="Project Link"
              width={20}
              height={20}
              className="pt-5 transform transition duration-300 hover:scale-110"
            />
          </a>
        </div>
        <div className="w-full sm:w-[50%] flex justify-center mt-5 sm:mt-0">
          <img
            src={imgproject2.src}
            alt="Project 2"
            width={500}
            className="border-white border-2 rounded-3xl xl:mb-0 sm:mb-20 transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Third Project */}
      <div className="w-[80%] h-auto flex flex-col sm:flex-row justify-center items-center text-white mb-10 animate__animated animate__fadeIn">
        <div className="w-full sm:w-[50%] flex justify-center mb-5 sm:mb-0">
          <img
            src={imgproject3.src}
            alt="Project 1"
            width={500}
            className="border-white border-2 rounded-3xl transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full sm:w-[50%] text-left">
          <h1 className="text-[40px] pb-5 font-bold">03</h1>
          <h2 className="text-[35px] pb-5 font-bold">Traveling Blog</h2>
          <p className="text-justify mb-2">
            Project ini adalah sebuah website traveling blog yang dirancang
            untuk memberikan informasi dan pengalaman perjalanan kepada para
            pengunjung. Website ini mencakup berbagai artikel mengenai destinasi
            wisata, tips perjalanan, dan rekomendasi aktivitas di berbagai
            lokasi. Dengan antarmuka yang ramah pengguna dan desain yang
            responsif, pengunjung dapat dengan mudah mencari artikel berdasarkan
            kategori atau lokasi. Fitur interaktif seperti pencarian, komentar,
            dan berbagi sosial media juga disediakan untuk meningkatkan
            keterlibatan pengguna. Tujuan utama dari proyek ini adalah untuk
            menginspirasi orang untuk menjelajahi dunia dan berbagi pengalaman
            perjalanan mereka.
          </p>
          <a href="https://travelingblogs.netlify.app/">
            <img
              src={linkimg.src}
              alt="Project Link"
              width={20}
              height={20}
              className="pt-5 transform transition duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>

      {/* Fourth Project */}
      <div className="w-[80%] h-auto flex flex-col sm:flex-row justify-center items-center text-white animate__animated animate__fadeIn">
        <div className="w-full sm:w-[50%] text-left">
          <h1 className="text-[40px] pb-5 font-bold">04</h1>
          <h2 className="text-[35px] pb-5 font-bold">
            Ghifar's Tech Company Profile
          </h2>
          <p className="text-justify mb-2">
            Project ini adalah website profil perusahaan teknologi Ghifar's Tech
            yang dirancang untuk memberikan gambaran menyeluruh tentang layanan
            dan produk yang ditawarkan perusahaan. Website ini menyajikan
            informasi mengenai visi, misi, serta keahlian Ghifar's Tech dalam
            bidang pengembangan perangkat lunak dan solusi teknologi. Dilengkapi
            dengan portofolio proyek-proyek sebelumnya, testimoni klien, serta
            rincian kontak, website ini bertujuan untuk memperkenalkan
            perusahaan kepada calon klien dan mitra bisnis. Desain yang modern
            dan responsif memastikan tampilan website yang menarik dan mudah
            diakses di berbagai perangkat, memberikan pengalaman yang memuaskan
            bagi pengunjung.
          </p>
          <a href="https://ghifartechcompany.netlify.app/">
            <img
              src={linkimg.src}
              alt="Project Link"
              width={20}
              height={20}
              className="pt-5 transform transition duration-300 hover:scale-110"
            />
          </a>
        </div>
        <div className="w-full sm:w-[50%] flex justify-center mt-5 sm:mt-0">
          <img
            src={imgproject4.src}
            alt="Project 2"
            width={500}
            className="border-white border-2 rounded-3xl xl:mb-0 sm:mb-20 transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}
