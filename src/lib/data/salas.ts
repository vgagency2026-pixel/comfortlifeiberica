import type { SalaContent } from "@/types/sala";

/**
 * Narrativa profunda de cada sala. Conceptos universales y categorías
 * reales de producto — nunca marcas, bodegas o denominaciones inventadas.
 * Ver CURATORIAL_GUIDE.md §0 y §17.
 */
export const SALAS: SalaContent[] = [
  {
    slug: "vinos",
    narrative: [
      "El vino ibérico no se entiende sin el territorio que lo sostiene. Cada ladera, cada altitud, cada suelo de granito o de pizarra escribe una parte de lo que después se encuentra en la copa. Ninguna técnica de bodega sustituye esa primera decisión: dónde se planta la viña.",
      "De un mismo país nacen tintos de largo reposo, blancos de acidez tensa, rosados de maceración breve y espumosos que reclaman su propio tiempo de crianza en botella. Ninguna de estas categorías es menor: cada una responde a un clima, una variedad y una tradición distintos.",
      "Buscamos vinos de parcela y pequeñas bodegas antes que grandes volúmenes de producción. Un vino de montaña, hecho en cantidades limitadas, cuenta casi siempre una historia más precisa que uno pensado para una escala industrial.",
    ],
    productTypes: [
      "Tintos",
      "Blancos",
      "Rosados",
      "Espumosos",
      "Vinos de parcela",
      "Pequeñas bodegas",
      "Vinos de montaña",
    ],
    spotlight: {
      title: "Sierra de Gredos",
      text: "Un macizo de granito en el centro de la Península donde la viña se cultiva, en muchos casos, por encima de los 800 metros. La amplitud térmica entre el día y la noche es excepcional, y es precisamente esa amplitud la que da a sus vinos una tensión y una frescura difíciles de encontrar en zonas de menor altitud. Es, para nosotros, uno de los territorios vitivinícolas más interesantes de toda la Península Ibérica.",
    },
  },
  {
    slug: "aceites",
    narrative: [
      "El olivo lleva en la Península Ibérica más de tres mil años. Ningún otro cultivo ha acompañado tanto tiempo al paisaje ibérico, y ningún otro producto depende tanto de la rapidez con la que se actúa tras la cosecha.",
      "Entre el árbol y la muela hay, como mucho, unas horas. Ese margen decide si el aceite resultante conserva la intensidad aromática de la aceituna recién recogida o si empieza a perderla. Un aceite de cosecha temprana, molturado en frío, es siempre el resultado de una carrera contra el reloj ganada con precisión.",
      "En esta sala reunimos vírgenes extra, aceites monovarietales que respetan una única variedad de aceituna, y también los productos que nacen del mismo olivar: aceitunas de mesa, encurtidos artesanos y sal aromatizada con la propia hoja del árbol.",
    ],
    productTypes: [
      "Aceite de Oliva Virgen Extra",
      "AOVE Premium",
      "Aceites de cosecha temprana",
      "Aceites monovarietales",
      "Aceitunas gourmet",
      "Aceitunas aliñadas",
      "Flor de sal",
      "Vinagres artesanos",
    ],
  },
  {
    slug: "quesos",
    narrative: [
      "Un queso es, ante todo, una decisión sobre el tiempo. La leche, de oveja, de cabra, de vaca o de la mezcla de varias, es solo el punto de partida. Lo que ocurre después, durante semanas o meses de maduración, es lo que determina el carácter final de cada pieza.",
      "Priorizamos los quesos de leche cruda siempre que el proceso lo permite, porque es la leche cruda la que conserva la microbiota específica de cada rebaño y de cada pasto. Afinados, curados y semicurados conviven en esta sala, cada uno con su propio ritmo de maduración.",
      "Las cuevas naturales de piedra caliza siguen siendo, en muchas queserías artesanas, el mejor sistema de maduración conocido: humedad constante, temperatura estable y un microclima que ninguna cámara industrial reproduce del todo.",
    ],
    productTypes: [
      "Quesos de oveja",
      "Quesos de cabra",
      "Quesos de vaca",
      "Quesos de mezcla",
      "Leche cruda",
      "Afinados",
      "Curados",
      "Semicurados",
      "Maduración en cuevas naturales",
    ],
  },
  {
    slug: "embutidos",
    narrative: [
      "El cerdo ibérico es, probablemente, el producto que mejor resume el patrimonio gastronómico de la Península. Su capacidad para acumular grasa infiltrada durante la montanera, el periodo en el que se alimenta de bellota en libertad, no tiene equivalente en ninguna otra raza porcina.",
      "De esa materia prima nacen piezas muy distintas entre sí. El jamón y la paleta exigen los tiempos de curación más largos. El lomo, la presa y el secreto ofrecen la grasa infiltrada en su expresión más directa. El chorizo, el salchichón y el morcón trasladan ese mismo cerdo a la tradición embutidora, con el pimentón y las especias como firma de cada casa.",
      "En todos los casos, el denominador común es el mismo: curación natural, sin atajos, en secaderos donde la humedad y la temperatura las decide la estación, no un calendario de producción.",
    ],
    productTypes: [
      "Jamón Ibérico",
      "Paleta",
      "Lomo",
      "Presa",
      "Secreto",
      "Morcón",
      "Chorizo",
      "Salchichón",
    ],
  },
  {
    slug: "conservas",
    narrative: [
      "La conserva nació como una forma de vencer al tiempo: capturar un producto en el momento exacto de su mejor sazón y detener ese instante antes de que se pierda. En la costa ibérica esa técnica se convirtió en una tradición propia, con métodos que apenas han cambiado en generaciones.",
      "El bonito del norte, la ventresca, las anchoas curadas en sal, los berberechos y las navajas de roca comparten un mismo principio: cuanto menos tiempo pasa entre la captura y el envasado, mejor es el resultado. Las sardinas y las huevas siguen la misma lógica estacional.",
      "El caviar, de origen distinto al de la conserva tradicional ibérica, comparte con ellas la misma exigencia de manipulación mínima y frío constante. En esta sala reunimos conservas gourmet que, en conjunto, representan lo mejor de lo que el mar ibérico y sus técnicas de conservación pueden ofrecer.",
    ],
    productTypes: [
      "Anchoas",
      "Bonito del Norte",
      "Ventresca",
      "Berberechos",
      "Navajas",
      "Mejillones",
      "Sardinas",
      "Huevas",
      "Caviar",
      "Conservas gourmet",
    ],
  },
  {
    slug: "bebidas-espirituosas",
    narrative: [
      "La destilación es, en esencia, un ejercicio de concentración: tomar algo y reducirlo a su expresión más intensa. En la Península Ibérica esa técnica ha dado lugar a tradiciones muy distintas entre sí, desde el orujo gallego hasta el vermut de aperitivo servido en el sur.",
      "Ginebras de autor, whiskies de maduración propia, brandies envejecidos en barrica y licores artesanos conviven en esta sala bajo el mismo criterio: procesos lentos, lotes reducidos y un respeto por el tiempo de reposo que ninguna producción a gran escala puede permitirse.",
      "El vermut ocupa un lugar propio: no es tanto una bebida como un ritual de sobremesa, pensado para alargar la conversación antes o después de la mesa.",
    ],
    productTypes: [
      "Ginebras",
      "Whiskies",
      "Brandies",
      "Orujos",
      "Vermut",
      "Licores artesanos",
    ],
  },
];

export function getSalaBySlug(slug: string): SalaContent | undefined {
  return SALAS.find((sala) => sala.slug === slug);
}
