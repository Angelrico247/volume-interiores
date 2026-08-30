import Container from "@/components/Container";
import Button from "@/components/Button";
import HomeHero from "@/components/sections/HomeHero";
import StatementBlock from "@/components/sections/StatementBlock";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import MaterialsBlock from "@/components/sections/MaterialsBlock";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <StatementBlock />

      {/* Servicios (preview) */}
      <section className="bg-bone py-24 md:py-36">
        <Container>
          <h2 className="heading mx-auto max-w-xl text-center text-3xl md:text-5xl">
            Un acompañamiento integral
          </h2>
          <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-muted">
            Del primer boceto a la entrega de llaves. Puedes tomar todo el
            proceso o solo la etapa que necesitas.
          </p>
          <div className="mt-12 md:mt-16">
            <ServicesGrid />
          </div>
          <div className="mt-16 flex justify-center">
            <Button href="/estudio#servicios" variant="dark">
              Ver servicios a detalle
            </Button>
          </div>
        </Container>
      </section>

      <ProjectsTeaser />

      <MaterialsBlock />

      <CtaBanner />
    </>
  );
}
