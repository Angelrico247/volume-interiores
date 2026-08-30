import Image from "next/image";
import Button from "@/components/Button";
import { hero, imageUrl, photos } from "@/data/site";

/**
 * Hero de dos columnas con traslapes:
 * - El panel oscuro mide 42% de ancho y solo 90% de alto, así que la imagen
 *   (100% de alto) sobresale por debajo de él.
 * - El h1 vive en la columna izquierda pero desborda sobre la imagen gracias a
 *   `z-20` sobre la columna y `pr-0` en escritorio.
 */
export default function HomeHero() {
  return (
    <section className="relative isolate bg-paper">
      {/* Panel oscuro: se queda 10% corto para que la foto lo rebase por abajo. */}
      <div
        className="absolute left-0 top-0 -z-10 hidden h-[90%] w-[42%] bg-ink md:block"
        aria-hidden="true"
      />

      <div className="grid md:min-h-screen md:grid-cols-[42%_58%]">
        {/* Columna de contenido */}
        <div className="relative z-20 flex flex-col justify-center bg-ink px-6 pb-20 pt-28 text-paper md:bg-transparent md:pb-[16vh] md:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] md:pr-0 md:pt-0">
          <span className="eyebrow text-paper/50">{hero.kicker}</span>

          {/* `nowrap` en escritorio: las líneas no se parten y desbordan el
              panel oscuro para montarse sobre la fotografía. */}
          <h1 className="display mt-7 text-[2.25rem] sm:text-[2.75rem] md:whitespace-nowrap md:text-[2.75rem] lg:text-[3.75rem]">
            Creamos espacios
            <span className="mt-1 flex w-fit items-center gap-6">
              que inspiran
              <span
                className="h-px w-14 shrink-0 bg-paper/60 md:w-28"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-sm text-base text-paper/65 md:mt-10 md:text-[1.0625rem]">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 md:mt-11">
            <Button href="/proyectos" variant="light">
              Ver proyectos
            </Button>
            <Button href="/estudio" variant="outline">
              Conócenos
            </Button>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="relative z-0 h-[58vh] md:h-auto">
          <Image
            src={imageUrl(photos.heroLiving, 1400, 1600)}
            alt="Sala de estar con acabados en madera y luz natural"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
          {/* Velo suave en el borde izquierdo: mantiene legible el h1 que invade la foto. */}
          <div
            className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent md:block"
            aria-hidden="true"
          />

          {/* Indicador de scroll */}
          <div
            className="absolute bottom-[18%] right-[15%] hidden h-14 w-14 items-center justify-center rounded-full border border-paper/50 text-paper md:flex"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                d="M12 5v14M6 13l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
