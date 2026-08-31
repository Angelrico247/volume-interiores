"use client";

import { usePathname } from "next/navigation";
import { VolumeMark } from "@/components/Wordmark";

/**
 * Dos velos con el logo:
 *
 * - El inicial cubre la primera pintura y se retira con el trazo dibujándose.
 *   No depende de JavaScript: la animación es CSS pura con `forwards`, así que
 *   si el bundle nunca carga el velo igual se quita y el sitio queda usable.
 * - El de ruta se remonta con `key={pathname}`, lo que reinicia la animación en
 *   cada navegación. Al no cambiar la key, un enlace a la página actual no
 *   dispara nada.
 *
 * Ambos van con `pointer-events: none` y `aria-hidden`, así que ni bloquean
 * clics ni ensucian el árbol de accesibilidad una vez desvanecidos.
 */
export default function SiteLoader() {
  const pathname = usePathname();

  return (
    <>
      <div key={pathname} className="site-loader site-loader--route" aria-hidden="true">
        <Lockup />
      </div>

      <div className="site-loader site-loader--initial" aria-hidden="true">
        <Lockup draw />
      </div>
    </>
  );
}

function Lockup({ draw = false }: { draw?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <VolumeMark draw={draw} className="h-20 w-20 md:h-24 md:w-24" />
      <span className="eyebrow text-paper/70">VOLUME</span>
    </div>
  );
}
