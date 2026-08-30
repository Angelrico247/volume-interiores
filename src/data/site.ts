// Contenido centralizado del sitio. Edita aquí textos, cifras e imágenes.

/** URL de imagen de Unsplash a partir del ID de la foto, recortada al tamaño pedido. */
export function imageUrl(photoId: string, width: number, height: number) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}

export const site = {
  name: "VOLUME",
  tagline: "Estudio de Interiorismo",
  description:
    "Estudio de interiorismo en Guadalajara para proyectos residenciales y comerciales. Diseño, planeación y dirección de obra bajo un mismo techo.",
  email: "hola@volume-estudio.mx",
  whatsappNumber: "5213300000000",
  instagram: "volume.estudio",
  location: "Guadalajara, Jalisco",
  // Dominio de producción (ajústalo al conectar Vercel).
  url: "https://volume-estudio.vercel.app",
};

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Estudio", href: "/estudio" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

/** Fotografías compartidas. Si algún ID de Unsplash deja de resolver, cámbialo aquí. */
export const photos = {
  heroLiving: "1618221195710-dd6b41faaea6",
  statementSofa: "1583847268964-b28dc8f51f92",
  projectsWide: "1616486338812-3dadae4b4ace",
  livingWarm: "1600210492486-724fe5c67fb0",
  openPlan: "1600566753086-00f18fb6b3ea",
  studioSpace: "1600607687939-ce8a6c25118c",
  materials: "1615875605825-5eb9bb5d52ac",
  ctaNight: "1600585154526-990dced4db0d",
} as const;

export type ServiceIconName =
  | "planning"
  | "interior"
  | "exterior"
  | "management"
  | "site"
  | "styling";

export type Service = {
  number: string;
  title: string;
  short: string;
  long: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Planeación de proyecto",
    short:
      "Definimos alcance, tiempos y presupuesto antes de mover un muro. Levantamiento, análisis de necesidades y un plan claro por etapa.",
    long: "Cada proyecto arranca con un levantamiento a detalle del espacio y una conversación larga sobre cómo lo usas. Con eso definimos alcance, calendario y un presupuesto realista, para que las decisiones grandes se tomen al principio y no a media obra.",
    icon: "planning",
  },
  {
    number: "02",
    title: "Diseño de interiores",
    short:
      "Distribución, luz, materiales y mobiliario pensados para cómo vives o trabajas. Del concepto a los planos ejecutivos y el render.",
    long: "Resolvemos la distribución, la luz natural y artificial, la paleta de materiales y el mobiliario. Entregamos concepto, renders y planos ejecutivos listos para construir, sin ambigüedades para el equipo de obra.",
    icon: "interior",
  },
  {
    number: "03",
    title: "Diseño de exteriores",
    short:
      "Terrazas, fachadas y jardines que extienden el interior. Continuidad de materiales y una transición natural entre dentro y fuera.",
    long: "Diseñamos terrazas, fachadas y áreas verdes con la misma lógica que el interior: pocos materiales, bien resueltos. El objetivo es que no se note dónde termina la casa y dónde empieza el jardín.",
    icon: "exterior",
  },
  {
    number: "04",
    title: "Project management",
    short:
      "Coordinamos proveedores, calendario y compras para que el proyecto avance sin sorpresas. Un solo interlocutor de principio a fin.",
    long: "Nos hacemos cargo de la logística: cotizaciones, órdenes de compra, tiempos de entrega y coordinación entre gremios. Tú tratas con una sola persona y recibes reportes de avance con fechas reales.",
    icon: "management",
  },
  {
    number: "05",
    title: "Dirección de obra",
    short:
      "Supervisión en sitio, control de calidad y ajuste de detalles hasta la entrega. El diseño se respeta tal como se aprobó.",
    long: "Visitamos la obra con la frecuencia que cada etapa necesita, revisamos acabados contra especificación y corregimos a tiempo. El proyecto que se aprueba es el proyecto que se entrega.",
    icon: "site",
  },
  {
    number: "06",
    title: "Decoración y estilismo",
    short:
      "La última capa: textiles, iluminación decorativa, arte y objeto. El espacio deja de estar terminado y empieza a sentirse habitado.",
    long: "Seleccionamos textiles, tapetes, iluminación decorativa, arte y piezas de accesorio. Es la capa que hace que un espacio recién entregado se sienta vivido y propio desde el primer día.",
    icon: "styling",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "48", label: "Proyectos entregados" },
  { value: "12", label: "Años de oficio" },
  { value: "15k", label: "m² intervenidos" },
  { value: "90%", label: "Clientes por recomendación" },
];

export type ProcessStep = { number: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Escucha",
    body: "Entendemos cómo usas el espacio, qué te molesta del actual y hasta dónde quieres llegar. Sin esta conversación, nada de lo demás funciona.",
  },
  {
    number: "02",
    title: "Concepto",
    body: "Traducimos eso en una dirección de diseño: distribución, paleta de materiales, referencias y un primer render. Aquí decidimos el rumbo.",
  },
  {
    number: "03",
    title: "Desarrollo",
    body: "Planos ejecutivos, especificación de acabados y selección de mobiliario. Todo queda documentado para que la obra no improvise.",
  },
  {
    number: "04",
    title: "Ejecución y obra",
    body: "Coordinamos y supervisamos hasta el último detalle. Te entregamos el espacio listo para usarse, no una lista de pendientes.",
  },
];

export const hero = {
  kicker: "Interiorismo en Guadalajara",
  heading: "Creamos espacios que inspiran",
  subtitle:
    "Estudio de interiorismo para proyectos residenciales y comerciales. Diseño, planeación y obra bajo un mismo techo.",
};

export const statement = {
  kicker: "El estudio",
  heading: "El equilibrio justo entre calidez y calma",
  body: "Trabajamos con pocos materiales, bien elegidos, y dejamos que la luz haga el resto. Buscamos espacios que se ven serenos y se sienten cómodos desde el primer día.",
};

export const cta = {
  heading: "Trabajemos juntos",
  body: "Cuéntanos qué espacio tienes en mente y te respondemos en menos de 48 horas.",
};

export const legalNote =
  "Proyecto conceptual creado como demostración de portafolio. VOLUME no es un negocio real.";
