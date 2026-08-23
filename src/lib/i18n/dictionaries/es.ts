import type { Dictionary } from "../types";

export const es: Dictionary = {
  nav: {
    filosofia: "Nuestra Filosofía",
    coleccion: "Selección Gourmet",
    productores: "Productores",
    territorios: "Territorios",
    experiencias: "Experiencias",
    contacto: "Contacto",
    discover: "Descubrir",
  },
  footer: {
    description:
      "Curaduría del patrimonio gastronómico ibérico para la alta hostelería.",
    sitemapHeading: "Mapa del sitio",
    contactHeading: "Contacto directo",
    rights: "Todos los derechos reservados.",
  },
  home: {
    heroEyebrow: "Comfort Life Ibérica",
    heroTitleLine1: "Una galería de arte",
    heroTitleLine2: "gastronómica.",
    heroManifesto:
      "No presentamos productos. Presentamos el patrimonio gastronómico ibérico con el mismo rigor con el que un museo presenta el arte.",
    identityEyebrow: "Quiénes somos",
    identityText:
      "La Península Ibérica ha producido, durante milenios, algunos de los alimentos y bebidas más extraordinarios del mundo. Nosotros hacemos el trabajo de encontrar lo mejor, contarlo con el rigor que merece y presentarlo a quien tiene el criterio para apreciarlo.",
    collectionEyebrow: "La colección",
    collectionTitle: "Seis salas, un mismo criterio",
    collectionCta: "Recorrer la colección",
    selectionEyebrow: "El proceso de selección",
    selectionTitle:
      "No mostramos todo lo que existe. Mostramos lo que ha superado nuestro criterio.",
    selectionSteps: [
      {
        number: "01",
        title: "Seleccionar",
        text: "Visitamos productores, catamos cientos de referencias y rechazamos casi todas. La mayoría de quienes se presentan no entran en la colección.",
      },
      {
        number: "02",
        title: "Presentar",
        text: "Fotografiamos, escribimos y diseñamos cada pieza con el mismo rigor que un museo dedica a una obra que va a exponer.",
      },
      {
        number: "03",
        title: "Facilitar",
        text: "Resolvemos la logística y el idioma entre productores dispersos por la Península y hostelería exigente en Portugal y el resto de Europa.",
      },
      {
        number: "04",
        title: "Acceso",
        text: "No vendemos a cualquiera. Abrimos la puerta a quien tiene el criterio para valorar lo que hay detrás de cada producto.",
      },
    ],
    territoryEyebrow: "Los territorios",
    territoryTitle: "Cuatro paisajes, no un mapa de proveedores",
    territoryText:
      "La montaña, el olivar, la dehesa y la costa. El origen no es un dato decorativo: es el argumento que explica por qué cada producto es lo que es.",
    territoryCta: "Explorar los territorios",
    experiencesEyebrow: "Experiencias",
    experiencesTitle: "Historias que no caben en una ficha técnica",
    experiencesCta: "Ver todas las experiencias",
    contactEyebrow: "Iniciemos una conversación",
    contactTitle: "Si comparte nuestro criterio, nos gustaría conocerle.",
    contactCta: "Solicitar información",
  },
  coleccion: {
    heroEyebrow: "Selección Gourmet",
    heroTitle: "Seis salas de un mismo criterio.",
    intro:
      "Esta colección se presenta como un recorrido, no como un catálogo. Cada sala reúne un mismo eje temático del patrimonio gastronómico ibérico, con el mismo criterio con el que un museo organiza una exposición: pocas piezas, elegidas, nunca todo lo que existe.",
    salaLabel: "Sala",
    enterSala: "Entrar en la sala",
    placeholderNote:
      "Fotografía en catalogación mientras se construye la red de origen",
  },
  sala: {
    spotlightEyebrow: "Protagonista",
    productTypesEyebrow: "Lo que reunimos en esta sala",
    continuesEyebrow: "La colección continúa",
    continueCta: "Continuar hacia la Sala {n} · {sala}",
    concludesEyebrow: "El recorrido concluye",
    concludesText:
      "Ha recorrido nuestra colección. Si comparte nuestra manera de entender el patrimonio gastronómico ibérico, estaremos encantados de conocerle.",
    ctaBack: "Volver a la colección",
    ctaContact: "Solicitar información",
  },
  salaTransitions: {
    vinos:
      "De la ladera que templa la viña al olivar que mide el tiempo en siglos: la altitud cede paso a la paciencia del árbol. La sala siguiente continúa este mismo criterio con otro fruto.",
    aceites:
      "El olivar mira hacia el interior. El mar exige otra urgencia, otro respeto por el instante. La sala siguiente recoge esa misma paciencia, ahora frente a la marea.",
    conservas:
      "De la costa volvemos a la montaña, esta vez hacia la cueva. La leche, como la marea, tiene su propio calendario. La sala siguiente lo escucha con la misma atención.",
    quesos:
      "Antes del secadero hay que atravesar la dehesa: encinas centenarias, bellota y un cerdo que camina en libertad. La sala de los Ibéricos empieza exactamente ahí.",
    embutidos:
      "Después de tanta curación, llega el momento del reposo. La última sala guarda lo que se sirve antes, o después, de la mesa.",
    "bebidas-espirituosas": "",
  },
  categories: {
    vinos: {
      label: "Vinos",
      tourLabel: "Vinos",
      concept: "Piedra, altura y espera",
      poeticTitle: "Antes de la copa, hubo una montaña.",
      editorial:
        "La vid no elige el suelo: lo hereda. Granito, pizarra, arena decantada por siglos de lluvia. Cada uno impone su propio silencio a la uva, mucho antes de que exista bodega.",
      closingLine: ["Cepas viejas", "Altitud de montaña", "Cosechas breves"],
    },
    aceites: {
      label: "Aceites y Olivar",
      tourLabel: "El Olivar",
      concept: "Luz, tiempo y aroma",
      poeticTitle: "El olivo no tiene prisa; el aroma, sí.",
      editorial:
        "Entre el árbol y la muela hay apenas horas. Ese margen, tan breve que casi no se nota, decide si el aceite conserva el aroma de la aceituna recién caída o empieza, en silencio, a perderlo.",
      closingLine: ["Prensado en frío", "Cosecha temprana", "Aroma de origen"],
    },
    quesos: {
      label: "Quesos",
      tourLabel: "Los Quesos",
      concept: "Piedra, cueva y tiempo",
      poeticTitle: "Ninguna receta apresura una espera.",
      editorial:
        "La leche es apenas el principio. Lo que ocurre después, semanas, a veces meses, dentro de una cueva que nadie apresura, es lo que de verdad convierte una pieza en lo que llega a ser.",
      closingLine: ["Cuevas naturales", "Leche cruda", "Espera artesana"],
    },
    embutidos: {
      label: "Ibéricos",
      tourLabel: "Los Ibéricos",
      concept: "Dehesa, tiempo y legado",
      poeticTitle: "Cada loncha guarda una estación.",
      editorial:
        "La montanera no se acelera: el cerdo ibérico camina la dehesa a su propio paso, buscando la bellota que decide, meses antes de que exista jamón, casi todo su carácter.",
      closingLine: ["Montanera libre", "Curación lenta", "Legado de dehesa"],
    },
    conservas: {
      label: "Conservas del Mar",
      tourLabel: "El Mar",
      concept: "El instante detenido",
      poeticTitle: "Un gesto que detiene la marea.",
      editorial:
        "Entre la pesca y el envasado apenas pasan horas. Conservar bien no es más que ganar esa carrera silenciosa contra el tiempo, sin que se note la prisa.",
      closingLine: [
        "Captura y frío",
        "Pesca de temporada",
        "Tradición atlántica",
      ],
    },
    "bebidas-espirituosas": {
      label: "Destilados",
      tourLabel: "Los Destilados",
      concept: "Fuego, madera y silencio",
      poeticTitle: "Antes de la mesa, un instante propio.",
      editorial:
        "Un buen aperitivo no adelanta la comida: la retrasa un poco, a propósito. Ese pequeño gesto de paciencia, más que cualquier receta, es lo que de verdad se sirve.",
      closingLine: [
        "Maceración artesanal",
        "Ritual de sobremesa",
        "Tradición ibérica",
      ],
    },
  },
  salas: {
    vinos: {
      narrative: [
        "Ninguna técnica de bodega corrige una mala decisión de origen. La viña se planta una sola vez: esta ladera y no la de enfrente, este suelo de granito y no el de pizarra del valle vecino. Esa elección decide casi todo lo que vendrá después, y el vino, cuando por fin llega a la copa, no hace más que confirmarlo.",
        "En la montaña, el día calienta y la noche enfría, y esa diferencia, invisible pero constante, es la que templa un vino de altura. Tintos de carácter sereno, blancos de tensión mineral, rosados que apenas rozan la piel de la uva, espumosos que aprenden la paciencia dentro de la botella: cada estilo responde a un mismo clima, vivido de un modo distinto.",
        "Preferimos la parcela pequeña a la extensión. Una viña de pocas hectáreas, vendimiada a mano y con calma, cuenta casi siempre una historia más precisa que cualquier volumen pensado para no agotarse nunca.",
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
        text: "Un macizo de granito en el centro de la Península, donde algunas viñas se cultivan por encima de los ochocientos metros. Ahí arriba la noche no perdona: baja de golpe, y esa caída térmica graba en la uva una tensión que ninguna llanura consigue imitar. Pocos territorios vitivinícolas ibéricos nos parecen tan elocuentes.",
      },
    },
    aceites: {
      narrative: [
        "Hay una luz particular sobre el olivar, baja, dorada, mediterránea, que ningún otro cultivo reclama con tanta insistencia. El olivo lleva más de tres mil años en la Península y, aun así, cada cosecha se juega en un puñado de horas: entre la caída de la aceituna y su paso por la muela, el aroma empieza, en silencio, a desvanecerse.",
        "Se cosecha en verde, cuando la aceituna todavía no ha madurado del todo, porque es entonces cuando guarda las notas más vivas: hoja recién cortada, almendra tierna, un amargor que despierta antes que empalague. La molienda en frío, sin apenas calor añadido, es la única forma de no traicionar ese instante.",
        "Del mismo olivar nacen también las aceitunas que se comen enteras, los encurtidos de la casa y la sal que se perfuma, sencillamente, dejándola descansar junto a la hoja del árbol. Todo pertenece al mismo silencio del campo.",
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
    quesos: {
      narrative: [
        "Un queso no se hace: se espera. La leche, de oveja, de cabra, de vaca, o de la conversación entre varias, es solo el primer gesto. Todo lo demás ocurre después, a un ritmo que ningún calendario de producción está autorizado a discutir.",
        "Preferimos la leche cruda siempre que el proceso lo permite, porque es ella la que conserva la memoria exacta de un rebaño y un pasto: lo que comió, dónde durmió, qué aire respiró esa temporada. Pasteurizar es, en cierto modo, empezar a olvidar esa memoria.",
        "Las cuevas de piedra caliza siguen siendo, para muchos pastores y queseros, el mejor sistema de maduración jamás inventado: humedad constante, temperatura que apenas varía, un microclima que ninguna cámara industrial reproduce del todo. Ahí dentro, afinados, curados y semicurados aprenden, cada uno a su ritmo, a convertirse en lo que serán.",
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
    embutidos: {
      narrative: [
        "Antes de que exista el jamón, existe la dehesa: encinas centenarias, pasto libre, un equilibrio que ningún ganadero inventó, sino que aprendió a respetar. Durante la montanera, el cerdo ibérico recorre ese paisaje a diario, buscando la bellota que caerá cuando tenga que caer, no cuando convenga.",
        "Esa libertad de movimiento, kilómetros, cada día, bajo la sombra de las encinas, es lo que infiltra la grasa que después se reconoce en la loncha. De un mismo animal nacen piezas que no se parecen entre sí: el jamón y la paleta, que exigen los secaderos más largos; el lomo, la presa y el secreto, que entregan esa grasa infiltrada casi sin intermediarios; el chorizo, el salchichón y el morcón, donde el pimentón y las especias firman, discretamente, cada casa.",
        "La curación tampoco se negocia con un calendario. Se negocia con el aire de la sierra, con la humedad que decide la estación, con la paciencia de quien entiende que apresurar un secadero es, sencillamente, arruinarlo.",
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
    conservas: {
      narrative: [
        "Hay algo casi museográfico en una buena conserva: captura un instante (una marea, una temporada, un cardumen exacto) y lo detiene dentro de un frasco, para que llegue intacto mucho después de que ese momento haya pasado. Ninguna otra técnica gastronómica trabaja tan directamente contra el reloj.",
        "El bonito del norte y su ventresca, las anchoas curadas en sal, los berberechos, las navajas de roca y los mejillones responden a un mismo principio silencioso: cuanto menos tiempo transcurre entre la captura y el envasado, más fiel es el resultado a lo que el mar entregó esa mañana. Las sardinas y las huevas siguen la misma lógica, atadas siempre a su estación.",
        "El caviar, de origen distinto al de esta tradición atlántica y mediterránea, comparte sin embargo la misma exigencia: manipulación mínima, frío constante, respeto absoluto por la materia prima.",
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
    "bebidas-espirituosas": {
      narrative: [
        "Destilar es, en el fondo, un ejercicio de fuego y paciencia: tomar algo y reducirlo, muy despacio, a su versión más concentrada. En la Península esa disciplina ha dado tradiciones que apenas se parecen entre sí, del orujo gallego, nacido del fuego y la niebla, al vermut del sur, pensado para alargar una sobremesa.",
        "La madera hace el resto del trabajo, en silencio, durante años que nadie apresura. Ginebras de autor, whiskies de maduración propia, brandies que envejecen en barrica y licores de receta casera comparten el mismo criterio: lotes pequeños, tiempos largos, un reposo que ninguna producción a gran escala puede permitirse.",
        "El vermut ocupa un lugar aparte. No es tanto una bebida como un ritual: una copa que se sirve antes o después de la mesa, sin más propósito que estirar la conversación un poco más de lo previsto.",
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
  },
  filosofia: {
    heroEyebrow: "Nuestra filosofía",
    heroTitleLine1: "No comercializamos productos.",
    heroTitleLine2: "Honramos orígenes.",
    manifestoEyebrow: "El manifiesto",
    manifestoQuote:
      "Hay una pregunta que precede cada decisión en este proyecto: ¿esto parece una galería de arte o parece una tienda?",
    manifestoText:
      "Si la respuesta es «una tienda», se rediseña. Sin negociación, sin excepciones por urgencia ni por eficiencia. Aquí no hay catálogos, ni descuentos, ni carritos de compra, ni el ruido de una oferta que caduca a medianoche. Hay una colección que se selecciona, se contextualiza y se presenta con el mismo rigor con el que un museo presenta el arte.",
    dnaEyebrow: "El ADN de la marca",
    dnaTitle: "Seis pilares que no se negocian",
    pillars: [
      {
        title: "Patrimonio",
        text: "Milenios de civilizaciones sucesivas, condensados en un olivar, una viña, una cueva que aún respira.",
      },
      {
        title: "Origen",
        text: "Cada pieza tiene un productor con nombre, un suelo que se puede pisar y una altitud que se puede medir.",
      },
      {
        title: "Excelencia",
        text: "No es un adjetivo: es un proceso, el mismo que se aplica a la selección y al último detalle de esta casa.",
      },
      {
        title: "Autenticidad",
        text: "No inventamos historias. Las verificamos antes de contarlas.",
      },
      {
        title: "Elegancia",
        text: "El máximo impacto con el mínimo de elementos. Nunca exceso disfrazado de generosidad.",
      },
      {
        title: "Confianza",
        text: "La consecuencia de aplicar los cinco pilares anteriores con la misma seriedad, visita tras visita.",
      },
    ],
    historyEyebrow: "Historia",
    historyTitle:
      "Un patrimonio de tres mil años, presentado por primera vez con el rigor que merece",
    historyText:
      "El olivo lleva en la Península Ibérica más de tres mil años. La vid, casi el mismo tiempo. La elaboración artesanal de queso precede a ambos. Comfort Life Ibérica no crea este patrimonio: lo recoge, lo ordena y lo convierte en el eje de una colección que crece despacio, con el mismo criterio con el que empezó.",
    valuesEyebrow: "Valores",
    values: [
      {
        title: "Integridad",
        text: "Decimos lo que es verdad, incluidas nuestras propias limitaciones.",
      },
      {
        title: "Curiosidad",
        text: "El motor silencioso de cada nueva incorporación a la colección.",
      },
      {
        title: "Respeto",
        text: "Por el productor, por el producto, y por quien se toma el tiempo de leernos.",
      },
      {
        title: "Coherencia",
        text: "La misma identidad, sin fisuras, en cada punto de contacto.",
      },
    ],
    quoteText:
      "El silencio es el lujo más caro. El espacio vacío no es ausencia de diseño: es la forma más sofisticada de diseño.",
    quoteAttribution: "Principio rector, Manual Maestro",
    founderQuoteText:
      "Comfort Life Ibérica nació para escuchar esos secretos. Y para llevarlos, sin prisa y sin ruido, a la mesa de quien sabe apreciarlos.",
    founderName: "Víctor Viana, Fundador",
  },
  productores: {
    heroEyebrow: "Productores",
    heroTitle: "El criterio tiene siempre nombre y apellido.",
    introText:
      "Todavía no presentamos a ningún productor. Estamos construyendo esa red con la misma falta de prisa que le pedimos a un queso, a un aceite, a cualquier pieza de esta colección: despacio, y sin publicar una sola relación que no podamos verificar con nuestro propio nombre.",
    criteriaEyebrow: "Lo que buscamos",
    criteriaTitle: "Cuatro criterios que no se negocian",
    criteria: [
      {
        title: "El trabajo con las manos",
        text: "Preferimos el gesto que se repite a mano, con cuidado, sobre el proceso que una máquina jamás dudaría en acelerar.",
      },
      {
        title: "El respeto por el tiempo",
        text: "Buscamos a quien no acelera una maduración, una crianza o una curación porque alguien, en algún despacho, tiene prisa.",
      },
      {
        title: "El origen verificable",
        text: "Un suelo, una altitud, una tradición que se puede documentar, no solo declarar.",
      },
      {
        title: "La honestidad del proceso",
        text: "Quien no oculta un límite de producción ni una temporada mala tiene, para nosotros, más valor que quien promete perfección constante.",
      },
    ],
    ctaEyebrow: "¿Es usted productor?",
    ctaTitle:
      "Si comparte este criterio, nos gustaría conocerle antes que a nadie.",
    ctaLink: "Iniciar una conversación",
  },
  territorios: {
    heroEyebrow: "Territorios",
    heroTitle: "El origen no es un dato. Es el argumento.",
    introText:
      "Antes de tener nombre propio, todo producto tiene un paisaje. La montaña, el olivar, la dehesa y la costa: cuatro territorios que explican, mejor que cualquier ficha técnica, por qué el patrimonio gastronómico ibérico es exactamente lo que es.",
    landscapes: {
      "la-montana": {
        name: "La Montaña",
        concept: "Donde el frío templa el vino",
        poeticTitle: "La altitud no perdona ni acelera.",
        editorial:
          "En la ladera, el día calienta y la noche cae de golpe. Esa amplitud térmica hace un trabajo que ninguna bodega, por moderna que sea, sabría replicar: el aire frío de la noche es, en el fondo, el verdadero autor del vino.",
        closingLine: [
          "Viticultura de altura",
          "Suelo de montaña",
          "Vendimia manual",
        ],
      },
      "el-olivar": {
        name: "El Olivar",
        concept: "Tres mil años de sombra y fruto",
        poeticTitle: "Un árbol que mide el tiempo en siglos.",
        editorial:
          "El olivo lleva más de tres mil años en la Península. Cada cosecha, apenas unas semanas, es un instante minúsculo dentro de un ciclo que ningún calendario de producción alcanza a abarcar.",
        closingLine: [
          "Olivar centenario",
          "Cosecha en verde",
          "Extracción en frío",
        ],
      },
      "la-dehesa": {
        name: "La Dehesa",
        concept: "Un ecosistema, no una granja",
        poeticTitle: "El paisaje que se convierte en alimento.",
        editorial:
          "La dehesa no cría animales: sostiene un ecosistema completo de encinas, pastos y tiempo. Lo que allí se cura después es, sobre todo, la memoria de ese equilibrio.",
        closingLine: [
          "Encinar y alcornocal",
          "Montanera libre",
          "Curación natural",
        ],
      },
      "la-costa": {
        name: "La Costa",
        concept: "El instante entre la marea y la mesa",
        poeticTitle: "El mar no espera a nadie.",
        editorial:
          "La marea no negocia horarios. Sale y entra según una lógica que no es la nuestra, y todo lo que se pesca, se cura o se conserva en esta costa aprende, tarde o temprano, a respetar ese ritmo ajeno.",
        closingLine: [
          "Pesca de temporada",
          "Salazón artesanal",
          "Costa atlántica y mediterránea",
        ],
      },
    },
  },
  experienciasPage: {
    heroEyebrow: "Experiencias",
    heroTitle: "La historia es parte de la pieza.",
    readingTimeSuffix: " de lectura",
    exploreCollectionCta: "Explorar la colección",
  },
  experiences: {
    "seis-meses-de-paciencia": {
      title: "Seis meses de paciencia: el ritual del queso de cueva",
      excerpt:
        "Una cueva de piedra decide cuándo un queso está listo. Nunca al revés.",
      tag: "Quesos",
      body: [
        "En la maduración tradicional de montaña, una cueva natural de piedra caliza mantiene una humedad muy alta y una temperatura casi constante durante todo el año. Ese dato, más que ninguna receta escrita, es el verdadero autor de un queso de cueva.",
        "El oficio consiste en volver a cada pieza a mano, con regularidad, sin más termostato que la propia roca. No hay calendario de producción que valga: la cueva marca el ritmo, y ese ritmo no se negocia con la demanda del mercado.",
        "Por eso ningún lote artesanal sale antes de varios meses, y algunos necesitan bastantes más. La variación entre piezas no es un defecto de fabricación. Es la prueba de que el proceso sigue vivo.",
        "Cuando finalmente una pieza sale de la cueva, ha absorbido algo que ninguna cámara de maduración industrial puede replicar del todo: el carácter propio de esa roca, ese aire, esa altitud. Se puede imitar la receta. Es mucho más difícil imitar la cueva.",
      ],
    },
    "la-montanera": {
      title: "La montanera: el jamón antes de ser jamón",
      excerpt:
        "Kilómetros de encinar recorridos cada día, buscando la bellota que decide el sabor final.",
      tag: "Embutidos",
      body: [
        "Durante la montanera, entre otoño e invierno, el cerdo ibérico de bellota recorre a diario varios kilómetros bajo las encinas, buscando el fruto que cae al suelo. Ese movimiento constante, más que ningún pienso, es lo que infiltra la grasa que hace célebre a este producto.",
        "No es una crianza intensiva disfrazada de tradición: la dehesa, como ecosistema, no admite más densidad de animales de la que el encinar puede sostener de forma natural. Ese límite biológico, no un plan de producción, es el que decide cuánto se puede criar cada temporada.",
        "Cuando termina la montanera, empieza la parte que casi nadie ve: una curación larga en secadero natural, con la ventilación regulada según lo que pida el tiempo exterior, nunca según un calendario comercial.",
        "Lo que finalmente llega a la mesa es la suma de ese recorrido entero: un paisaje convertido, con mucho tiempo de por medio, en algo que se puede cortar en láminas.",
      ],
    },
    "ladera-norte-por-que-la-altitud-cambia-el-vino": {
      title: "Ladera norte: por qué la altitud cambia el vino",
      excerpt:
        "Un mismo valle, dos orientaciones, dos vinos que no podrían confundirse.",
      tag: "Vinos",
      body: [
        "En algunas sierras vitícolas del interior peninsular, un mismo valle puede producir uvas completamente distintas según la orientación del bancal. La ladera sur madura antes y da más fruta madura. La ladera norte, más fría, más lenta, más tardía, es la que interesa cuando lo que se busca es tensión, no potencia.",
        "La amplitud térmica entre el día y la noche en altitud es el verdadero motor de esa tensión: los azúcares avanzan con el calor del día, pero los ácidos y los aromas se conservan gracias al frío nocturno que baja desde la sierra.",
        "Ningún enólogo puede fabricar esa amplitud térmica en bodega. Solo puede elegir, con mucho cuidado, en qué ladera exacta plantar, y después esperar a que la montaña haga el resto del trabajo.",
      ],
    },
    "el-aceite-antes-del-aceite": {
      title: "El aceite antes del aceite: la carrera contra el tiempo",
      excerpt:
        "Entre el árbol y la muela hay solo unas horas que deciden todo el aroma.",
      tag: "Aceites",
      body: [
        "Casi nadie que prueba un buen aceite virgen extra piensa en la logística que hay detrás. Pero la aromática de un aceite se decide, en gran parte, en las horas que pasan entre que la aceituna cae del árbol y entra en la muela.",
        "Cuanto más tiempo espera la aceituna amontonada, más fermenta, y esa fermentación es la que produce los defectos que ningún proceso posterior puede corregir. Por eso las almazaras que persiguen calidad muelen siempre lo antes posible tras la recolección.",
        "La recolección en verde, además, reduce el rendimiento en litros pero multiplica la intensidad aromática: notas de hoja de tomate, almendra verde y hierba recién cortada que una aceituna madura ya no puede dar.",
        "Todo esto ocurre antes de que el aceite exista como tal. Cuando finalmente llega a la mesa, ya ha ganado o perdido su carácter varias horas antes de ser embotellado.",
      ],
    },
    "el-aperitivo-como-ritual": {
      title: "El aperitivo como ritual, no como prisa",
      excerpt:
        "Un buen aperitivo nunca se sirve con prisa. Se sirve con hielo grande y tiempo por delante.",
      tag: "Bebidas espirituosas",
      body: [
        "El vermut de tradición ibérica no nació como cóctel de diseño: nació como una manera de estirar la sobremesa un poco más, con un vino de base envejecido y una maceración de botánicos que cada casa guarda como un secreto propio.",
        "Servirlo bien es, sobre todo, no tener prisa: hielo grande para que se diluya despacio, una rodaja fina de cítrico y nada de decoración innecesaria. El ritual está en el tiempo que se le dedica, no en la presentación.",
        "Un buen aperitivo no adelanta la comida. La retrasa un poco, a propósito, y ese es exactamente su valor.",
      ],
    },
    "un-verano-de-sal-y-vino-rosado": {
      title: "Un verano de sal y vino rosado",
      excerpt:
        "Las conservas de costa y los rosados frescos comparten estación, y comparten mesa.",
      tag: "Lifestyle",
      body: [
        "Hay una estación en la que las conservas de costa (anchoas, mejillones en escabeche) y los rosados de maceración corta parecen escritos por la misma mano: todos frescos, todos salinos, todos pensados para beberse y comerse rápido, sin ceremonia.",
        "No hace falta una ocasión especial para abrir una de estas botellas. Hace falta, como mucho, una mesa exterior, algo en conserva y la disposición de no mirar el reloj durante un par de horas.",
      ],
    },
  },
  contacto: {
    heroEyebrow: "Contacto",
    heroTitle: "Iniciemos una conversación.",
    introText: "Si comparte nuestro criterio, nos gustaría conocerle.",
    imageAlt:
      "Vino rosado sirviéndose en copas de cristal, encuadre cercano a las manos y las copas",
    audienceEyebrow: "Dirigido a",
    audienceText:
      "Directores de F&B, sommeliers, empresarios de hostelería y compradores institucionales en Portugal y el resto de Europa. Si no encaja en ninguna de estas categorías pero comparte nuestro criterio, escríbanos igualmente.",
    form: {
      name: "Nombre",
      establishment: "Establecimiento",
      type: "Tipo de establecimiento",
      typeOptions: [
        "Hotel",
        "Restaurante",
        "Club privado",
        "Cátering de alta gama",
        "Otro",
      ],
      typePlaceholder: "Seleccionar",
      email: "Email",
      message: "Mensaje",
      submit: "Solicitar información",
      submitting: "Enviando…",
      note: "Respondemos personalmente cada solicitud, habitualmente en un plazo de dos días laborables.",
      successTitle: "Gracias por escribirnos.",
      successText:
        "Hemos recibido su mensaje. Le responderemos personalmente en un plazo máximo de dos días laborables.",
      errorText:
        "No hemos podido enviar su mensaje. Inténtelo de nuevo o escríbanos directamente a hola@comfortlifeiberica.com.",
    },
  },
  languageSwitcher: {
    label: "Idioma",
  },
};
