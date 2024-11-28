import imgabout from "@/assets/about-img.png";

export default function About() {
  return (
    <div className="w-[80%] h-[545px] flex flex-row justify-center items-center">
      <div className="w-[50%] flex flex-col justify-center items-start">
        <img
          src={imgabout.src}
          alt=""
          width={450}
          className="border-black border-4 ml-10 rounded-xl"
        />
      </div>
      <div className="w-[50%] text-left">
        <h1 className="text-[35px] pb-10">
          About <b>Me</b> <br />
        </h1>
        <p className="text-justify mb-2">
          Ghifarialdhy Rahmansyah Nitikusumah adalah seorang mahasiswa yang
          berasal dari Kota Bandung, Jawa Barat, dan kini menempuh pendidikan di
          Universitas Pendidikan Indonesia (UPI) dengan jurusan Rekayasa
          Perangkat Lunak. Selain fokus pada studinya, Ghifarialdhy memiliki
          berbagai hobi seperti olahraga, travelling, dan gaming. Hobi-hobi
          tersebut memberinya kesempatan untuk bersantai, mengeksplorasi dunia,
          dan menikmati waktu luang dengan cara yang menyenangkan.
        </p>
        <p className="text-justify my-4">
          Sejak awal, minat Ghifarialdhy terhadap dunia coding muncul ketika ia
          diperkenalkan oleh kakak tertuanya. Pengalaman tersebut membuka pintu
          baginya untuk lebih mendalami dunia teknologi, dan akhirnya, ia
          memilih jurusan Rekayasa Perangkat Lunak sebagai langkah untuk
          mengasah kemampuan di bidang tersebut. Khususnya, Ghifarialdhy sangat
          tertarik dengan bidang Web Development, yang menjadi fokus utama dalam
          perjalanan karirnya. Ia berharap dapat mengembangkan keterampilan
          teknisnya dalam membuat dan mengelola aplikasi web, yang menjadi
          tujuan karir jangka panjangnya.
        </p>
        <p className="text-justify mt-2">
          Dengan berbagai hobi dan minat yang dimilikinya, Ghifarialdhy berharap
          dapat mengaplikasikan keterampilan dan pengalamannya untuk menjadi
          seorang web developer profesional. Selain terus mengasah kemampuan
          coding, ia juga berambisi untuk berkarir dalam industri teknologi,
          khususnya di bidang pengembangan web. Semangatnya untuk terus belajar
          dan berkembang di dunia pemrograman memberi harapan besar untuk masa
          depan yang sukses di bidang ini.
        </p>
      </div>
    </div>
  );
}
