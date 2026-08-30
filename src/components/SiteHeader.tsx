"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import Wordmark from "@/components/Wordmark";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  // Proyectos es una sección oscura de punta a punta: el estado sólido del
  // header también va oscuro, si no aparece una barra blanca sobre el negro.
  const darkPage = pathname.startsWith("/proyectos");

  const solidStyles = darkPage
    ? "bg-ink text-paper border-b border-paper/15"
    : "bg-paper text-ink border-b border-line";

  // ¿Qué hay detrás del botón? Con el header transparente, en el home cae sobre
  // la foto del hero (clara) y en el resto sobre el PageHero oscuro. Con el
  // header sólido, depende del tema de la página. La píldora se invierte para
  // no desaparecer sobre su propio fondo.
  const onDarkSurface = solid ? darkPage : pathname !== "/";
  const pillStyles = onDarkSurface
    ? "bg-paper text-ink hover:bg-paper/85"
    : "bg-ink text-paper hover:bg-ink/80";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? solidStyles : "bg-transparent text-paper"
      }`}
    >
      <div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:h-20 md:px-10">
        {/* Hairline del header: se corta antes del botón, como en el diseño. */}
        {!solid ? (
          <span
            className="pointer-events-none absolute bottom-0 left-10 right-[17%] hidden h-px bg-paper/30 md:block"
            aria-hidden="true"
          />
        ) : null}
        <Link href="/" aria-label="VOLUME — inicio" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide transition-opacity hover:opacity-100 ${
                  active ? "opacity-100" : "opacity-70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${pillStyles}`}
          >
            Cotiza tu proyecto
          </Link>
        </nav>

        {/* Botón de menú móvil */}
        <button
          type="button"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Panel de menú móvil */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          darkPage ? "bg-ink text-paper" : "bg-paper text-ink"
        } ${
          menuOpen
            ? `max-h-[80vh] border-t ${darkPage ? "border-paper/15" : "border-line"}`
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b py-4 text-lg ${
                darkPage ? "border-paper/15" : "border-line"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-medium ${
              darkPage ? "bg-paper text-ink" : "bg-ink text-paper"
            }`}
          >
            Cotiza tu proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}
