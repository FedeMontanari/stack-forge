import ContactForm from "@/components/ContactForm";
import landingLogo from "@/assets/images/contact-form-logo.png";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="mt-10 flex h-full w-full flex-col-reverse items-center justify-evenly gap-4 p-10 lg:flex-row">
      <Image src={landingLogo} alt="Landing Logo" className="w-1/3" />
      <div className="w-2/5">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Contactanos
        </h1>
        <ContactForm />
      </div>
    </main>
  );
}
