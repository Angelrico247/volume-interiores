/** Glifo + palabra "VOLUME". `tone` controla el color (hereda de la clase padre por defecto). */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M8 8l4 8 4-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-medium tracking-[0.28em]">VOLUME</span>
    </span>
  );
}
