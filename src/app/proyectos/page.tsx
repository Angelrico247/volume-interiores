import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casas, departamentos, locales y exteriores diseñados por VOLUME en Guadalajara y Jalisco.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Espacios que ya se habitan"
        intro="Casas, departamentos, locales y exteriores entregados entre 2023 y 2025. Cada uno resolvió un problema distinto con la misma idea de fondo."
      />
      <ProjectsGrid />
      <CtaBanner />
    </>
  );
}
