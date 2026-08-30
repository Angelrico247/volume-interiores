import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import OverlapImage from "@/components/OverlapImage";
import { imageUrl, photos } from "@/data/site";

/**
 * Mismo juego que StatementBlock pero con la imagen a lo ancho de 7 columnas:
 * el texto arranca en la 7 y el titular monta sobre el borde de la fotografía.
 */
export default function MaterialsBlock() {
  return (
    <section className="bg-bone py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-y-10 md:grid-cols-12 md:gap-y-0">
          {/* `col-start-1` explícito: sin él, el auto-placement no encuentra 7
              columnas libres en la fila y saca la imagen de la rejilla. */}
          <Reveal className="md:col-start-1 md:col-span-7 md:row-start-1">
            <OverlapImage
              src={imageUrl(photos.materials, 1000, 750)}
              alt="Rincón de lectura con estantería de madera y textiles"
              sizes="(max-width: 768px) 100vw, 58vw"
              ratio="4/3"
            />
          </Reveal>

          <div className="relative z-10 flex flex-col md:col-start-7 md:col-span-6 md:row-start-1">
            <h2 className="heading text-3xl md:text-[2.5rem] lg:text-[2.75rem]">
              Pocos materiales, bien elegidos
            </h2>
            <div className="md:pl-[18%]">
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                Madera, piedra y textiles naturales que envejecen bien. Preferimos
                una paleta corta y bien resuelta antes que un catálogo de
                acabados.
              </p>
              <div className="mt-8">
                <Button href="/estudio#servicios" variant="dark">
                  Cómo trabajamos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
