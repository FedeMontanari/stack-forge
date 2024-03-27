import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { CodeXml } from "lucide-react";

const links: { name: string; href: string }[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Sobre Nosotros",
    href: "/about",
  },
  {
    name: "Proyectos",
    href: "/projects",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primary px-4 py-2 text-secondary">
      <Button asChild>
        <Link href="/" className="text-secondary">
          <CodeXml />
          Stack Forge
        </Link>
      </Button>
      <div className="flex flex-row items-center">
        {links.map((v, i) => {
          return (
            <Button className="text-secondary" variant="link" key={i} asChild>
              <Link href={v.href}>{v.name}</Link>
            </Button>
          );
        })}
        <ModeToggle />
      </div>
    </nav>
  );
}
