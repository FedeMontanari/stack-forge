import Image from "next/image";
import landingLogo from "@/assets/images/landing-logo.png";
import clientIcon from "@/assets/icons/conversation.svg";
import innovationIcon from "@/assets/icons/innovation.svg";
import qualityIcon from "@/assets/icons/quality.svg";

interface WhyUs {
  title: string;
  content: string;
  icon?: string;
}

const whyUs: WhyUs[] = [
  {
    title: "Enfoque en el cliente",
    content:
      "Nos comprometemos a comprender las necesidades únicas de cada cliente y a ofrecer soluciones personalizadas que se ajusten a sus objectivos y presupuesto. Trabajamos en estrecha colaboración con nuestros clientes en cada etapa del proceso para garantizar su satisfacción.",
    icon: clientIcon,
  },
  {
    title: "Innovación constante",
    content:
      "En un mundo en constante evolución tecnológica nos mantenemos al día con las últimas tendencias y herramientas de desarrollo. Esto nos permite ofrecer soluciones de vanguardia que ayudan a nuestros clientes a mantenerse competitivos en su industria.",
    icon: innovationIcon,
  },
  {
    title: "Compromiso con la calidad",
    content:
      "Nos enorgullecemos de nuestro compromiso con la excelencia y la calidad en todo lo que hacemos. Desde la planificaión inicial hasta la implementación final, nos esforzamos por superar las expectativas y entregar resultados excepcionales.",
    icon: qualityIcon,
  },
];

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center gap-6 p-10">
      <section className="flex flex-col items-center justify-evenly gap-4 lg:flex-row lg:gap-0">
        <div className="text-center lg:text-start">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Desarrollamos Soluciones
          </h1>
          <p className="w-fit rounded-md bg-secondary/60 p-3 text-xl leading-7 lg:w-[680px] [&:not(:first-child)]:mt-6">
            En nuestra empresa, no solo desarrollamos aplicaciones Web, ¡sino
            que creamos soluciones! Con un equipo de programadores altamente
            calificados y una pasión inquebrantable por la innovación, nos
            destacamos en el campo de la tecnología.
          </p>
        </div>
        <Image src={landingLogo} alt="Landing Logo" className="w-1/3 hidden lg:block" />
      </section>
      <section className="mt-11 flex w-10/12 flex-col items-center pb-11">
        <h3 className="w-fit -skew-x-6 scroll-m-20 bg-destructive p-2 text-2xl font-bold tracking-tight lg:text-3xl">
          Por que elegirnos?
        </h3>
        <section className="mt-5 flex flex-col items-center justify-center gap-8 p-10">
          {whyUs.map((v, i) => {
            return (
              <div
                key={i}
                className="flex flex-row gap-3 bg-secondary/60 p-3 odd:skew-x-3 even:-skew-x-3 lg:odd:mr-24 lg:even:ml-24"
              >
                {v.icon && i % 2 == 1 && (
                  <Image
                    className="hidden transform-none md:block"
                    src={v.icon}
                    alt="Icon"
                    width={64}
                    height={64}
                  />
                )}
                <div className="p-3">
                  <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
                    {v.title}
                  </h5>
                  <p className="flex flex-row">
                    {v.content}
                    {v.icon && i % 2 == 0 && (
                      <Image
                        className="hidden transform-none md:block"
                        src={v.icon}
                        alt="Icon"
                        width={64}
                        height={64}
                      />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}
