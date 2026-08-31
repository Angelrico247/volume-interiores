// Proyectos del portafolio. Todo el contenido editable vive aquí.
// Las fotos son IDs de Unsplash; se resuelven con `imageUrl()` de `site.ts`.

export type Categoria = "Residencial" | "Comercial" | "Exterior";

/** Opciones de la botonera de filtros, en orden. */
export const categories = ["Todos", "Residencial", "Comercial", "Exterior"] as const;
export type Filtro = (typeof categories)[number];

/** Proporción de portada admitida por las tarjetas. */
export type CoverRatio = "3/4" | "4/3" | "1/1";

export type GalleryPhoto = { id: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: Categoria;
  year: string;
  location: string;
  surface: string;
  cover: string;
  coverAlt: string;
  excerpt: string;
  goal: string;
  result: string;
  gallery: GalleryPhoto[];
};

export const projects: Project[] = [
  {
    slug: "casa-providencia",
    name: "Casa Providencia",
    subtitle: "Residencia unifamiliar",
    category: "Residencial",
    year: "2025",
    location: "Providencia, Guadalajara",
    surface: "310 m²",
    cover: "1604014237800-1c9102c219da",
    coverAlt:
      "Estancia abierta al jardín con muro de madera y carpintería negra",
    excerpt:
      "Abrimos la planta baja al jardín y unificamos la paleta con un solo tono de madera.",
    goal: "La casa estaba dividida en cuartos chicos y oscuros: sala, comedor y cocina no se hablaban entre sí, y el jardín quedaba desaprovechado detrás de un muro ciego. La familia pedía un solo espacio donde cocinar, comer y convivir sin perder de vista a los niños.",
    result:
      "Tiramos dos muros de carga —con refuerzo estructural— y sustituimos el muro trasero por cancelería corrediza de piso a techo. Un solo tono de nogal recorre carpintería, techo y mobiliario, así que el ojo lee un espacio continuo. El jardín se volvió parte de la sala.",
    gallery: [
      { id: "1567767292278-a4f21aa2d36e", alt: "Sala con sofá gris y obra de arte en gran formato" },
      { id: "1484154218962-a197022b5858", alt: "Cocina blanca con isla y lámparas colgantes negras" },
      { id: "1560185893-a55cbc8c57e8", alt: "Recámara principal con piso de madera y tapete" },
      { id: "1594026112284-02bb6f3352fe", alt: "Mueble flotante de madera con repisas y decoración" },
    ],
  },
  {
    slug: "departamento-andares",
    name: "Departamento Andares",
    subtitle: "Torre residencial",
    category: "Residencial",
    year: "2025",
    location: "Zapopan, Jalisco",
    surface: "145 m²",
    cover: "1616594039964-ae9021a400a0",
    coverAlt: "Recámara en tonos oscuros con candil dorado y ventanal a la ciudad",
    excerpt:
      "Un departamento en obra gris convertido en una vivienda de tonos profundos y latón.",
    goal: "Recibimos el departamento en obra gris, con una vista privilegiada que la distribución original desperdiciaba. El cliente viaja mucho y quería llegar a un lugar que se sintiera como un hotel: oscuro, silencioso y sin nada fuera de lugar.",
    result:
      "Invertimos la lógica del sitio: paredes en tonos profundos para que la ventana sea lo único luminoso. Latón cepillado en herrajes e iluminación, y almacenamiento oculto en todos los muros para que no haya nada a la vista.",
    gallery: [
      { id: "1595526114035-0d45ed16cfbf", alt: "Recámara secundaria en blanco con luz natural" },
      { id: "1618219908412-a29a1bb7b86e", alt: "Credenza de ratán con espejo circular sobre muro gris" },
      { id: "1600489000022-c2086d79f9d4", alt: "Cocina con gabinetes verde profundo y repisas de madera" },
      { id: "1616137466211-f939a420be84", alt: "Sala en grises con persianas de lámina y doble sofá" },
    ],
  },
  {
    slug: "loft-americana",
    name: "Loft Americana",
    subtitle: "Nave industrial reconvertida",
    category: "Residencial",
    year: "2024",
    location: "Colonia Americana, Guadalajara",
    surface: "190 m²",
    cover: "1505873242700-f289a29e1e0f",
    coverAlt: "Loft industrial con muro de ladrillo, estructura negra y doble altura",
    excerpt:
      "Conservamos el ladrillo y la estructura a la vista; lo nuevo se distingue de lo viejo.",
    goal: "Una bodega de los años cuarenta que había que volver habitable sin borrar lo que era. El reto: meter recámaras, baños e instalaciones en una nave de doble altura sin dividirla en cajas ni tapar el ladrillo original.",
    result:
      "Todo lo nuevo se resolvió como volúmenes exentos de acero negro que no tocan los muros históricos. Un tapanco alberga la recámara principal y deja la nave leyéndose completa desde la entrada. Las instalaciones van vistas, ordenadas como parte del diseño.",
    gallery: [
      { id: "1554995207-c18c203602cb", alt: "Sala con muro verde y sofá de piel" },
      { id: "1600566753086-00f18fb6b3ea", alt: "Planta abierta con escalera de madera y doble altura" },
      { id: "1502005229762-cf1b2da7c5d6", alt: "Escalera de peldaños de madera con barandal de acero" },
      { id: "1615875605825-5eb9bb5d52ac", alt: "Rincón de lectura con estantería de madera y textiles" },
    ],
  },
  {
    slug: "penthouse-puerta-hierro",
    name: "Penthouse Puerta de Hierro",
    subtitle: "Interiorismo y estilismo",
    category: "Residencial",
    year: "2024",
    location: "Puerta de Hierro, Zapopan",
    surface: "260 m²",
    cover: "1502005229762-cf1b2da7c5d6",
    coverAlt: "Escalera escultórica de madera y acero en doble altura",
    excerpt:
      "La escalera dejó de ser un trámite entre pisos y se volvió el centro de la casa.",
    goal: "El penthouse ya estaba construido y bien resuelto, pero se sentía frío y sin identidad. No había obra que hacer: el encargo era de interiorismo y estilismo puro, trabajando solo con mobiliario, textiles, iluminación y arte.",
    result:
      "Reubicamos la escalera como pieza central y la iluminamos desde el tragaluz. Mobiliario de piezas contadas —pocas y buenas—, textiles en lana y lino, y una colección de obra gráfica seleccionada con el cliente pieza por pieza.",
    gallery: [
      { id: "1598928506311-c55ded91a20c", alt: "Sala en blancos con techo artesonado y chimenea" },
      { id: "1571508601891-ca5e7a713859", alt: "Recámara luminosa con plantas y textiles claros" },
      { id: "1600210492486-724fe5c67fb0", alt: "Estancia con sofá de piel, plantas y muro de fotografías" },
      { id: "1618221195710-dd6b41faaea6", alt: "Sala con acabados de madera y ventana horizontal al jardín" },
    ],
  },
  {
    slug: "oficinas-zapopan",
    name: "Oficinas Zapopan Centro",
    subtitle: "Corporativo",
    category: "Comercial",
    year: "2025",
    location: "Zapopan, Jalisco",
    surface: "540 m²",
    cover: "1497366754035-f200968a6e72",
    coverAlt: "Pasillo de oficinas con cancelería de acero negro y concreto pulido",
    excerpt:
      "Privacidad acústica sin perder la luz: cancelería de piso a techo en todo el piso.",
    goal: "Un despacho de 40 personas que se mudaba a planta libre. Necesitaban salas cerradas para llamadas y juntas, pero sin volver el piso un laberinto ni bloquear la luz de las fachadas.",
    result:
      "Cancelería de acero y vidrio de piso a techo con doble sello acústico: se ve todo, no se oye nada. Concreto pulido en piso para reducir mantenimiento, y una franja de vegetación que marca la circulación sin necesidad de señalética.",
    gallery: [
      { id: "1604328698692-f76ea9498e76", alt: "Área de trabajo abierta con vegetación y piso de madera" },
      { id: "1524758631624-e2822e304c36", alt: "Lounge de espera con lámpara de arco y sillones claros" },
      { id: "1600607687939-ce8a6c25118c", alt: "Estancia amplia con cocina integrada y muro de madera" },
      { id: "1594026112284-02bb6f3352fe", alt: "Mueble flotante de madera con repisas abiertas" },
    ],
  },
  {
    slug: "restaurante-lafayette",
    name: "Restaurante Lafayette",
    subtitle: "Cocina de autor",
    category: "Comercial",
    year: "2024",
    location: "Lafayette, Guadalajara",
    surface: "220 m²",
    cover: "1517248135467-4c7edcad34c4",
    coverAlt: "Comedor de restaurante con celosías de madera y luz cálida",
    excerpt:
      "Ochenta comensales en un local angosto, con acústica que permite conversar.",
    goal: "Un local largo y angosto donde el cliente necesitaba ochenta lugares sin que se sintiera un pasillo, y donde la cocina abierta no invadiera el comedor con ruido y olor.",
    result:
      "Celosías de madera cada pocos metros rompen la perspectiva y crean cuatro ambientes dentro del mismo salón. Paneles acústicos escondidos en el plafón bajan el ruido de fondo lo suficiente para conversar sin levantar la voz.",
    gallery: [
      { id: "1554118811-1e0d58224f24", alt: "Barra de cafetería con plantas y mobiliario de madera" },
      { id: "1600489000022-c2086d79f9d4", alt: "Cocina con gabinetes verde profundo y repisas de madera" },
      { id: "1559339352-11d035aa65de", alt: "Terraza de restaurante con mesas junto al agua al atardecer" },
      { id: "1484154218962-a197022b5858", alt: "Cocina con isla central y lámparas colgantes negras" },
    ],
  },
  {
    slug: "cafe-colonias",
    name: "Café Colonias",
    subtitle: "Cafetería de barrio",
    category: "Comercial",
    year: "2023",
    location: "Santa Tere, Guadalajara",
    surface: "95 m²",
    cover: "1554118811-1e0d58224f24",
    coverAlt: "Interior de cafetería con vegetación, barra de madera y luz cálida",
    excerpt:
      "Presupuesto corto: mobiliario de fabricación local y un solo gesto fuerte de color.",
    goal: "Presupuesto apretado y un local heredado con instalaciones al día. Había que abrir en cuatro meses y lograr algo con carácter propio sin recurrir a acabados caros.",
    result:
      "Todo el mobiliario se fabricó con carpinteros del barrio en un solo tipo de madera. El gasto se concentró en dos cosas visibles: la barra y la iluminación. Los muros quedaron en aplanado de cal, y la vegetación hace el resto del trabajo.",
    gallery: [
      { id: "1517248135467-4c7edcad34c4", alt: "Comedor con celosías de madera e iluminación cálida" },
      { id: "1631679706909-1844bbd07221", alt: "Sala en tonos crema con textiles y fibras naturales" },
      { id: "1594026112284-02bb6f3352fe", alt: "Repisas flotantes de madera con objetos y plantas" },
      { id: "1615875605825-5eb9bb5d52ac", alt: "Estantería de madera con libros, arte y plantas" },
    ],
  },
  {
    slug: "casa-jardin-tapalpa",
    name: "Casa Jardín Tapalpa",
    subtitle: "Casa de campo y jardín",
    category: "Exterior",
    year: "2024",
    location: "Tapalpa, Jalisco",
    surface: "420 m² + 900 m² de jardín",
    cover: "1600607688969-a5bfcd646154",
    coverAlt: "Casa contemporánea de madera y volumen negro entre árboles",
    excerpt:
      "Un encino de sesenta años definió la planta: la casa se abrió para rodearlo.",
    goal: "El terreno tenía un encino enorme justo donde el proyecto original ponía la casa. La familia no quiso talarlo, así que había que replantear la planta completa alrededor del árbol.",
    result:
      "La casa se partió en dos volúmenes unidos por un puente acristalado, con el encino en medio como patio. La madera de la fachada se dejó sin tratar para que grise con el tiempo y se confunda con el bosque.",
    gallery: [
      { id: "1512917774080-9991f1c4c750", alt: "Fachada blanca contemporánea con alberca y palmeras" },
      { id: "1613490493576-7fde63acd811", alt: "Casa moderna con alberca y plafones de madera" },
      { id: "1600585154526-990dced4db0d", alt: "Fachada oscura al atardecer con celosías iluminadas" },
      { id: "1604014237800-1c9102c219da", alt: "Estancia abierta a la terraza con muro de madera" },
    ],
  },
  {
    slug: "terraza-bugambilias",
    name: "Terraza Bugambilias",
    subtitle: "Área exterior y alberca",
    category: "Exterior",
    year: "2023",
    location: "Bugambilias, Zapopan",
    surface: "180 m²",
    cover: "1613490493576-7fde63acd811",
    coverAlt: "Terraza con alberca, plafones de madera y cancelería oscura",
    excerpt:
      "Una azotea sin uso convertida en la habitación más usada de la casa.",
    goal: "Una terraza en azotea que nadie usaba: sol directo todo el día, sin sombra ni instalaciones. La familia quería poder comer ahí y usarla de noche todo el año.",
    result:
      "Una pérgola de madera calculada para el ángulo solar de Guadalajara da sombra de mediodía sin cerrar la vista. Sumamos alberca de nado corto, cocina exterior e iluminación cálida a nivel de piso. Hoy es donde más tiempo pasan.",
    gallery: [
      { id: "1559339352-11d035aa65de", alt: "Terraza con mesas y toldo abierto frente al agua" },
      { id: "1512917774080-9991f1c4c750", alt: "Fachada blanca con alberca y vegetación" },
      { id: "1600607688969-a5bfcd646154", alt: "Casa de madera y volumen oscuro rodeada de jardín" },
      { id: "1600566753086-00f18fb6b3ea", alt: "Interior con doble altura abierto al exterior" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Proyectos de la misma categoría, excluyendo el actual. */
export function similarProjects(current: Project, limit = 3) {
  return projects
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit);
}

/**
 * Siguiente proyecto en la lista, dando la vuelta al llegar al final.
 * `exclude` evita proponer uno que ya se muestra arriba como similar; si todos
 * están excluidos, se devuelve el siguiente sin más.
 */
export function nextProject(current: Project, exclude: Project[] = []) {
  const excluidos = new Set([current.slug, ...exclude.map((p) => p.slug)]);
  const i = projects.findIndex((p) => p.slug === current.slug);

  for (let n = 1; n <= projects.length; n++) {
    const candidato = projects[(i + n) % projects.length];
    if (!excluidos.has(candidato.slug)) return candidato;
  }

  return projects[(i + 1) % projects.length];
}
