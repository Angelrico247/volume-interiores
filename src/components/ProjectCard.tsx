import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/data/site";
import type { Project } from "@/data/projects";

const ratioSizes: Record<Project["coverRatio"], [number, number]> = {
  "3/4": [700, 933],
  "4/3": [800, 600],
  "1/1": [760, 760],
};

/**
 * Tarjeta de proyecto para la retícula oscura.
 * `break-inside-avoid` la mantiene entera dentro de su columna del masonry.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const [w, h] = ratioSizes[project.coverRatio];

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group mb-8 block break-inside-avoid md:mb-10"
    >
      <div
        className="relative w-full overflow-hidden bg-paper/5"
        style={{ aspectRatio: project.coverRatio }}
      >
        <Image
          src={imageUrl(project.cover, w, h)}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="pt-5">
        <span className="eyebrow text-paper/55">{project.category}</span>
        <h3 className="heading mt-2 text-xl text-paper transition-opacity duration-200 group-hover:opacity-70 md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/55">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
}
