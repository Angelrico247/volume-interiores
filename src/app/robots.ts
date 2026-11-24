import type { MetadataRoute } from "next";

// Sitio de demostración: se deja rastrear (para que Google lea el noindex) pero no se publica un sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
