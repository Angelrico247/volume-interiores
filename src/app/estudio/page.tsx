import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBanner from "@/components/CtaBanner";
import { processSteps, imageUrl, photos } from "@/data/site";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "VOLUME es un estudio de interiorismo en Guadalajara. Nuestro enfoque, proceso de trabajo y servicios, del concepto a la dirección de obra.",
  alternates: { canonical: "/estudio" },
};

export default function EstudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Diseñamos con lo esencial"
        intro="VOLUME es un estudio de interiorismo en Guadalajara. Hacemos proyectos residenciales y comerciales con una idea fija: modernidad y simplicidad, sin renunciar a la calidez."
      />

      {/* Manifiesto */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <span className="eyebrow text-muted">El estudio</span>
            </div>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink md:col-span-7">
              <p>
                Nacimos de la idea de que un espacio bien resuelto no necesita
                gritar. Preferimos pocos materiales, bien elegidos, y una
                distribución que se entienda al entrar.
              </p>
              <p className="text-muted">
                Trabajamos de cerca con cada cliente y con un solo equipo de
                principio a fin: el que diseña es el que supervisa la obra. Así
                nada se pierde en la traducción entre el render y la realidad.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Imagen ancha */}
      <section className="bg-paper pb-20 md:pb-28">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={imageUrl(photos.studioSpace, 1600, 900)}
                alt="Espacio interior amplio con mobiliario de tonos neutros"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Proceso */}
      <section className="bg-bone py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-5 md:max-w-2xl">
            <span className="eyebrow text-muted">Cómo trabajamos</span>
            <h2 className="heading text-3xl md:text-5xl">Cuatro etapas, un solo equipo</h2>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="flex flex-col gap-4 border-t border-line pt-6">
                  <span className="heading text-4xl text-ink">{step.number}</span>
                  <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Servicios completos */}
      <section id="servicios" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-5 md:max-w-2xl">
            <span className="eyebrow text-muted">Servicios</span>
            <h2 className="heading text-3xl md:text-5xl">Todo lo que hacemos</h2>
            <p className="text-base leading-relaxed text-muted">
              Puedes contratar el proceso completo o una etapa suelta. Estos son
              los seis frentes que cubrimos.
            </p>
          </div>
          <div className="mt-16">
            <ServicesGrid detailed />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
