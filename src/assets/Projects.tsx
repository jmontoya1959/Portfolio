import React from "react";
import CompareImage from "react-compare-image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Game Shop Redesign",
    description:
      "This project involved redesigning a local game shop's website from scratch. I started with a minimal, outdated layout and transformed it into a modern e-commerce experience using Figma and frontend development tools. The final product was fully responsive, accessible, and tailored to the client's brand.",
    beforeImage: "/Images/Meeple.png",
    afterImage: "/Images/MeepleNew.jpg",
    image: "",
  },
  {
    id: 2,
    title: "Product Page Design",
    description:
      "On this product page, I focused on highlighting the featured item prominently, using color and scale to draw attention. I emphasized the member discount with a distinct accent color to make the savings clear, and I showcased related games using the store's brand palette to create a cohesive, eye-catching experience.",
    image: "/Images/Product.jpg",
  },
];

export default function Projects(): React.JSX.Element {
  function scale(factor: number): string {
    return `scale(${factor})`;
  }

  return (
    <section className="bg-[#fff9ed] py-20 text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg border border-black rounded-lg p-6 flex flex-col h-full "
          >
            {project.beforeImage && project.afterImage ? (
              <div className=" rounded-xl mb-4 relative overflow-hidden w-full max-w-2x1 aspect-[] mx-auto flex items-center justify-center">
  <CompareImage
    leftImage={project.beforeImage}
    rightImage={project.afterImage}
    sliderLineColor="#2c2cc3"
    sliderLineWidth={3}
    hover={true}
    leftImageCss={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
    }}
    rightImageCss={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      transform: scale(1.07), // Slightly zoomed in for emphasis
    }}
  />
</div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-[475px] h-[520px] object-contain rounded  mb-8 mx-auto flex items-center justify-center"
              />
            )}
            <h3 className="text-2xl font-bold text-[#000046] mt-4 mb-2"> 
              {project.title}
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed">
              {project.description.split(/(Figma and frontend development tools|using color and scale to draw attention|store's brand palette)/g).map((part, i) => (
                <span
                  key={i}
                  className={
                    part === "Figma and frontend development tools" ||
                    part === "using color and scale to draw attention" ||
                    part === "store's brand palette"
                      ? "text-[#2c2cc3] font-medium"
                      : undefined
                  }
                >
                  {part}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
