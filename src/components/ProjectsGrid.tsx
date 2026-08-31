"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Filtro } from "@/data/projects";

/**
 * Desfase vertical por columna en escritorio. Todas las portadas miden lo
 * mismo, así que el ritmo lo da el escalonado y no un alto irregular: se ve
 * suelto pero deliberado. Mismo recurso que la retícula de servicios.
 */
const offsets = ["", "lg:mt-10", "lg:mt-20"];

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

        {/* Retícula escalonada */}
        <div className="mt-10 grid grid-cols-1 items-start gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 md:gap-x-10 lg:grid-cols-3">
          {visibles.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 3) * 80}
              className={offsets[i % 3]}
            >
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
