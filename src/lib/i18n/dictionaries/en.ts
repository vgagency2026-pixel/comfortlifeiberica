import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    filosofia: "Our Philosophy",
    coleccion: "Gourmet Selection",
    productores: "Producers",
    territorios: "Territories",
    experiencias: "Experiences",
    contacto: "Contact",
    discover: "Discover",
  },
  footer: {
    description:
      "A curated selection of Iberian gastronomic heritage for fine hospitality.",
    sitemapHeading: "Site map",
    contactHeading: "Direct contact",
    rights: "All rights reserved.",
  },
  home: {
    heroEyebrow: "Comfort Life Ibérica",
    heroTitleLine1: "A gastronomic",
    heroTitleLine2: "art gallery.",
    heroManifesto:
      "We do not present products. We present the Iberian gastronomic heritage with the same rigour a museum brings to art.",
    identityEyebrow: "Who we are",
    identityText:
      "For millennia, the Iberian Peninsula has produced some of the most extraordinary food and drink in the world. Our work is to find the best of it, tell its story with the rigour it deserves, and present it to those with the judgement to appreciate it.",
    collectionEyebrow: "The collection",
    collectionTitle: "Six rooms, one single standard",
    collectionCta: "Walk through the collection",
    selectionEyebrow: "The selection process",
    selectionTitle:
      "We do not show everything that exists. We show what has passed our standard.",
    selectionSteps: [
      {
        number: "01",
        title: "Select",
        text: "We visit producers, taste hundreds of references and reject almost all of them. Most of those who apply never enter the collection.",
      },
      {
        number: "02",
        title: "Present",
        text: "We photograph, write and design every piece with the same rigour a museum brings to a work it is about to exhibit.",
      },
      {
        number: "03",
        title: "Facilitate",
        text: "We handle the logistics and the language between producers scattered across the Peninsula and demanding hospitality businesses in Portugal and the rest of Europe.",
      },
      {
        number: "04",
        title: "Access",
        text: "We do not sell to just anyone. We open the door to those with the judgement to value what stands behind each product.",
      },
    ],
    territoryEyebrow: "The territories",
    territoryTitle: "Four landscapes, not a map of suppliers",
    territoryText:
      "The mountain, the olive grove, the dehesa and the coast. Origin is not a decorative detail: it is the argument that explains why each product is what it is.",
    territoryCta: "Explore the territories",
    experiencesEyebrow: "Experiences",
    experiencesTitle: "Stories that do not fit on a spec sheet",
    experiencesCta: "View all experiences",
    contactEyebrow: "Let us start a conversation",
    contactTitle: "If you share our standard, we would like to meet you.",
    contactCta: "Request information",
  },
  coleccion: {
    heroEyebrow: "Gourmet Selection",
    heroTitle: "Six rooms, one single standard.",
    intro:
      "This collection is presented as a journey, not as a catalogue. Each room gathers a single thread of Iberian gastronomic heritage, with the same rigour a museum applies when organising an exhibition: few pieces, each one chosen, never everything that exists.",
    salaLabel: "Room",
    enterSala: "Enter the room",
    placeholderNote:
      "Photography still being catalogued while our network of origin is built",
  },
  sala: {
    spotlightEyebrow: "In focus",
    productTypesEyebrow: "What this room brings together",
    continuesEyebrow: "The collection continues",
    continueCta: "Continue to Room {n} · {sala}",
    concludesEyebrow: "The journey concludes",
    concludesText:
      "You have walked through our collection. If you share our way of understanding Iberian gastronomic heritage, we would be delighted to meet you.",
    ctaBack: "Back to the collection",
    ctaContact: "Request information",
  },
  salaTransitions: {
    vinos:
      "From the slope that tempers the vine to the grove that measures time in centuries: altitude gives way to the patience of the tree. The next room carries the same standard into another fruit.",
    aceites:
      "The olive grove looks inland. The sea demands a different urgency, a different respect for the instant. The next room carries that same patience, now facing the tide.",
    conservas:
      "From the coast we return to the mountain, this time toward the cave. Milk, like the tide, keeps its own calendar. The next room listens to it with the same attention.",
    quesos:
      "Before the drying room, one must cross the dehesa: centuries-old oaks, acorns, and a pig that roams free. The room of the Ibéricos begins exactly there.",
    embutidos:
      "After so much curing, the moment of rest arrives. The last room holds what is served before, or after, the table.",
    "bebidas-espirituosas": "",
  },
  categories: {
    vinos: {
      label: "Wines",
      tourLabel: "Wines",
      concept: "Stone, altitude, patience",
      poeticTitle: "Before the glass, there was a mountain.",
      editorial:
        "The vine does not choose its soil — it inherits it. Granite, slate, sand shaped by centuries of rain: each imposes its own quiet on the grape, long before any cellar exists.",
      closingLine: ["Old vines", "Mountain altitude", "Brief vintages"],
    },
    aceites: {
      label: "Oils & Olive Groves",
      tourLabel: "The Olive Grove",
      concept: "Light, time, aroma",
      poeticTitle: "The olive tree is unhurried; the aroma is not.",
      editorial:
        "Between tree and mill lie barely a few hours. That margin, so brief it goes almost unnoticed, decides whether the oil keeps the scent of the just-fallen olive — or begins, quietly, to lose it.",
      closingLine: ["Cold-pressed", "Early harvest", "Origin aroma"],
    },
    quesos: {
      label: "Cheeses",
      tourLabel: "The Cheeses",
      concept: "Stone, cave, time",
      poeticTitle: "No recipe rushes a wait.",
      editorial:
        "The milk is only the beginning. What happens after — weeks, sometimes months, inside a cave that hurries for no one — is what truly turns a wheel into what it becomes.",
      closingLine: ["Natural caves", "Raw milk", "Artisan wait"],
    },
    embutidos: {
      label: "Ibérico Cured Meats",
      tourLabel: "The Ibéricos",
      concept: "Dehesa, time, legacy",
      poeticTitle: "Every slice holds a season.",
      editorial:
        "The montanera cannot be hurried: the Ibérico pig walks the dehesa at its own pace, seeking the acorn that will decide, months before any ham exists, nearly all of its character.",
      closingLine: ["Free-range montanera", "Slow curing", "Dehesa legacy"],
    },
    conservas: {
      label: "Conservas from the Sea",
      tourLabel: "The Sea",
      concept: "The instant, held still",
      poeticTitle: "A gesture that stops the tide.",
      editorial:
        "Between the catch and the tin, barely hours pass. To preserve well is little more than winning that quiet race against time, without ever letting it show.",
      closingLine: ["Catch and cold", "Seasonal fishing", "Atlantic tradition"],
    },
    "bebidas-espirituosas": {
      label: "Spirits",
      tourLabel: "The Spirits",
      concept: "Fire, wood, silence",
      poeticTitle: "Before the table, a moment of its own.",
      editorial:
        "A good aperitif does not hurry the meal forward: it delays it a little, on purpose. That small act of patience, more than any recipe, is what is truly served.",
      closingLine: [
        "Artisan maceration",
        "After-dinner ritual",
        "Iberian tradition",
      ],
    },
  },
  salas: {
    vinos: {
      narrative: [
        "No cellar technique corrects a poor decision of origin. A vineyard is planted once, and that choice — this slope, not the one across the valley; this granite, not the slate beyond it — decides almost everything that follows. The wine, once it finally reaches the glass, does little more than confirm it.",
        "On the mountain, the day warms and the night cools, and that difference — invisible, yet constant — is what tempers a high-altitude wine. Reds of quiet character, whites of mineral tension, rosés that barely touch the skin, sparkling wines that learn patience inside the bottle: each style answers to the same climate, lived differently.",
        "We favour the small plot over the wide expanse. A vineyard of a few hectares, harvested by hand and without haste, tells a far more precise story than any volume built never to run out.",
      ],
      productTypes: [
        "Reds",
        "Whites",
        "Rosés",
        "Sparkling wines",
        "Single-plot wines",
        "Small wineries",
        "Mountain wines",
      ],
      spotlight: {
        title: "Sierra de Gredos",
        text: "A granite massif at the heart of the Peninsula, where certain vines climb past eight hundred metres. Up there, night shows no mercy — it falls all at once, and that sudden drop in temperature etches into the grape a tension no lowland can imitate. Few Iberian wine territories speak so clearly.",
      },
    },
    aceites: {
      narrative: [
        "There is a particular light over the olive grove — low, golden, Mediterranean — that no other crop demands with such insistence. The olive tree has grown on the Peninsula for more than three thousand years, and still each harvest is decided within a handful of hours: between the olive's fall and its passage through the mill, the aroma begins, silently, to fade.",
        "The harvest comes early, while the olive has not yet fully ripened, because that is when it holds its liveliest notes: fresh-cut leaf, green almond, a bitterness that wakes the palate rather than cloys it. Cold milling, with barely any added heat, is the only way not to betray that instant.",
        "From the same grove come the olives eaten whole, the house's own pickles, and the salt that is perfumed simply by resting beside the tree's own leaf. All of it belongs to the same quiet of the field.",
      ],
      productTypes: [
        "Extra Virgin Olive Oil",
        "Premium EVOO",
        "Early-harvest oils",
        "Single-variety oils",
        "Gourmet olives",
        "Seasoned olives",
        "Fleur de sel",
        "Artisan vinegars",
      ],
    },
    quesos: {
      narrative: [
        "A cheese is not made: it is waited for. The milk — sheep's, goat's, cow's, or a conversation between several — is only the first gesture. Everything else happens afterward, at a pace no production calendar is entitled to question.",
        "We favour raw milk whenever the process allows it, because it alone preserves the exact memory of a flock and a pasture: what it grazed on, where it slept, what air it breathed that season. To pasteurise is, in a sense, to begin forgetting that memory.",
        "Limestone caves remain, for many shepherds and cheesemakers, the finest ageing system ever devised: constant humidity, a temperature that scarcely shifts, a microclimate no industrial chamber fully reproduces. Inside, fine, cured and semi-cured wheels learn — each at its own pace — to become what they will be.",
      ],
      productTypes: [
        "Sheep's milk cheeses",
        "Goat's milk cheeses",
        "Cow's milk cheeses",
        "Blended-milk cheeses",
        "Raw milk",
        "Fine-aged",
        "Cured",
        "Semi-cured",
        "Natural cave ageing",
      ],
    },
    embutidos: {
      narrative: [
        "Before the ham exists, the dehesa exists: centuries-old oaks, free pasture, a balance no farmer invented but learned to respect. During the montanera, the Ibérico pig roams that landscape daily, seeking the acorn that will fall when it falls — never when convenient.",
        "That freedom of movement — miles, every day, beneath the oaks — is what infiltrates the fat later recognised in the slice. From a single animal come cuts that share almost nothing: the ham and shoulder, which demand the longest drying rooms; the loin, presa and secreto, which offer that same marbled fat almost without translation; the chorizo, salchichón and morcón, where paprika and spice quietly sign each house's name.",
        "Curing, too, is never negotiated with a calendar. It is negotiated with mountain air, with humidity set by the season, with the patience of someone who understands that rushing a drying room is simply ruining it.",
      ],
      productTypes: [
        "Ibérico Ham",
        "Shoulder",
        "Loin",
        "Presa",
        "Secreto",
        "Morcón",
        "Chorizo",
        "Salchichón",
      ],
    },
    conservas: {
      narrative: [
        "There is something almost museological about a fine tinned conserve: it captures an instant — a tide, a season, an exact shoal — and holds it still inside a jar, so it arrives intact long after that moment has passed. No other gastronomic craft works so directly against the clock.",
        "White tuna and its ventresca, salt-cured anchovies, cockles, razor clams and mussels answer to a single quiet principle: the less time between catch and tin, the truer the result to what the sea delivered that morning. Sardines and roe follow the same seasonal logic.",
        "Caviar, though of different origin to this Atlantic and Mediterranean tradition, shares with it the same demand: minimal handling, constant cold, absolute respect for the raw material.",
      ],
      productTypes: [
        "Anchovies",
        "White tuna",
        "Ventresca",
        "Cockles",
        "Razor clams",
        "Mussels",
        "Sardines",
        "Fish roe",
        "Caviar",
        "Gourmet conservas",
      ],
    },
    "bebidas-espirituosas": {
      narrative: [
        "To distil is, at heart, an exercise in fire and patience: taking something and reducing it, very slowly, to its most concentrated self. Across the Peninsula that discipline has produced traditions that barely resemble one another, from Galician orujo, born of fire and mist, to the vermouth of the south, made to stretch a lingering meal.",
        "Wood does the rest of the work, quietly, over years no one rushes. Signature gins, single-estate whiskies, barrel-aged brandies and home-recipe liqueurs share the same standard here: small batches, long stretches of time, a rest no large-scale production could ever afford.",
        "Vermouth holds a place of its own. Less a drink than a ritual — a glass served before, or after, the table, with no purpose but to stretch the conversation a little longer than planned.",
      ],
      productTypes: [
        "Gins",
        "Whiskies",
        "Brandies",
        "Orujos",
        "Vermouth",
        "Artisan liqueurs",
      ],
    },
  },
  filosofia: {
    heroEyebrow: "Our Philosophy",
    heroTitleLine1: "We do not trade in products.",
    heroTitleLine2: "We honour origins.",
    manifestoEyebrow: "The manifesto",
    manifestoQuote:
      "One question precedes every decision in this project: does this feel like an art gallery, or does it feel like a shop?",
    manifestoText:
      "If the answer is «a shop», it gets redesigned. No negotiation, no exceptions for urgency or efficiency. There are no catalogues here, no discounts, no shopping carts, no noise of an offer expiring at midnight. There is a collection, selected, given context, and presented with the same rigour a museum brings to art.",
    dnaEyebrow: "The brand's DNA",
    dnaTitle: "Six pillars that do not bend",
    pillars: [
      {
        title: "Heritage",
        text: "Millennia of successive civilisations, distilled into an olive grove, a vineyard, a cave that still breathes.",
      },
      {
        title: "Origin",
        text: "Every piece has a producer with a name, a soil you could stand on, an altitude you could measure.",
      },
      {
        title: "Excellence",
        text: "Not an adjective: a process, the same one applied to our selection and to the smallest detail of this house.",
      },
      {
        title: "Authenticity",
        text: "We do not invent stories. We verify them before we tell them.",
      },
      {
        title: "Elegance",
        text: "Maximum impact with the fewest possible elements. Never excess disguised as generosity.",
      },
      {
        title: "Trust",
        text: "The consequence of applying the five pillars above with the same seriousness, visit after visit.",
      },
    ],
    historyEyebrow: "History",
    historyTitle:
      "Three thousand years of heritage, presented for the first time with the rigour it deserves",
    historyText:
      "The olive tree has grown on the Iberian Peninsula for more than three thousand years. The vine, almost as long. Artisan cheesemaking precedes them both. Comfort Life Ibérica does not create this heritage: we gather it, we order it, and we turn it into the spine of a collection that grows slowly, by the same standard with which it began.",
    valuesEyebrow: "Values",
    values: [
      {
        title: "Integrity",
        text: "We say what is true, including our own limits.",
      },
      {
        title: "Curiosity",
        text: "The quiet engine behind every new addition to the collection.",
      },
      {
        title: "Respect",
        text: "For the producer, for the product, and for whoever takes the time to read us.",
      },
      {
        title: "Coherence",
        text: "The same identity, without cracks, at every point of contact.",
      },
    ],
    quoteText:
      "Silence is the most expensive luxury. Empty space is not the absence of design — it is design's most sophisticated form.",
    quoteAttribution: "Guiding principle, Master Manual",
  },
  productores: {
    heroEyebrow: "Producers",
    heroTitle: "Judgement always has a name and a surname.",
    introText:
      "We do not yet present a single producer. We are building that network with the same unhurried care we ask of a cheese, an oil, any piece in this collection: slowly, and without publishing a single relationship we cannot vouch for under our own name.",
    criteriaEyebrow: "What we look for",
    criteriaTitle: "Four standards that do not bend",
    criteria: [
      {
        title: "Work done by hand",
        text: "We favour the gesture repeated carefully by hand over the process a machine would never think twice about accelerating.",
      },
      {
        title: "Respect for time",
        text: "We look for those who do not rush a maturation, an ageing or a curing because someone, in some office, is in a hurry.",
      },
      {
        title: "Verifiable origin",
        text: "A soil, an altitude, a tradition that can be documented, not merely claimed.",
      },
      {
        title: "Honesty in the process",
        text: "Someone who does not hide a production limit or a poor season holds, for us, more value than someone who promises constant perfection.",
      },
    ],
    ctaEyebrow: "Are you a producer?",
    ctaTitle:
      "If you share this standard, we would like to meet you before anyone else.",
    ctaLink: "Start a conversation",
  },
  territorios: {
    heroEyebrow: "Territories",
    heroTitle: "Origin is not a fact. It is the argument.",
    introText:
      "Before it has a name, every product has a landscape. The mountain, the olive grove, the dehesa and the coast: four territories that explain, better than any spec sheet, why Iberian gastronomic heritage is exactly what it is.",
    landscapes: {
      "la-montana": {
        name: "The Mountain",
        concept: "Where cold tempers the wine",
        poeticTitle: "Altitude neither forgives nor hurries.",
        editorial:
          "On the slope, the day warms and the night falls all at once. That thermal swing does work no cellar, however modern, could replicate: the cold night air is, in the end, the true author of the wine.",
        closingLine: [
          "High-altitude viticulture",
          "Mountain soil",
          "Hand harvest",
        ],
      },
      "el-olivar": {
        name: "The Olive Grove",
        concept: "Three thousand years of shade and fruit",
        poeticTitle: "A tree that measures time in centuries.",
        editorial:
          "The olive tree has grown on the Peninsula for more than three thousand years. Each harvest — a matter of weeks — is a small instant inside a cycle no production calendar could ever contain.",
        closingLine: [
          "Centuries-old grove",
          "Green harvest",
          "Cold extraction",
        ],
      },
      "la-dehesa": {
        name: "The Dehesa",
        concept: "An ecosystem, not a farm",
        poeticTitle: "The landscape that becomes food.",
        editorial:
          "The dehesa does not raise animals: it sustains a complete ecosystem of oaks, pasture and time. What is cured there afterward is, above all, the memory of that balance.",
        closingLine: [
          "Oak and cork woodland",
          "Free-range montanera",
          "Natural curing",
        ],
      },
      "la-costa": {
        name: "The Coast",
        concept: "The instant between tide and table",
        poeticTitle: "The sea waits for no one.",
        editorial:
          "The tide keeps no one's schedule. It comes and goes by a logic that is not ours, and everything caught, cured or preserved on this coast learns, sooner or later, to respect a rhythm not its own.",
        closingLine: [
          "Seasonal fishing",
          "Artisan salting",
          "Atlantic and Mediterranean coast",
        ],
      },
    },
  },
  experienciasPage: {
    heroEyebrow: "Experiences",
    heroTitle: "The story is part of the piece.",
    readingTimeSuffix: " read",
    exploreCollectionCta: "Explore the collection",
  },
  experiences: {
    "seis-meses-de-paciencia": {
      title: "Six months of patience: the ritual of cave-aged cheese",
      excerpt:
        "A stone cave decides when a cheese is ready. Never the other way round.",
      tag: "Cheeses",
      body: [
        "In traditional mountain ageing, a natural limestone cave holds very high humidity and an almost constant temperature all year round. That fact, more than any written recipe, is the true author of a cave-aged cheese.",
        "The craft consists of turning each wheel by hand, regularly, with no thermostat but the rock itself. No production calendar counts here: the cave sets the pace, and that pace is never negotiated with market demand.",
        "That is why no artisan batch leaves before several months, and some need considerably longer. The variation between wheels is not a manufacturing flaw. It is proof that the process is still alive.",
        "By the time a wheel finally leaves the cave, it has absorbed something no industrial ageing chamber can fully replicate: the particular character of that rock, that air, that altitude. The recipe can be copied. The cave is much harder to imitate.",
      ],
    },
    "la-montanera": {
      title: "The montanera: ham before it becomes ham",
      excerpt:
        "Miles of oak woodland walked each day, in search of the acorn that decides the final flavour.",
      tag: "Cured meats",
      body: [
        "During the montanera, between autumn and winter, the acorn-fed Ibérico pig walks several miles daily beneath the oaks, searching for the fruit that falls to the ground. That constant movement, more than any feed, is what infiltrates the fat that makes this product famous.",
        "It is not intensive rearing dressed up as tradition: the dehesa, as an ecosystem, allows no greater density of animals than the oak woodland can naturally sustain. That biological limit, not a production plan, decides how many can be raised each season.",
        "When the montanera ends, the part almost no one sees begins: a long cure in a natural drying room, with ventilation set by whatever the weather outside demands, never by a commercial calendar.",
        "What finally reaches the table is the sum of that entire journey: a landscape turned, after a great deal of time, into something that can be sliced.",
      ],
    },
    "ladera-norte-por-que-la-altitud-cambia-el-vino": {
      title: "North-facing slope: why altitude changes the wine",
      excerpt:
        "One valley, two orientations, two wines that could never be mistaken for each other.",
      tag: "Wines",
      body: [
        "In certain wine-growing sierras of the interior, a single valley can produce entirely different grapes depending on which way the terrace faces. The south-facing slope ripens earlier and yields riper fruit. The north-facing slope — cooler, slower, later — is the one that matters when what is sought is tension, not power.",
        "The thermal swing between day and night at altitude is the true engine of that tension: sugars advance with the day's heat, but acidity and aroma are preserved by the cold night air coming down from the sierra.",
        "No winemaker can manufacture that thermal swing in the cellar. All they can do is choose, with great care, exactly which slope to plant — and then wait for the mountain to do the rest of the work.",
      ],
    },
    "el-aceite-antes-del-aceite": {
      title: "The oil before the oil: a race against time",
      excerpt:
        "Between the tree and the mill lie only a few hours that decide the entire aroma.",
      tag: "Oils",
      body: [
        "Almost no one who tastes a fine extra virgin oil thinks about the logistics behind it. Yet an oil's aromatics are decided, in large part, in the hours between the olive falling from the tree and entering the mill.",
        "The longer the olives wait in a pile, the more they ferment — and that fermentation produces the defects no later process can correct. That is why quality-driven mills always press as soon as possible after picking.",
        "Picking early, while the olive is still unripe, lowers the yield in litres but multiplies the aromatic intensity: notes of tomato leaf, green almond and freshly cut grass that a ripe olive can no longer give.",
        "All of this happens before the oil exists as such. By the time it finally reaches the table, it has already won or lost its character hours before ever being bottled.",
      ],
    },
    "el-aperitivo-como-ritual": {
      title: "The aperitif as ritual, never as haste",
      excerpt:
        "A good aperitif is never rushed. It is served with a large ice cube and time ahead of it.",
      tag: "Spirits",
      body: [
        "Iberian vermouth was not born as a designer cocktail: it was born as a way to stretch the after-table conversation a little longer, with an aged base wine and a botanical maceration each house guards like its own secret.",
        "Serving it well is, above all, a matter of not hurrying: a large ice cube to dilute it slowly, a thin twist of citrus, and no unnecessary decoration. The ritual lies in the time given to it, not in the presentation.",
        "A good aperitif does not bring the meal forward. It delays it a little, on purpose — and that is exactly its value.",
      ],
    },
    "un-verano-de-sal-y-vino-rosado": {
      title: "A summer of salt and rosé",
      excerpt:
        "Coastal conserves and crisp rosés share a season, and share a table.",
      tag: "Lifestyle",
      body: [
        "There is a season when coastal conserves —anchovies, pickled mussels— and short-maceration rosés seem written by the same hand: all fresh, all saline, all meant to be drunk and eaten quickly, without ceremony.",
        "No special occasion is needed to open one of these bottles. What it takes, at most, is a table outdoors, something from a tin, and the willingness not to watch the clock for a couple of hours.",
      ],
    },
  },
  contacto: {
    heroEyebrow: "Contact",
    heroTitle: "Let us start a conversation.",
    introText: "If you share our standard, we would like to meet you.",
    imageAlt:
      "Rosé wine being poured into glasses, framed close on the hands and the glasses",
    audienceEyebrow: "Intended for",
    audienceText:
      "F&B directors, sommeliers, hospitality entrepreneurs and institutional buyers in Portugal and the rest of Europe. If you do not fit any of these categories but share our standard, please write to us regardless.",
    form: {
      name: "Name",
      establishment: "Establishment",
      type: "Type of establishment",
      typeOptions: [
        "Hotel",
        "Restaurant",
        "Private club",
        "Fine-dining catering",
        "Other",
      ],
      typePlaceholder: "Select",
      email: "Email",
      message: "Message",
      submit: "Request information",
      submitting: "Sending…",
      note: "We respond personally to every request, usually within two business days.",
      successTitle: "Thank you for writing to us.",
      successText:
        "We have received your message. We will respond personally within a maximum of two business days.",
    },
  },
  languageSwitcher: {
    label: "Language",
  },
};
