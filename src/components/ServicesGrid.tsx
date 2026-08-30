import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services, type Service } from "@/data/site";

/**
 * Tres columnas escalonadas en escalera descendente de derecha a izquierda:
 * la tercera arranca arriba y cada columna a su izquierda baja ~50px.
 * Los servicios se reparten en orden de columna (0,3 · 1,4 · 2,5), y cada
 * tarjeta lleva hairline arriba y abajo con el contenido pegado al pie.
 */
const columns: Service[][] = [
  [services[0], services[3]],
  [services[1], services[4]],
  [services[2], services[5]],
];

// Desfase vertical por columna (escritorio).
const offsets = ["md:mt-24", "md:mt-12", ""];

export default function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid items-start gap-x-8 gap-y-10 md:grid-cols-3 lg:gap-x-12">
      {columns.map((column, col) => (
        <div key={col} className={`flex flex-col gap-10 ${offsets[col]}`}>
          {column.map((service, row) => (
            <Reveal key={service.number} delay={row * 60}>
              <article className="flex flex-col gap-4 border-y border-line pb-14 pt-24 md:pt-28">
                <ServiceIcon name={service.icon} className="text-ink" />
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {detailed ? service.long : service.short}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
