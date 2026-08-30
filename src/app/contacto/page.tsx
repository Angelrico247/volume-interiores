import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué espacio tienes en mente. VOLUME, estudio de interiorismo en Guadalajara.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
  const instagramHref = `https://instagram.com/${site.instagram}`;

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu espacio"
        intro="Escríbenos con lo que tengas: planos, fotos, una idea suelta o solo una duda. Respondemos en menos de 48 horas."
      />

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
            <ContactForm />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-muted">Directo</span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-ink underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-ink underline-offset-4 hover:underline"
                >
                  WhatsApp
                </a>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-ink underline-offset-4 hover:underline"
                >
                  @{site.instagram}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="eyebrow text-muted">Dónde estamos</span>
                <p className="text-lg text-ink">{site.location}</p>
                <p className="text-sm text-muted">
                  Trabajamos en toda la zona metropolitana y proyectos foráneos
                  bajo agenda.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="eyebrow text-muted">Horario</span>
                <p className="text-sm text-muted">
                  Lunes a viernes, 9:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
