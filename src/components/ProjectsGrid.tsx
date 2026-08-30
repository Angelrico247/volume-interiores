"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Filtro } from "@/data/projects";

/**
 * Botonera de filtros + masonry.
 *
 * El masonry son columnas CSS (`columns-*`), sin JS ni librerías: cada tarjeta
 * lleva `break-inside-avoid` y su propia proporción, de ahí el ritmo desigual.
 * Contrapartida asumida: el orden de lectura baja por columna, no de izquierda
 * a derecha.
 */
export default function ProjectsGrid() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visibles = useMemo(
    () =>
      filtro === "Todos"
        ? projects
        : projects.filter((p) => p.category === filtro),
    [filtro],
  );

  return (
    <section className="bg-paper pb-24 pt-16 md:pb-32 md:pt-20">
      <Container>
        {/* Filtros */}
        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-6"
        >
          {categories.map((c) => {
            const activo = c === filtro;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFiltro(c)}
                aria-pressed={activo}
                className={`eyebrow transition-colors duration-200 ${
                  activo ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}

          <span className="eyebrow ml-auto text-muted" aria-live="polite">
            {visibles.length} {visibles.length === 1 ? "proyecto" : "proyectos"}
          </span>
        </div>

        {/* Masonry */}
        <div className="mt-10 columns-1 gap-8 sm:columns-2 md:mt-14 md:gap-10 lg:columns-3">
          {visibles.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
