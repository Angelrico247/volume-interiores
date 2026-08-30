import type { Stat as StatType } from "@/data/site";

/**
 * Columna de cifras con separadores hairline. Las líneas ocupan solo el ancho
 * de esta columna y se cortan justo donde empieza la imagen contigua.
 */
export default function StatList({ items }: { items: StatType[] }) {
  return (
    <dl className="divide-y divide-line">
      {items.map((item) => (
        <div key={item.label} className="py-8 first:pt-0 last:pb-0 md:py-12">
          <dt className="heading text-5xl tabular-nums text-ink md:text-6xl">
            {item.value}
          </dt>
          <dd className="mt-1 text-sm text-muted">{item.label}</dd>
        </div>
      ))}
    </dl>
  );
}
