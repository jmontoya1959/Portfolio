import React from "react";

const skills: { name: string; icon: string }[] = [
  { name: "GitHub", icon: "/icons/github.svg"},
  { name: "React", icon: "/icons/react.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "CSS", icon: "/icons/css3.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
];

export default function Skills(): React.JSX.Element {
  return (
    <section className="bg-gradient-to-b from-[#5dd886] to-[#fff9ed] py-10 rounded-xl max-w-8xl mx-auto" >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <span className="text-sm font-medium text-[#000046]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
