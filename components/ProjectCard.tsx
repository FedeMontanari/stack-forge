import { Project } from "@/app/projects/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { simpleIconsPath } from "@/utils/simpleIconsPath";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <Card className="w-fit transition-all duration-500 hover:z-10 hover:scale-105">
      <Link href={data.href} target="_blank" rel="noopener noreferrer">
        <div className="relative -top-3 left-[95%] h-fit w-fit rounded-full bg-xanthous p-1">
          <ExternalLink aria-hidden="true" className="text-primary" />
        </div>
        <CardHeader className="pt-0">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={data.imageSrc}
            alt="Imagen/Captura del proyecto"
            width={430}
            height={290}
            className="rounded-xl"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <p className="text-lg font-semibold">Tecnologias</p>
          <ul className="flex flex-row flex-wrap gap-2 rounded-2xl bg-secondary/60 p-2">
            {data.stack.map((tec, i) => (
              <li key={i}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                  height="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: `#${simpleIconsPath(tec.icon).hex}`,
                  }}
                >
                  <title>{tec.name}</title>
                  <path d={simpleIconsPath(tec.icon).path}></path>
                </svg>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Link>
    </Card>
  );
}
