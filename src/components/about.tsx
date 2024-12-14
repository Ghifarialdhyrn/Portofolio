import imgabout from "../../public/about-img.png";

export default function About() {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center py-10 h-[1000px]">
      {" "}
      {/* Set height of the container */}
      <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
        <img
          src={imgabout.src}
          alt="About Me"
          className="border-black border-4 rounded-xl w-full xl:max-w-[500px] xl:h-[600px] sm:max-w-[200px] sm:h-[400px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-[30px] md:text-[35px] pb-5">
          About <b>Me</b>
        </h1>
        <p className="text-justify mb-2">
          Ghifarialdhy Rahmansyah Nitikusumah adalah seorang mahasiswa yang
          berasal dari Kota Bandung, Jawa Barat, dan kini menempuh pendidikan di
          Universitas Pendidikan Indonesia (UPI) dengan jurusan Rekayasa
          Perangkat Lunak. Selain fokus pada studinya, Ghifarialdhy memiliki
          berbagai hobi seperti olahraga, travelling, dan gaming.
        </p>
        <p className="text-justify my-4">
          Sejak awal, minat Ghifarialdhy terhadap dunia coding muncul ketika ia
          diperkenalkan oleh kakak tertuanya. Pengalaman tersebut membuka pintu
          baginya untuk lebih mendalami dunia teknologi, dan akhirnya, ia
          memilih jurusan Rekayasa Perangkat Lunak sebagai langkah untuk
          mengasah kemampuan di bidang tersebut.
        </p>
        <p className="text-justify mt-2">
          Dengan berbagai hobi dan minat yang dimilikinya, Ghifarialdhy berharap
          dapat mengaplikasikan keterampilan dan pengalamannya untuk menjadi
          seorang web developer profesional.
        </p>
      </div>
    </div>
  );
}
