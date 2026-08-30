import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/estudio",
    "/proyectos",
    "/contacto",
    ...projects.map((p) => `/proyectos/${p.slug}`),
  ];
  const now = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/proyectos/") ? 0.6 : 0.7,
  }));
}
