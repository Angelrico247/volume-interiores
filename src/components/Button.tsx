import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "dark" | "light" | "outline";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-paper hover:bg-ink/85",
  light: "bg-paper text-ink hover:bg-bone",
  // Hairline: medio píxel en pantallas retina y, en 1x —donde el navegador
  // redondea a 1px—, la opacidad reducida es la que lo hace ver fino.
  outline:
    "border-[0.5px] border-current/55 text-current hover:bg-ink hover:text-paper hover:border-ink",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  /** Si se pasa `href`, se renderiza como <Link>; si no, como <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant = "dark",
  className = "",
  children,
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
