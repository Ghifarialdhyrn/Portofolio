import imgabout from "@/assets/about-img.png";

export default function About() {
  return (
    <div className="w-[80%] h-[545px] flex flex-row justify-center items-center text-white">
      <div className="w-[50%] flex flex-col justify-center items-start">
        <img
          src={imgabout.src}
          alt=""
          width={500}
          className="border-white border-2"
        />
      </div>
      <div className="w-[50%] text-left">
        <h1 className="text-[35px] pb-10">
          About <b>Me</b> <br />
        </h1>
        <p className="text-justify mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
          temporibus animi! Est cumque repellendus laboriosam? Quia, vel! Ipsam
          rem repellat illo aut nemo. Molestiae exercitationem voluptas ex saepe
          hic accusantium recusandae eligendi quasi quos, ipsum magni porro ab
          at velit nemo assumenda necessitatibus nulla eaque impedit ratione
          dolore odit.
        </p>
        <p className="text-justify my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, a
          dolores laboriosam quis fugit nemo rem eaque, molestiae voluptatum ut
          expedita ea sint nihil earum fuga ab dignissimos vitae rerum placeat
          officiis quos odit quam! Cupiditate error temporibus provident fuga
          perferendis qui et! Enim, magni incidunt deserunt officiis repudiandae
          asperiores.
        </p>
        <p className="text-justify mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quia
          blanditiis hic, eligendi quam dignissimos nemo distinctio natus
          consectetur. Recusandae facilis aliquid amet expedita eaque,
          voluptatum beatae blanditiis modi nobis error repellat enim labore aut
          nisi iste? Repellendus voluptatum, expedita nisi adipisci modi sint
          voluptas odit architecto accusamus doloribus aliquam!
        </p>
      </div>
    </div>
  );
}
