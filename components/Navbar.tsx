"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { CodeXml, Menu } from "lucide-react";
import { useState } from "react";

import "animate.css";

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
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={`-z-10 h-14 w-full py-2 ${open ? "" : "hidden"}`}></div>
      <nav
        className={`bg-primary px-4 py-2 text-secondary ${open ? "absolute top-0 z-50 w-full" : ""}`}
      >
        <div className="flex items-center justify-between">
          <Button className="text-2xl" asChild>
            <Link href="/" className="text-secondary">
              <CodeXml size={30} />
              Stack Forge
            </Link>
          </Button>
          <Button
            className="text-secondary lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
          <div className="hidden flex-row items-center lg:flex">
            {links.map((v, i) => {
              return (
                <Button
                  className="text-secondary"
                  variant="link"
                  key={i}
                  asChild
                >
                  <Link href={v.href}>{v.name}</Link>
                </Button>
              );
            })}
            <ModeToggle />
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center ${open ? "" : "hidden"}`}
        >
          {links.map((v, i) => {
            return (
              <Button
                className="text-2xl text-secondary"
                variant="link"
                key={i}
                onClick={() => setOpen(false)}
                asChild
              >
                <Link href={v.href}>{v.name}</Link>
              </Button>
            );
          })}
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
