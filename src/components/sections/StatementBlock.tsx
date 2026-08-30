import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import StatList from "@/components/Stat";
import OverlapImage from "@/components/OverlapImage";
import { statement, stats, imageUrl, photos } from "@/data/site";

/**
 * Cifras · imagen · texto sobre una rejilla de 12.
 * La imagen ocupa las columnas 3–6 y el bloque de texto arranca en la 6, así
 * que el titular monta ~una columna sobre la fotografía. El cuerpo y los
 * botones se sangran para quedar libres del borde de la imagen.
 */
export default function StatementBlock() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-y-12 md:grid-cols-12 md:gap-y-0">
          {/* Cifras */}
          <div className="md:col-span-2 md:pr-6">
            <StatList items={stats} />
          </div>

          {/* Imagen */}
          <Reveal className="md:col-start-3 md:col-span-4 md:row-start-1">
            <OverlapImage
              src={imageUrl(photos.statementSofa, 800, 1000)}
              alt="Sofá de líneas simples junto a una ventana"
              sizes="(max-width: 768px) 100vw, 33vw"
              ratio="4/5"
            />
          </Reveal>

          {/* Texto: invade la columna 6, que es la última de la imagen. */}
          <div className="relative z-10 flex flex-col md:col-start-6 md:col-span-7 md:row-start-1">
            <span className="eyebrow text-muted">{statement.kicker}</span>
            <h2 className="heading mt-4 text-3xl md:text-[2.75rem] lg:text-5xl">
              {statement.heading}
            </h2>
            <div className="md:pl-[16%]">
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                {statement.body}
              </p>
              <div className="mt-8">
                <Button href="/estudio" variant="dark">
                  Sobre el estudio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
