import Link from "next/link";
import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";
import { navLinks, site, legalNote } from "@/data/site";

const year = new Date().getFullYear();

export default function SiteFooter() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
  const instagramHref = `https://instagram.com/${site.instagram}`;

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              {site.tagline} en {site.location}. Diseño, planeación y dirección de
              obra bajo un mismo techo.
            </p>
          </div>

          <nav aria-label="Pie de página" className="flex flex-col gap-3">
            <span className="eyebrow text-paper/55">Navegación</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-paper/80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-paper/55">Contacto</span>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-paper/80 transition-opacity hover:opacity-100"
            >
              {site.email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 transition-opacity hover:opacity-100"
            >
              WhatsApp
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 transition-opacity hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-8 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {site.location}.
          </p>
          <p className="max-w-md md:text-right">{legalNote}</p>
        </div>
      </Container>
    </footer>
  );
}
