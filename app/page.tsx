import Image from "next/image";
import landingLogo from "@/assets/images/landing-logo.png";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center gap-6 p-10">
      <section className="flex w-full flex-col items-center justify-evenly gap-4 lg:flex-row lg:gap-0">
        <div className="text-center lg:text-start">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Desarrollamos Soluciones
          </h1>
          <p className="w-[680px] rounded-md bg-secondary/60 p-3 text-xl leading-7 [&:not(:first-child)]:mt-6">
            En nuestra empresa, no solo desarrollamos aplicaciones Web, ¡sino
            que creamos soluciones! Con un equipo de programadores altamente
            calificados y una pasión inquebrantable por la innovación, nos
            destacamos en el campo de la tecnología.
          </p>
        </div>
        <Image src={landingLogo} alt="Landing Logo" className="w-1/3" />
      </section>
    </main>
  );
}
