import Image from "next/image";
import Button from "@/components/Button";
import { cta, imageUrl, photos } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Image
        src={imageUrl(photos.ctaNight, 1800, 900)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 px-6 py-28 md:items-center md:px-10 md:py-40 md:text-center">
        <h2 className="display max-w-2xl text-4xl md:text-6xl">{cta.heading}</h2>
        <p className="max-w-md text-base text-paper/70">{cta.body}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href="/contacto" variant="light">
            Cotiza tu proyecto
          </Button>
          <Button href="/contacto" variant="outline">
            Contacto
          </Button>
        </div>
      </div>
    </section>
  );
}
