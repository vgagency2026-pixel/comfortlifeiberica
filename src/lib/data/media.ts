import type { Image } from "@/types/image";

function img(path: string, width: number, height: number, alt: string): Image {
  return { url: `/images/${path}`, width, height, alt };
}

/**
 * Registro central de fotografía real disponible (ver ../../../IMAGES.md).
 * Cada entrada documenta su origen (código IMG-XX) para trazabilidad.
 */
export const MEDIA = {
  // IMG-05 — hero, producto (quesos)
  quesosMarcoBarroco: img(
    "producto-quesos-marco-barroco.jpg",
    1023,
    1537,
    "Selección de quesos artesanos presentada dentro de un marco barroco dorado, como una obra de museo",
  ),
  // IMG-14 — hero secundario, producto (embutidos)
  jamonMarcoCobre: img(
    "producto-jamon-marco-cobre.jpg",
    1086,
    1448,
    "Rulos de jamón ibérico enmarcados en cobre ornamentado sobre pizarra negra húmeda",
  ),
  // IMG-12 — producto (conservas), única horizontal
  anchoasBandejaPlata: img(
    "producto-anchoas-bandeja-plata.jpg",
    1402,
    1122,
    "Filetes de anchoa en aceite dispuestos sobre una bandeja de plata antigua ornamentada",
  ),
  // IMG-08 — producto/gastronomía (jamón)
  jamonMano: img(
    "producto-jamon-mano.jpg",
    1200,
    1600,
    "Mano sosteniendo una loncha de jamón ibérico junto a una copa de vino rosado",
  ),
  // IMG-16 — producto (embutidos), tratamiento de color aplicado en UI
  embutidoColgado: img(
    "producto-embutido-colgado.jpg",
    1200,
    1200,
    "Pieza de embutido curado colgada, con lonchas en composición suspendida",
  ),
  // IMG-15 — producto/bebidas
  coctelNegroni: img(
    "producto-coctel-negroni.jpg",
    1024,
    1536,
    "Cóctel de aperitivo servido en vaso de cristal tallado, con romero y piel de naranja",
  ),
  // IMG-10 — gastronomía
  tablaQuesosOscura: img(
    "gastronomia-tabla-quesos-oscura.jpg",
    736,
    1104,
    "Tabla oscura con quesos, higos, uvas y frutos secos, iluminación cálida de sobremesa",
  ),
  // IMG-13 — gastronomía, uso solo recortado
  tablaMixtaAbundante: img(
    "gastronomia-tabla-mixta-abundante.jpg",
    1200,
    1500,
    "Tabla de embutidos, quesos y panes artesanos vista desde arriba",
  ),
  // IMG-01 — lifestyle
  aceitunasAtardecer: img(
    "lifestyle-aceitunas-atardecer.jpg",
    1200,
    1600,
    "Mano tomando una aceituna de un cuenco de barro en una mesa iluminada por la última luz de la tarde",
  ),
  // IMG-07 — lifestyle editorial (hero de Filosofía)
  retratoClaroscuro: img(
    "lifestyle-retrato-claroscuro.jpg",
    900,
    1600,
    "Silueta a contraluz con sombrero cordobés y copa de vino blanco, claroscuro absoluto",
  ),
  // IMG-20 — lifestyle hostelería
  sumillerSirviendo: img(
    "lifestyle-sumiller-sirviendo.jpg",
    736,
    1103,
    "Sumiller sirviendo vino tinto en copa junto a una tabla de quesos y jamón",
  ),
  // IMG-23 — lifestyle, uso recortado (excluir el mar del encuadre)
  roseVelero: img(
    "lifestyle-rose-velero.jpg",
    901,
    1200,
    "Vino rosado sirviéndose en dos copas de cristal al aire libre",
  ),
  // IMG-17 — territorio / conceptual
  botellaTierra: img(
    "territorio-botella-tierra.jpg",
    786,
    1049,
    "Silueta de una botella impresa sobre tierra seca y pedregosa, imagen conceptual de origen",
  ),
  // IMG-21 — detalle
  cortezaQueso: img(
    "detalle-corteza-queso.jpg",
    735,
    1072,
    "Macro de cortezas y texturas de distintos quesos artesanos",
  ),
  // IMG-03 — arte / storytelling
  bodegonCiruelas: img(
    "arte-bodegon-ciruelas.jpg",
    900,
    900,
    "Pintura al óleo de ciruelas enmarcada en madera oscura, estilo bodegón de museo",
  ),
  // IMG-19 — arte / storytelling
  bodegonHigos: img(
    "arte-bodegon-higos.jpg",
    749,
    755,
    "Pintura al óleo de higos partidos enmarcada, estilo bodegón de museo",
  ),
  // IMG-09 — arte / territorio-varietal
  garnachaIlustrada: img(
    "arte-garnacha-ilustrada.jpg",
    1254,
    1254,
    "Ilustración enmarcada de un racimo de uva Garnacha con su hoja, etiqueta dorada",
  ),
  // IMG-04 — textura
  copaAbstracta: img(
    "textura-copa-abstracto.jpg",
    809,
    1249,
    "Primer plano abstracto del borde de una copa de vino a contraluz",
  ),
  // IMG-11 — textura
  condensacionCopa: img(
    "textura-condensacion-copa.jpg",
    736,
    981,
    "Macro de condensación sobre una copa fría, con destello de luz cálida",
  ),

  // Fotografía nueva aportada por el cliente (carpeta VINOS/) — foco vinos
  hojaRocioVinedo: img(
    "vinos-hoja-rocio.jpg",
    720,
    1080,
    "Gota de rocío sobre una hoja de vid, viñedo en terrazas desenfocado al fondo, luz dorada",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/images 2/) —
  // brote de vid sobre cepa vieja, viñedo desenfocado al fondo. Sustituye
  // a la copa de condensación (foto duplicada de textura-condensacion-copa,
  // ya en uso en Destilados, y demasiado ambigua para leerse como vino).
  broteCepaVinedo: img(
    "vinos-brote-cepa-vinedo.jpg",
    736,
    1308,
    "Brote joven de vid creciendo sobre una cepa vieja y nudosa, viñedo desenfocado al fondo",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/)
  copaPiano: img(
    "vinos-copa-piano.jpg",
    720,
    1080,
    "Copa de vino espumoso sobre un piano de cola, luz dramática dorada y negra",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/, pintura enmarcada)
  bodegonCiruelasMarcoNegro: img(
    "arte-bodegon-ciruelas-marco-negro.jpg",
    900,
    900,
    "Pintura al óleo de ciruelas enmarcada en madera oscura, firma y fecha doradas",
  ),
  // Fotografía nueva aportada por el cliente (carpeta ACEITE OLIVAS/)
  aceiteGotaPiedra: img(
    "aceite-gota-piedra.jpg",
    722,
    1080,
    "Aceite de oliva goteando entre dos aceitunas sobre piedras de molino apiladas",
  ),
  // Fotografía nueva aportada por el cliente (carpeta ACEITE OLIVAS/)
  aceitunaTenedor: img(
    "aceite-aceituna-tenedor.jpg",
    736,
    981,
    "Aceituna brillante sobre púas de madera con una gota de aceite cayendo, fondo negro",
  ),
  // Fotografía nueva aportada por el cliente (carpeta ACEITE OLIVAS/)
  cucharasAceitunas: img(
    "aceite-cucharas-pizarra.jpg",
    1080,
    690,
    "Tres cucharas antiguas sobre pizarra oscura con aceitunas negras, aceite y aceitunas verdes",
  ),
  // Fotografía nueva aportada por el cliente (carpeta IBERICOS/, contenido real: anchoas)
  anchoasPintxo: img(
    "conservas-anchoas-pintxo.jpg",
    736,
    981,
    "Pintxos de anchoa sobre pan tostado sobre un plato blanco, terraza exterior",
  ),
  // Fotografía nueva aportada por el cliente (carpeta IBERICOS/)
  jamonLoncheado: img(
    "ibericos-jamon-loncheado.jpg",
    667,
    1000,
    "Jamón ibérico loncheado sobre plato oscuro, dos copas de vino blanco desenfocadas al fondo",
  ),
  // Fotografía nueva aportada por el cliente (sin categorizar, contenido real: quesos)
  cunasQueso: img(
    "quesos-cunas-detalle.jpg",
    735,
    1072,
    "Cuñas de queso curado de distintas variedades, primer plano de texturas de corteza",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/, contenido real: cóctel)
  coctelTerciopelo: img(
    "espirituosas-coctel-terciopelo.jpg",
    810,
    1080,
    "Copa de cóctel sobre un brazo de sillón de terciopelo rojo, mobiliario de madera al fondo",
  ),
  // Pexels License — Betül Kaya (pexels.com/photo/38928225), sin coste ni atribución obligatoria
  olivarCentenario: img(
    "olivar-centenario.jpg",
    2400,
    1600,
    "Olivar centenario con troncos retorcidos iluminados por la luz dorada del atardecer entre el follaje",
  ),
  // Unsplash License — Zetong Li (unsplash.com/photos/photo-1772950399275), sin coste ni atribución obligatoria
  costaMarAtlantico: img(
    "costa-mar-atlantico.jpg",
    2400,
    1477,
    "Roquedos y agujas de piedra en la orilla, olas rompiendo bajo un cielo de atardecer dorado",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/images 2/)
  montanaVinedo: img(
    "montana-vinedo.jpg",
    941,
    1672,
    "Viñedo en hileras visto desde un pórtico de piedra, colinas boscosas y sol poniente al fondo",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/images 2/)
  quesoCuevaExperiencia: img(
    "queso-cueva-experiencia.jpg",
    1023,
    1537,
    "Tabla de quesos artesanos en distintos cortes junto a embutido ibérico y frutos rojos, sobre madera rústica",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/images 2/)
  experienciasHombreVino: img(
    "experiencias-hombre-vino.jpg",
    1023,
    1537,
    "Hombre de perfil oliendo una copa de vino blanco, luz cálida y ambiente íntimo",
  ),
  // Fotografía nueva aportada por el cliente (carpeta VINOS/images 2/)
  filosofiaHeroMiradorVinedo: img(
    "filosofia-hero-mirador-vinedo.jpg",
    1086,
    1448,
    "Mujer con vestido elegante contemplando un viñedo al atardecer, enmarcada en un espejo ovalado dorado",
  ),
  // Firma del fundador, recortada del original y recoloreada a champán
  // sobre transparencia real (ver IMAGENES/VINOS/images 2/victor firma.jpeg)
  firmaVictor: img(
    "firma-victor.png",
    509,
    519,
    "Firma manuscrita de Víctor Viana",
  ),

  // Pared de galería de la Sala Vinos — 4 piezas ya enmarcadas en la propia
  // fotografía, recompuestas sobre un mismo lienzo 4:5 con fondo e
  // iluminación cálida unificados (ver scripts de proceso, no versionados).
  // Secuencia narrativa deliberada: uva → viñedo → vino → experiencia.
  // Prueba piloto solo en Vinos — ver coleccion/[categoria]/page.tsx.
  vinosGaleriaUva: img(
    "vinos-galeria-01-uva.jpg",
    1000,
    1250,
    "Racimo de uva tinta en la vid enmarcado en pan de oro, viñedo desenfocado al fondo",
  ),
  vinosGaleriaVinedo: img(
    "vinos-galeria-02-vinedo.jpg",
    1000,
    1250,
    "Sarmiento de vid nudoso enmarcado en dorado, hileras de viñedo desenfocadas al fondo",
  ),
  vinosGaleriaVino: img(
    "vinos-galeria-03-vino.jpg",
    1000,
    1250,
    "Copa de vino tinto sobre una barrica en una bodega de crianza, enmarcada en pan de oro",
  ),
  vinosGaleriaExperiencia: img(
    "vinos-galeria-04-experiencia.jpg",
    1000,
    1250,
    "Marco ovalado dorado barroco con una copa de vino tinto sostenida por una mano enguantada de encaje",
  ),

  // Pared de galería de la Sala Aceites (piloto nº 2, ver
  // coleccion/[categoria]/page.tsx) — fotografía real sin marco propio,
  // envuelta en el marco de museo y un grado de color cálido compartido.
  aceiteOlivarPiezaUno: img(
    "aceite-olivar-1.jpg",
    1200,
    1600,
    "Mano tomando una aceituna de un cuenco de barro junto a una copa de vino rosado, luz de atardecer",
  ),
  aceiteOlivarPiezaDos: img(
    "aceite-olivar-2.jpg",
    722,
    1080,
    "Aceite de oliva goteando entre dos aceitunas sobre piedras de molino apiladas",
  ),
  aceiteOlivarPiezaTres: img(
    "aceite-olivar-3.jpg",
    736,
    981,
    "Aceituna brillante sobre púas de madera con una gota de aceite cayendo, fondo oscuro",
  ),
  aceiteOlivarPiezaCuatro: img(
    "aceite-olivar-4.jpg",
    1080,
    690,
    "Tres cucharas antiguas con aceitunas negras, aceite de oliva y aceitunas verdes, fondo oscuro",
  ),
  // Pexels License — Malcolm Garret (pexels.com/photo/13425273), sin coste ni atribución obligatoria
  mesaVintageMaderaDorada: img(
    "mesa-vintage-madera-dorada.jpg",
    2400,
    1600,
    "Textura de mesa de madera envejecida con luz cálida lateral",
  ),

  // Pared de galería de la Sala Conservas (piloto nº 3, ver
  // coleccion/[categoria]/page.tsx) — fotografía real sin marco propio,
  // envuelta en el marco de museo y un grado de color cálido compartido.
  conservasAnchoasPlata: img(
    "conservas-anchoas-plata.jpg",
    1402,
    1122,
    "Filetes de anchoa en aceite sobre una bandeja de plata antigua ornamentada, fondo oscuro",
  ),
  // Pexels License — Augustinus Martinus Noppé (pexels.com/photo/19533223)
  conservasPulpoBrasa: img(
    "conservas-pulpo-brasa.jpg",
    2400,
    3297,
    "Pulpo a la brasa emplatado sobre fondo negro, con salsa verde y guarnición",
  ),
  // Pexels License — Deane Bayas (pexels.com/photo/39022517)
  conservasMejillones: img(
    "conservas-mejillones.jpg",
    2000,
    3000,
    "Mejillones en salsa servidos con pan sobre fondo oscuro",
  ),
  // Pexels License — Rachel Claire (pexels.com/photo/8112427)
  conservasCaviar: img(
    "conservas-caviar.jpg",
    2400,
    3600,
    "Lata de caviar negro sobre superficie oscura, composición mínima y elegante",
  ),
  // Pexels License — urtimud.89 (pexels.com/photo/9328774), sin coste ni atribución obligatoria
  piedraMarOscura: img(
    "piedra-mar-oscura.jpg",
    2400,
    1600,
    "Piedras oscuras y húmedas de costa, textura de fondo",
  ),
} as const;
