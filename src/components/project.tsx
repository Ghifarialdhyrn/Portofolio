import imgproject1 from "@/assets/project.png";
import imgproject2 from "@/assets/project2.png";
import linkimg from "@/assets/link.png";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
            temporibus animi! Est cumque repellendus laboriosam? Quia, vel!
            Ipsam rem repellat illo aut nemo. Molestiae exercitationem voluptas
            ex saepe hic accusantium recusandae eligendi quasi quos, ipsum magni
            porro ab at velit nemo assumenda necessitatibus nulla eaque impedit
            ratione dolore odit.
          </p>
          <a href="#">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
            temporibus animi! Est cumque repellendus laboriosam? Quia, vel!
            Ipsam rem repellat illo aut nemo. Molestiae exercitationem voluptas
            ex saepe hic accusantium recusandae eligendi quasi quos, ipsum magni
            porro ab at velit nemo assumenda necessitatibus nulla eaque impedit
            ratione dolore odit.
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
