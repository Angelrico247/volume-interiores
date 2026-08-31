/**
 * Isotipo VOLUME: una V de banda hueca dentro de un marco cuadrado.
 *
 * Redibujado en SVG a partir del logo original (PNG) para que herede
 * `currentColor` — el header alterna entre texto blanco sobre el hero y tinta
 * al hacer scroll, y un PNG de fondo negro desaparecería en el segundo estado.
 *
 * Geometría tomada del archivo original: marco de 464×454 px, brazos de la V
 * con pendiente dx/dy = 0.54 y remate plano arriba.
 *
 * `non-scaling-stroke` mantiene el grosor en píxeles sin importar el tamaño de
 * render: conserva el hairline fino del original en grande y sigue siendo
 * visible a 28 px en el header, donde un trazo proporcional caería por debajo
 * del píxel y desaparecería.
 */
export function VolumeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="3"
        strokeWidth={1.2}
        vectorEffect="non-scaling-stroke"
      />
      {/* Banda hueca: contorno exterior, remate superior e interior. */}
      <path
        d="M19 24 L50 77.5 L78 24 L69 24 L50 60 L31 24 Z"
        strokeWidth={1.8}
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <VolumeMark className="h-7 w-7 shrink-0" />
      <span className="text-base tracking-[0.32em]">VOLUME</span>
    </span>
  );
}
