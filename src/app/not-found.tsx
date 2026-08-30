import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink text-paper">
      <Container className="flex flex-col items-start gap-6 py-32">
        <span className="eyebrow text-paper/50">Error 404</span>
        <h1 className="display text-4xl md:text-6xl">Esta página no existe</h1>
        <p className="max-w-md text-paper/70">
          Puede que el enlace esté roto o que la página se haya movido.
        </p>
        <Button href="/" variant="light">
          Volver al inicio
        </Button>
      </Container>
    </section>
  );
}
