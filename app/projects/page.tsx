import ProjectCard from "@/components/ProjectCard";

interface NameIcon {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  stack: NameIcon[];
  imageSrc: string;
  href: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Guess the Brand",
    stack: [
      {
        name: "Typescript",
        icon: "siTypescript",
      },
      {
        name: "Next.JS",
        icon: "siNextdotjs",
      },
      {
        name: "Prisma",
        icon: "siPrisma",
      },
      {
        name: "Tailwind",
        icon: "siTailwindcss",
      },
      {
        name: "Shadcn-ui",
        icon: "siShadcnui",
      },
    ],
    imageSrc:
      "https://cdn.discordapp.com/attachments/1222902906286510181/1222912694638870559/image.png?ex=6617f133&is=66057c33&hm=5e0073b6f79ec54eb56173a1b985bdd118b30b5217589c80c79dafd7f21083f1&",
    href: "https://guessthebrand.vercel.app",
    description: "Minijuego para adivinar la empresa segun el logo",
  },
  {
    name: "Core Keeper Cooking Guide",
    stack: [
      {
        name: "Typescript",
        icon: "siTypescript",
      },
      {
        name: "Next.JS",
        icon: "siNextdotjs",
      },
      {
        name: "Prisma",
        icon: "siPrisma",
      },
      {
        name: "Tailwind",
        icon: "siTailwindcss",
      },
      {
        name: "Shadcn-ui",
        icon: "siShadcnui",
      },
    ],
    imageSrc:
      "https://cdn.discordapp.com/attachments/1222902906286510181/1222912425720942663/image.png?ex=6617f0f2&is=66057bf2&hm=ee37450f0eab864a1fea3ceb57554cf02c1ff0dbf2d7d54d59951e519f1b0c18&",
    href: "https://core-keeper-cooking.vercel.app/",
    description: "Aplicación guia para un videojuego.",
  },
];

export default function Projects() {
  return (
    <main className="flex h-screen w-full flex-col items-center gap-6 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Proyectos
      </h1>
      <section className="flex flex-row gap-3">
        {projects.map((v, i) => (
          <ProjectCard data={v} key={i} />
        ))}
      </section>
    </main>
  );
}
