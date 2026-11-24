import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/data/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";
import DemoNotice from "@/components/DemoNotice";

// Poppins: única familia del sitio — display, titulares, cuerpo y etiquetas.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <SiteLoader />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <DemoNotice />
      </body>
    </html>
  );
}
