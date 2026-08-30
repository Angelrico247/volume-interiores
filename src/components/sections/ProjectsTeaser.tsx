import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { imageUrl } from "@/data/site";
import { projects } from "@/data/projects";

// Tres proyectos destacados para el collage del inicio.
const destacados = [
  projects.find((p) => p.slug === "casa-providencia")!,
  projects.find((p) => p.slug === "loft-americana")!,
  projects.find((p) => p.slug === "oficinas-zapopan")!,
];

/**
 * Collage asimétrico: una imagen ancha con el texto a su derecha y, debajo,
 * dos imágenes de anchos desiguales (5 y 7 columnas) a la misma altura.
 * Cada foto enlaza a su caso de estudio.
 */
export default function ProjectsTeaser() {
  const [principal, secundario, terciario] = destacados;

  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        {/* Fila 1: imagen ancha + texto */}
        <div className="grid items-start gap-y-10 md:grid-cols-12 md:gap-x-10">
          <Reveal className="md:col-span-7">
            <TeaserImage
              href={`/proyectos/${principal.slug}`}
              src={imageUrl(principal.cover, 1200, 675)}
              alt={principal.coverAlt}
              name={principal.name}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="aspect-[16/9]"
            />
          </Reveal>

          <div className="flex flex-col md:col-span-5">
            <h2 className="heading text-3xl md:text-[2.5rem] lg:text-[2.75rem]">
              Mira nuestros proyectos recientes
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
              Casas, departamentos y locales donde probamos la misma idea: menos
              elementos, mejor resueltos.
            </p>
            <div className="mt-8">
              <Button href="/proyectos" variant="dark">
                Ver todos
              </Button>
            </div>
          </div>
        </div>

        {/* Fila 2: dos imágenes de anchos desiguales */}
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <TeaserImage
              href={`/proyectos/${secundario.slug}`}
              src={imageUrl(secundario.cover, 700, 520)}
              alt={secundario.coverAlt}
              name={secundario.name}
              sizes="(max-width: 768px) 100vw, 41vw"
              className="h-64 md:h-[380px]"
            />
          </Reveal>
          <Reveal delay={80} className="md:col-span-7">
            <TeaserImage
              href={`/proyectos/${terciario.slug}`}
              src={imageUrl(terciario.cover, 1000, 520)}
              alt={terciario.coverAlt}
              name={terciario.name}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="h-64 md:h-[380px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TeaserImage({
  href,
  src,
  alt,
  name,
  sizes,
  className,
}: {
  href: string;
  src: string;
  alt: string;
  name: string;
  sizes: string;
  className: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className={`relative w-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <span className="mt-3 block text-sm text-muted transition-colors group-hover:text-ink">
        {name}
      </span>
    </Link>
  );
}
