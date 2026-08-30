"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success";

type Field = "nombre" | "apellido" | "email" | "mensaje";

const labels: Record<Field, string> = {
  nombre: "Nombre",
  apellido: "Apellido",
  email: "Correo",
  mensaje: "Mensaje",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function validate(data: FormData): Partial<Record<Field, string>> {
    const next: Partial<Record<Field, string>> = {};
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (!nombre) next.nombre = "Escribe tu nombre.";
    if (!email) next.email = "Escribe tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Ese correo no parece válido.";
    if (!mensaje) next.mensaje = "Cuéntanos algo sobre tu proyecto.";

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    // Demo de portafolio: no hay backend. Simulamos el envío.
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 900);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 border border-line bg-bone p-8"
      >
        <span className="eyebrow text-muted">Mensaje enviado</span>
        <p className="text-lg text-ink">
          Gracias por escribir. Te respondemos en menos de 48 horas.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 self-start text-sm underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FieldInput name="nombre" error={errors.nombre} />
        <FieldInput name="apellido" error={errors.apellido} />
      </div>
      <FieldInput name="email" type="email" error={errors.email} />
      <FieldInput name="mensaje" as="textarea" error={errors.mensaje} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
      <p className="text-xs text-muted">
        Este formulario es una demostración: no envía datos a ningún servidor.
      </p>
    </form>
  );
}

function FieldInput({
  name,
  type = "text",
  as = "input",
  error,
}: {
  name: Field;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
}) {
  const id = `field-${name}`;
  const shared =
    "w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-muted">
        {labels[name]}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={shared}
        />
      )}
      {error ? (
        <span id={`${id}-error`} className="text-xs text-ink/70">
          {error}
        </span>
      ) : null}
    </div>
  );
}
