import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/data/site";
import type { CoverRatio, Project } from "@/data/projects";

const ratioSizes: Record<CoverRatio, [number, number]> = {
  "3/4": [700, 933],
  "4/3": [800, 600],
  "1/1": [760, 760],
};

type ProjectCardProps = {
  project: Project;
  /** Proporción de la portada. Igual en todas las tarjetas de una rejilla. */
  ratio?: CoverRatio;
};

export default function ProjectCard({
  project,
  ratio = "4/3",
}: ProjectCardProps) {
  const [w, h] = ratioSizes[ratio];

  return (
    <Link href={`/proyectos/${project.slug}`} className="group block">
      <div
        className="relative w-full overflow-hidden bg-bone"
        style={{ aspectRatio: ratio }}
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
        <span className="eyebrow text-muted">{project.category}</span>
        <h3 className="heading mt-2 text-xl text-ink transition-opacity duration-200 group-hover:opacity-60 md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
}
