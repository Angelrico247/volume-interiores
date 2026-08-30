import type { ReactNode } from "react";
import Container from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Banda superior oscura y compacta para páginas internas. */
export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-ink text-paper">
      <Container className="pb-16 pt-32 md:pb-24 md:pt-44">
        <span className="eyebrow text-paper/50">{eyebrow}</span>
        <h1 className="display mt-5 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {intro ? (
          <p className="mt-6 max-w-xl text-base text-paper/70 md:text-lg">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
