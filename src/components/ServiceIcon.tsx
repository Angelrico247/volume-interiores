import type { ServiceIconName } from "@/data/site";

const paths: Record<ServiceIconName, React.ReactNode> = {
  // Planeación: escuadra + regla.
  planning: (
    <>
      <path d="M4 4h7v7" />
      <path d="M4 4l16 16" />
      <path d="M14 20h6v-6" />
    </>
  ),
  // Interior: sillón.
  interior: (
    <>
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M4 11a2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6" />
      <path d="M2 19v-6a2 2 0 0 1 2-2" />
      <path d="M6 19v2M18 19v2" />
    </>
  ),
  // Exterior: casa con sol.
  exterior: (
    <>
      <path d="M3 12l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  // Management: casillas de checklist.
  management: (
    <>
      <path d="M9 5h11M9 12h11M9 19h11" />
      <path d="M4 4l1.5 1.5L8 3" />
      <path d="M4 11l1.5 1.5L8 10" />
      <path d="M4 18l1.5 1.5L8 17" />
    </>
  ),
  // Dirección de obra: casco.
  site: (
    <>
      <path d="M3 16a9 9 0 0 1 18 0" />
      <path d="M2 16h20v2H2z" />
      <path d="M10 7V5h4v2" />
      <path d="M9 16V9M15 16V9" />
    </>
  ),
  // Estilismo: lámpara de pie.
  styling: (
    <>
      <path d="M8 3h8l2 6H6l2-6z" />
      <path d="M12 9v10" />
      <path d="M8 21h8" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-8 w-8 ${className}`}
    >
      {paths[name]}
    </svg>
  );
}
