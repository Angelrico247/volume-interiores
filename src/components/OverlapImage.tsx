import Image from "next/image";

type OverlapImageProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Proporción del bloque, p. ej. "3/4" o "4/5". */
  ratio?: string;
  className?: string;
};

/**
 * Imagen de bloque pensada para que un titular la invada por la derecha.
 * Va sin veladura: el contraste del texto que la monta depende de que la zona
 * de traslape de la foto sea clara. Al cambiar una imagen, verifícalo.
 */
export default function OverlapImage({
  src,
  alt,
  sizes,
  ratio = "3/4",
  className = "",
}: OverlapImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
