import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { imageUrl } from "@/data/site";
import {
  getProject,
  nextProject,
  projects,
  similarProjects,
} from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.excerpt,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.name} · VOLUME`,
      description: project.excerpt,
      images: [imageUrl(project.cover, 1200, 630)],
    },
  };
}

export default async function ProyectoPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const similares = similarProjects(project);
  const siguiente = nextProject(project, similares);

  const ficha = [
    { label: "Año", value: project.year },
    { label: "Ubicación", value: project.location },
    { label: "Superficie", value: project.surface },
    { label: "Categoría", value: project.category },
  ];

  return (
    <div className="bg-ink text-paper">
      {/* Portada */}
      <section className="relative isolate">
        <div className="relative h-[62vh] min-h-[420px] w-full md:h-[78vh]">
          <Image
            src={imageUrl(project.cover, 1800, 1200)}
            alt={project.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60"
            aria-hidden="true"
          />
        </div>

        <Container className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <span className="eyebrow text-paper/60">{project.category}</span>
          <h1 className="display mt-4 text-4xl md:text-6xl">{project.name}</h1>
          <p className="mt-3 text-base text-paper/65 md:text-lg">
            {project.subtitle}
          </p>
        </Container>
      </section>

      {/* Ficha técnica */}
      <section className="border-y border-paper/15">
        <Container>
          <dl className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:py-12">
            {ficha.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <dt className="eyebrow text-paper/55">{item.label}</dt>
                <dd className="text-base text-paper md:text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 01 Objetivo */}
      <NumberedSection number="01" label="Objetivo" body={project.goal} />

      {/* 02 Galería */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionMarker number="02" label="Galería" />

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <GalleryImage
                photo={project.gallery[0]}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="aspect-[4/3]"
                width={1200}
                height={900}
              />
            </Reveal>
            <Reveal delay={80} className="md:col-span-4">
              <GalleryImage
                photo={project.gallery[1]}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-[3/4] md:h-full md:aspect-auto"
                width={700}
                height={933}
              />
            </Reveal>
            <Reveal delay={40} className="md:col-span-5">
              <GalleryImage
                photo={project.gallery[2]}
                sizes="(max-width: 768px) 100vw, 41vw"
                className="aspect-[4/3]"
                width={800}
                height={600}
              />
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <GalleryImage
                photo={project.gallery[3]}
                sizes="(max-width: 768px) 100vw, 58vw"
                className="aspect-[4/3] md:aspect-[16/10]"
                width={1100}
                height={690}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 03 Resultado */}
      <NumberedSection number="03" label="Resultado" body={project.result} />

      {/* Proyectos similares */}
      {similares.length > 0 ? (
        <section className="border-t border-paper/15 py-16 md:py-24">
          <Container>
            <SectionMarker label="Proyectos similares" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {similares.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Cierre */}
      <section className="border-t border-paper/15 py-20 md:py-28">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-paper/55">Siguiente proyecto</span>
            <p className="display mt-3 text-3xl md:text-5xl">{siguiente.name}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`/proyectos/${siguiente.slug}`} variant="light">
              Ver proyecto
            </Button>
            <Button href="/proyectos" variant="outline">
              Todos los proyectos
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

function SectionMarker({ number, label }: { number?: string; label: string }) {
  return (
    <div className="flex items-baseline gap-5">
      {number ? (
        <span className="display text-2xl text-paper/45 md:text-3xl">
          {number}
        </span>
      ) : null}
      <span className="eyebrow text-paper/60">{label}</span>
    </div>
  );
}

function NumberedSection({
  number,
  label,
  body,
}: {
  number: string;
  label: string;
  body: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionMarker number={number} label={label} />
          </div>
          <p className="text-lg leading-relaxed text-paper/70 md:col-span-8 md:text-xl">
            {body}
          </p>
        </div>
      </Container>
    </section>
  );
}

function GalleryImage({
  photo,
  sizes,
  className,
  width,
  height,
}: {
  photo: { id: string; alt: string };
  sizes: string;
  className: string;
  width: number;
  height: number;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-paper/5 ${className}`}>
      <Image
        src={imageUrl(photo.id, width, height)}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
