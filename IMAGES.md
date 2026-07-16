# IMAGES.md — Inventario Visual de Comfort Life Ibérica

> Análisis completo de la carpeta [`IMAGENES/`](./IMAGENES) — 23 fotografías/piezas visuales, previas a cualquier diseño de página. Este documento es la base factual sobre la que se construye [`ART_DIRECTION.md`](./ART_DIRECTION.md).

Metodología: inspección visual directa de cada archivo + extracción técnica de resolución y peso. Ningún archivo fue descartado sin justificación; todas las conclusiones de calidad se evalúan **contra los estándares del Manual Maestro** (`../CLAUDE.MD.md`), no contra un criterio fotográfico genérico.

---

## 0. Hallazgos clave (léase antes que el inventario)

1. **No hay ninguna fotografía de productor ni de territorio real.** El material actual cubre producto, gastronomía, lifestyle y concepto de marca, pero cero fotografía de viñedos/olivares/dehesas y cero retratos de artesanos. Esto es un vacío crítico frente al Manual (Cap. 18, componentes "Territory Map" y "Producer Profile", Cap. 39).
2. **22 de las 23 imágenes son verticales o cuadradas; solo 1 es horizontal** (`e56b4df6…`, y aun así casi cuadrada, 1402×1122). El sitio necesita heros horizontales a pantalla completa (Cap. 36, Hero Inmersivo) y **hoy no existe una sola imagen apaisada 16:9 real**. Esto condiciona por completo qué variante de hero se puede construir sin recurrir a recorte agresivo o nueva fotografía.
3. **Ninguna imagen supera ~1600 px en su lado mayor.** Es resolución suficiente para tarjetas, fichas de producto y heroes en mobile, pero **insuficiente para un fondo a pantalla completa en desktop grande** (el Manual exige hasta 1920–2560 px de ancho de contenido) sin upscaling. Cualquier hero desktop necesitará reencuadre + upscale cuidado o fotografía nueva.
4. **Tres imágenes contradicen directamente reglas explícitas del Manual** (fondo blanco liso de ecommerce, Cap. 28/54): `f7417028…` (pinchos) y `fc5b87b1…` (cóctel). Una cuarta, `fe520b9d…` (rosado en yate), incumple la prohibición de color frío dominante (azul de mar) y el tono "galería serena" al leer como lifestyle de Instagram genérico.
5. **Inconsistencia de naming de marca en los propios activos**: el barril de `bea773fa…` dice "IBÉRICA / Comfort Life" y el rótulo de `a0dd5ad8…` dice "Ibérica / CONFORT LIFE" (falta la "m"). Ninguno coincide con el orden "Comfort Life Ibérica" usado en el resto del proyecto. Hay que resolver esto antes de usar cualquiera de las dos piezas como logotipo oficial.
6. Existe una **serie coherente y muy potente** de "producto/pintura enmarcada" (6 imágenes) que es, con diferencia, el material más alineado con el principio "galería de arte, no tienda". Es el activo de mayor valor estratégico del lote.

---

## 1. Resumen rápido (tabla de escaneo)

| #   | Archivo          | Categoría                  | Orientación    | Resolución | Calidad                  | Mejor uso                                |
| --- | ---------------- | -------------------------- | -------------- | ---------- | ------------------------ | ---------------------------------------- |
| 01  | `39856205-e7ef…` | Lifestyle / Gastronomía    | Vertical 3:4   | 1200×1600  | Alta                     | Hero secundario, Lifestyle               |
| 02  | `a0dd5ad8-adf7…` | Marca / Identidad          | Vertical 3:4   | 1086×1448  | Alta (con errata)        | Storytelling de marca                    |
| 03  | `a4155d50-3cf0…` | Arte / Bodegón             | Cuadrada 1:1   | 900×900    | Alta                     | Storytelling, fondo                      |
| 04  | `a6e38b76-5915…` | Textura / Abstracto        | Vertical 2:3   | 809×1249   | Media                    | Textura, fondo                           |
| 05  | `aef2d4c0-f85f…` | Producto+Arte / Quesos     | Vertical 2:3   | 1023×1537  | **Excelente**            | **Hero principal**, storytelling         |
| 06  | `bea773fa-90e7…` | Storytelling / Marca       | Vertical 3:4   | 1086×1448  | Alta (concepto genérico) | Storytelling / manifiesto                |
| 07  | `c1b7eff0-717d…` | Lifestyle / Editorial      | Vertical 9:16  | 900×1600   | **Excelente**            | Hero secundario, Lifestyle               |
| 08  | `c3e378a5-a915…` | Producto / Gastronomía     | Vertical 3:4   | 1200×1600  | Alta                     | Producto (jamón), detalle                |
| 09  | `c6f32e8a-19c6…` | Arte / Territorio-varietal | Cuadrada 1:1   | 1254×1254  | Alta                     | Storytelling / ficha varietal            |
| 10  | `d1a31fbb-f16f…` | Gastronomía                | Vertical 2:3   | 736×1104   | **Excelente**            | Storytelling, hero secundario            |
| 11  | `db1fd53c-a3be…` | Textura / Abstracto        | Vertical 3:4   | 736×981    | Media                    | Textura                                  |
| 12  | `e56b4df6-49e8…` | Producto / Conservas       | **Horizontal** | 1402×1122  | **Excelente**            | Producto, único candidato a banner ancho |
| 13  | `e5cec59d-104c…` | Gastronomía / Lifestyle    | Vertical 4:5   | 1200×1500  | Alta (usar recortada)    | Gastronomía (parcial)                    |
| 14  | `eb6751db-6a02…` | Producto+Arte / Embutidos  | Vertical 3:4   | 1086×1448  | **Excelente**            | Hero secundario, producto                |
| 15  | `ef817f35-fa33…` | Bebidas                    | Vertical 2:3   | 1024×1536  | **Excelente**            | Producto (bebidas), lifestyle            |
| 16  | `f20b90c8-87dc…` | Producto / Embutidos       | Cuadrada 1:1   | 1200×1200  | Alta (fondo disonante)   | Producto (con retoque)                   |
| 17  | `f449a3b8-4bb5…` | Territorio / Conceptual    | Vertical 3:4   | 786×1049   | **Excelente**            | Territorio, fondo, storytelling          |
| 18  | `f7417028-983e…` | Gastronomía                | Vertical 2:3   | 854×1280   | **Baja (off-brand)**     | No usar sin repostproducción             |
| 19  | `f912f127-7d23…` | Arte / Bodegón             | Cuadrada ~1:1  | 749×755    | Alta                     | Storytelling, fondo                      |
| 20  | `f9eba704-eb7a…` | Lifestyle / Hostelería     | Vertical 2:3   | 736×1103   | Media                    | Lifestyle (uso moderado)                 |
| 21  | `faeb0633-f45d…` | Producto / Detalle         | Vertical 2:3   | 735×1072   | Alta                     | Detalle, textura, quesos                 |
| 22  | `fc5b87b1-b146…` | Bebidas                    | Vertical 2:3   | 750×1125   | **Baja (off-brand)**     | No usar sin repostproducción             |
| 23  | `fe520b9d-d82f…` | Lifestyle                  | Vertical 3:4   | 901×1200   | Media (tono disonante)   | Lifestyle solo si se recorta             |

---

## 2. Fichas individuales

Cada ficha cubre los campos solicitados: producto, categoría, resolución, orientación, composición, iluminación, colores predominantes, emociones, uso posible y nivel de calidad.

### IMG-01 · `39856205-e7ef-4a4b-a3ab-066bf1f3601c.jpg`

- **Producto:** aceitunas, queso, vino rosado (aperitivo mediterráneo)
- **Categoría:** Lifestyle / Gastronomía
- **Resolución:** 1200×1600 px (163.8 KB)
- **Orientación:** Vertical 3:4
- **Composición:** mano entrando en el encuadre para tomar una aceituna de un cuenco de barro; botella y copa de rosado desenfocadas al fondo; cuña de queso en primer plano inferior
- **Iluminación:** hora dorada, lateral cálida, muy cinematográfica
- **Colores predominantes:** ámbar, dorado, verde oliva, terracota
- **Emociones:** placer sensorial, sobremesa, calidez mediterránea
- **Uso posible:** hero secundario, storytelling gastronómico, lifestyle
- **Nivel de calidad:** Alta — de las mejores fotografías reales del lote

### IMG-02 · `a0dd5ad8-adf7-4480-a92d-c8058c7d3e5b.jpg`

- **Producto:** N/A — mockup de rótulo/señalética de marca
- **Categoría:** Marca / Identidad
- **Resolución:** 1086×1448 px (147.3 KB)
- **Orientación:** Vertical ~3:4
- **Composición:** cartel enmarcado en bronce sobre fachada de piedra; calle nocturna desenfocada al fondo
- **Iluminación:** nocturna, foco cálido dirigido, bokeh de farolas
- **Colores predominantes:** chocolate, bronce/cobre, marfil
- **Emociones:** exclusividad, misterio urbano europeo
- **Uso posible:** storytelling de marca, sección "la marca"/ubicaciones
- **Nivel de calidad:** Alta como render, **pero contiene una errata** ("CONFORT LIFE" en vez de "COMFORT LIFE") — no usar sin corregir

### IMG-03 · `a4155d50-3cf0-4c8b-b311-6f11e3c2d41c.jpg`

- **Producto:** ciruelas/endrinas — pintura al óleo enmarcada
- **Categoría:** Arte / Storytelling (bodegón)
- **Resolución:** 900×900 px (118.9 KB)
- **Orientación:** Cuadrada 1:1
- **Composición:** cuadro dentro de marco de madera negra ornamentado, fondo neutro
- **Iluminación:** estudio suave propia de bodegón pictórico
- **Colores predominantes:** negro, ciruela oscuro, crema
- **Emociones:** quietud, herencia, "galería de arte" literal
- **Uso posible:** storytelling, transición editorial, textura decorativa de fondo
- **Nivel de calidad:** Alta — es una ilustración/pintura digital, no fotografía de producto; usar como pieza conceptual

### IMG-04 · `a6e38b76-5915-49a2-af3d-fe9c31c92f56.jpg`

- **Producto:** copa de vino tinto (plano abstracto)
- **Categoría:** Textura / Abstracto
- **Resolución:** 809×1249 px (68 KB)
- **Orientación:** Vertical ~2:3
- **Composición:** primer plano cenital del borde de una copa, líneas circulares concéntricas
- **Iluminación:** cálida, ámbar, a contraluz
- **Colores predominantes:** ámbar, caoba, negro
- **Emociones:** sofisticación, misterio, abstracción sensorial
- **Uso posible:** textura, fondo de transición, detalle
- **Nivel de calidad:** Media — difícil de leer sin contexto; funciona como textura, no como imagen protagonista

### IMG-05 · `aef2d4c0-f85f-4f51-bb08-7c37b7532d60.jpg`

- **Producto:** selección de 6 quesos artesanos apilados
- **Categoría:** Producto / Arte
- **Resolución:** 1023×1537 px (265.1 KB)
- **Orientación:** Vertical ~2:3
- **Composición:** marco barroco dorado antiguo apoyado sobre pared de ladrillo blanco; los quesos "flotan" dentro del marco como si fueran el cuadro
- **Iluminación:** dramática, foco lateral, fondo oscuro dentro del marco
- **Colores predominantes:** dorado antiguo, blanco grisáceo del muro, crema/naranja de los quesos
- **Emociones:** reverencia, lujo museográfico — "la comida como obra de arte"
- **Uso posible:** **hero principal** o pieza central de storytelling de quesos
- **Nivel de calidad:** Excelente — la imagen conceptualmente más alineada con el manifiesto de marca de todo el lote

### IMG-06 · `bea773fa-90e7-4b7e-aa89-34f566363d1f.jpg`

- **Producto:** barricas de vino con logotipo de marca
- **Categoría:** Storytelling / Manifiesto
- **Resolución:** 1086×1448 px (188 KB)
- **Orientación:** Vertical ~3:4
- **Composición:** cuadro en pared con el texto "No comercializamos productos, honramos orígenes / Comfort Life Ibérica"; una esquina "despegada" revela una bodega con barricas; mano con guante de encaje rosa dorado sujeta la esquina
- **Iluminación:** cálida interior, focos de bodega
- **Colores predominantes:** negro, dorado, cobre, marrón madera
- **Emociones:** revelación, autenticidad, artesanía
- **Uso posible:** sección de manifiesto/filosofía, historia de marca
- **Nivel de calidad:** Alta como concepto, pero el recurso de "cortina que se despega" es un efecto de mockup publicitario genérico — usar con moderación, nunca como hero. Confirma además la inconsistencia de naming señalada en el hallazgo 5.

### IMG-07 · `c1b7eff0-717d-44f3-b366-3d8240b398a8.jpg`

- **Producto:** N/A — retrato editorial de moda
- **Categoría:** Lifestyle / Editorial
- **Resolución:** 900×1600 px (54 KB)
- **Orientación:** Vertical 9:16
- **Composición:** silueta a contraluz con sombrero cordobés negro y vestido negro; brazo alzado sosteniendo una copa de vino blanco; fondo negro absoluto
- **Iluminación:** claroscuro extremo, un único foco lateral
- **Colores predominantes:** negro, dorado/ámbar del vino, piel cálida
- **Emociones:** misterio, sensualidad contenida, elegancia española
- **Uso posible:** hero secundario, apertura de sección editorial, lifestyle
- **Nivel de calidad:** Excelente — muy cinematográfica; formato ideal para hero mobile de pantalla completa

### IMG-08 · `c3e378a5-a915-4529-beee-8018f8c3e626.jpg`

- **Producto:** jamón ibérico (loncha)
- **Categoría:** Producto / Gastronomía
- **Resolución:** 1200×1600 px (134.7 KB)
- **Orientación:** Vertical 3:4
- **Composición:** mano sujetando una loncha de jamón en primer plano; tabla con más jamón y pan con tomate desenfocados; copa de rosado en primer plano
- **Iluminación:** cálida interior, luces bokeh doradas de fondo
- **Colores predominantes:** rojo jamón, dorado, crema
- **Emociones:** apetito, autenticidad, sobremesa española
- **Uso posible:** producto (jamón), gastronomía, detalle
- **Nivel de calidad:** Alta — muy apetecible y auténtica

### IMG-09 · `c6f32e8a-19c6-4114-8c5d-5b8520d88c96.jpg`

- **Producto:** uva Garnacha (racimo) — ilustración enmarcada
- **Categoría:** Arte / Territorio-varietal
- **Resolución:** 1254×1254 px (177.3 KB)
- **Orientación:** Cuadrada 1:1
- **Composición:** marco de madera oscura; ilustración de racimo de uva con hoja; etiqueta dorada "GARNACHA"
- **Iluminación:** pictórica, suave
- **Colores predominantes:** marrón oscuro, burdeos/morado uva, verde hoja, dorado
- **Emociones:** carácter didáctico, herencia vitivinícola, "ficha de museo"
- **Uso posible:** ficha técnica ilustrada de varietal, storytelling de vinos, territorio
- **Nivel de calidad:** Alta como ilustración; es render/pintura digital, no fotografía — misma familia que IMG-03 e IMG-19

### IMG-10 · `d1a31fbb-f16f-428d-83e2-75e465b1fdea.jpg`

- **Producto:** tabla de quesos, higos y frutos secos
- **Categoría:** Gastronomía / Producto
- **Resolución:** 736×1104 px (116.4 KB)
- **Orientación:** Vertical 2:3
- **Composición:** flat-lay cenital sobre tabla redonda oscura con mango; uvas negras, higos, quesos variados, almendras, nueces; copa de tinto en la esquina superior
- **Iluminación:** tenue, cálida, dramática ("dark & moody")
- **Colores predominantes:** burdeos, negro, crema, dorado
- **Emociones:** opulencia discreta, otoño, sobremesa íntima
- **Uso posible:** storytelling gastronómico, hero secundario de colección de quesos, fondo de sección
- **Nivel de calidad:** Excelente — muy editorial, de las composiciones más equilibradas del lote

### IMG-11 · `db1fd53c-a3be-47d5-9f5e-9f84deaa89d3.jpg`

- **Producto:** copa con condensación (vino rosado/espumoso)
- **Categoría:** Textura / Abstracto
- **Resolución:** 736×981 px (151 KB)
- **Orientación:** Vertical ~3:4
- **Composición:** macro extremo de gotas de condensación con destello de luz (lens flare)
- **Iluminación:** retroiluminada cálida, con destello
- **Colores predominantes:** naranja/ámbar, negro
- **Emociones:** frescor, verano, sensorialidad
- **Uso posible:** textura, fondo de transición
- **Nivel de calidad:** Media — vistosa pero se acerca a un recurso de banco de imágenes genérico

### IMG-12 · `e56b4df6-49e8-4013-bc59-0eac06177b3e.jpg`

- **Producto:** anchoas/boquerones en aceite
- **Categoría:** Producto / Conservas
- **Resolución:** 1402×1122 px (236 KB)
- **Orientación:** **Horizontal** (única del lote, ~5:4 apaisada)
- **Composición:** bandeja de plata antigua ornamentada; filetes de anchoa dispuestos en filas
- **Iluminación:** dramática, foco único cálido, fondo negro
- **Colores predominantes:** negro, plata envejecida/dorado, rojo-caoba del pescado
- **Emociones:** refinamiento, tradición conservera, opulencia discreta
- **Uso posible:** producto (conservas), storytelling, banner ancho de categoría
- **Nivel de calidad:** Excelente — la mejor toma de producto puro del lote, y la única con proporción utilizable en formatos anchos

### IMG-13 · `e5cec59d-104c-46d0-abf7-354cb91e4501.jpg`

- **Producto:** tabla mixta abundante (salami, quesos, jamón, panes, frutos secos, uvas, aceitunas, manzana, grisines)
- **Categoría:** Gastronomía / Lifestyle
- **Resolución:** 1200×1500 px (201.6 KB)
- **Orientación:** Vertical 4:5
- **Composición:** flat-lay cenital muy cargado; tabla circular de madera clara; fondo marrón oscuro texturizado
- **Iluminación:** cálida, dramática
- **Colores predominantes:** marrón, dorado, rojo salami, verde aceituna
- **Emociones:** abundancia, celebración, "picoteo" social
- **Uso posible:** gastronomía/lifestyle, pero **solo recortada** — el exceso de elementos contradice el principio de selección mínima del Manual (Cap. 02)
- **Nivel de calidad:** Técnicamente alta, pero la más "comercial/abundante" conceptualmente del lote

### IMG-14 · `eb6751db-6a02-4ba5-803a-fca19ca45e6f.jpg`

- **Producto:** rulos de jamón/paleta ibérica con palillo, relleno visible
- **Categoría:** Producto / Arte
- **Resolución:** 1086×1448 px (256.3 KB)
- **Orientación:** Vertical ~3:4
- **Composición:** marco barroco de cobre (misma serie que IMG-05); fondo de pizarra negra mojada
- **Iluminación:** dramática, foco cenital-lateral
- **Colores predominantes:** cobre/bronce del marco, rojo jamón, negro pizarra
- **Emociones:** lujo museográfico, sensualidad gastronómica
- **Uso posible:** hero secundario, producto (embutidos), storytelling
- **Nivel de calidad:** Excelente — junto a IMG-05, la pieza insignia de la serie "producto como obra"

### IMG-15 · `ef817f35-fa33-44cc-909a-80967dce99d7.jpg`

- **Producto:** cóctel estilo Negroni
- **Categoría:** Bebidas espirituosas / Lifestyle
- **Resolución:** 1024×1536 px (253.7 KB)
- **Orientación:** Vertical 2:3
- **Composición:** vaso de cristal tallado, hielo grande, romero y piel de naranja; mármol negro reflectante
- **Iluminación:** dramática, foco único, muy cinematográfica
- **Colores predominantes:** rojo rubí, negro, verde romero, naranja
- **Emociones:** sofisticación nocturna, ritual de coctelería
- **Uso posible:** producto (bebidas espirituosas), hero secundario, lifestyle nocturno
- **Nivel de calidad:** Excelente

### IMG-16 · `f20b90c8-87dc-4bea-a66c-8aee87e63c9e.jpg`

- **Producto:** embutido curado (lomo/salchichón) colgado, con lonchas cayendo
- **Categoría:** Producto / Embutidos
- **Resolución:** 1200×1200 px (71.1 KB)
- **Orientación:** Cuadrada 1:1
- **Composición:** pieza colgada de una cuerda; lonchas en composición dinámica de caída
- **Iluminación:** estudio dramático
- **Colores predominantes:** **verde botella oscuro de fondo** (atípico), rojo/blanco veteado del embutido
- **Emociones:** dinamismo, artesanía, tensión visual
- **Uso posible:** producto destacado de embutidos, **solo tras evaluar/retocar el fondo verde**, que no forma parte de la paleta oficial de marca
- **Nivel de calidad:** Alta técnicamente, alto impacto, pero cromáticamente disonante con el sistema visual

### IMG-17 · `f449a3b8-4bb5-43a6-a2d0-97bc9a022822.jpg`

- **Producto:** silueta de botella "impresa" en tierra/arena
- **Categoría:** Territorio / Storytelling conceptual
- **Resolución:** 786×1049 px (332.2 KB)
- **Orientación:** Vertical 3:4
- **Composición:** huella en forma de botella sobre tierra pedregosa y reseca; minimalista
- **Iluminación:** lateral dura, muy texturizada
- **Colores predominantes:** tierra, ocre, terracota oscuro
- **Emociones:** origen, memoria del terruño, ausencia/presencia
- **Uso posible:** territorio (imagen conceptual de introducción), fondo de sección, transición
- **Nivel de calidad:** Excelente — la pieza más original y distintiva del lote; suple parcialmente (de forma conceptual, no literal) la ausencia de fotografía real de territorio

### IMG-18 · `f7417028-983e-4db0-8215-0130cf27e695.jpg`

- **Producto:** pinchos/brochetas (cecina, aceitunas, palmito o similar)
- **Categoría:** Gastronomía / Producto
- **Resolución:** 854×1280 px (97.3 KB)
- **Orientación:** Vertical ~2:3
- **Composición:** bandeja metálica sobre **fondo blanco liso**
- **Iluminación:** plana, uniforme, tipo catálogo
- **Colores predominantes:** blanco, rojo cecina, verde aceituna
- **Emociones:** ninguna particular — neutro, funcional
- **Uso posible:** no recomendado sin repostproducción completa
- **Nivel de calidad:** **Baja para el estándar de marca** — fondo blanco liso de ecommerce, prohibido explícitamente por el Manual (Cap. 28/54)

### IMG-19 · `f912f127-7d23-4bfc-b111-1c67f4a54f05.jpg`

- **Producto:** higos partidos — pintura al óleo enmarcada
- **Categoría:** Arte / Storytelling (bodegón)
- **Resolución:** 749×755 px (73.3 KB)
- **Orientación:** Cuadrada ~1:1
- **Composición:** misma serie que IMG-03 (marco negro fino, firma y fecha doradas)
- **Iluminación:** pictórica suave
- **Colores predominantes:** beige, rosa higo, marrón
- **Emociones:** quietud, delicadeza, herencia
- **Uso posible:** storytelling, transición editorial
- **Nivel de calidad:** Alta como pieza pictórica

### IMG-20 · `f9eba704-eb7a-4371-88c1-eb8f4f6eb389.jpg`

- **Producto:** N/A — sumiller/camarero sirviendo vino
- **Categoría:** Lifestyle / Hostelería
- **Resolución:** 736×1103 px (98.2 KB)
- **Orientación:** Vertical 2:3
- **Composición:** camarero sirviendo vino tinto en copa; segunda copa vacía; tabla de quesos/jamón desenfocada
- **Iluminación:** interior cálida, algo plana
- **Colores predominantes:** marrón madera, rojo vino, blanco camisa
- **Emociones:** servicio, hospitalidad — de forma genérica
- **Uso posible:** lifestyle/hostelería, con uso moderado
- **Nivel de calidad:** Media — correcta pero sin la sofisticación distintiva del resto del set; la más "stock de restaurante" del lote

### IMG-21 · `faeb0633-f45d-4bf2-b119-2cc6dda6ee44.jpg`

- **Producto:** quesos (cuña de corteza rayada + rueda + esquina de azul)
- **Categoría:** Producto / Detalle
- **Resolución:** 735×1072 px (121.5 KB)
- **Orientación:** Vertical 2:3
- **Composición:** macro de texturas de corteza; fondo beige liso
- **Iluminación:** suave, difusa
- **Colores predominantes:** beige, crema, dorado, azul verdoso de la veta
- **Emociones:** artesanía, tactilidad
- **Uso posible:** detalle/textura, producto (quesos)
- **Nivel de calidad:** Alta — muy útil como macro de "detalle"

### IMG-22 · `fc5b87b1-b146-4303-9c59-e84907ec80a3.jpg`

- **Producto:** cóctel Old Fashioned sirviéndose
- **Categoría:** Bebidas / Producto
- **Resolución:** 750×1125 px (70.6 KB)
- **Orientación:** Vertical 2:3
- **Composición:** botella sirviendo sobre vaso con hielo, oliva y naranja; **fondo de mármol blanco**
- **Iluminación:** suave, plana, de estudio publicitario
- **Colores predominantes:** ámbar, blanco, verde oliva
- **Emociones:** ninguna distintiva — anuncio de producto genérico
- **Uso posible:** no recomendado sin repostproducción; redundante frente a IMG-15, muy superior
- **Nivel de calidad:** **Baja para el estándar de marca** — mismo problema de fondo liso que IMG-18

### IMG-23 · `fe520b9d-d82f-4013-b278-c32f56fe14b7.jpg`

- **Producto:** vino rosado sirviéndose en copas
- **Categoría:** Lifestyle
- **Resolución:** 901×1200 px (162.4 KB)
- **Orientación:** Vertical 3:4
- **Composición:** mano sirviendo rosado en dos copas sobre la barandilla de un barco/yate; mar azul de fondo; persona con camisa de lino blanco
- **Iluminación:** luz de día brillante, sol directo — no es hora dorada
- **Colores predominantes:** **azul mar dominante**, blanco, dorado del vino
- **Emociones:** verano, ocio, "lifestyle de yate" — más aspiracional-Instagram que "galería serena"
- **Uso posible:** lifestyle, solo si se recorta fuertemente para eliminar el mar azul y el contexto de yate
- **Nivel de calidad:** Técnicamente correcta pero **tonalmente disonante**: color frío dominante (prohibido, Cap. 28) y tono más "influencer" que editorial de lujo

---

## 3. Familias visuales

| Familia                                                               | Imágenes                                              | Descripción                                                                                                                                                     |
| --------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A. Bodegón de museo** (pintura enmarcada)                           | IMG-03, IMG-09, IMG-19                                | Ilustraciones/pinturas digitales de fruta o uva, en marco de madera oscura, formato cuadrado, firma y fecha doradas. Serie didáctica/artística, no fotográfica. |
| **B. Producto como obra** (foto real en marco ornamentado)            | IMG-05, IMG-14                                        | Fotografía real de producto (quesos, jamón) dentro de marco barroco dorado/cobre. **La expresión más literal y lograda del principio "galería, no tienda".**    |
| **C. Naturaleza muerta dramática** (producto sin marco, fondo oscuro) | IMG-12, IMG-16, IMG-21                                | Producto solo, iluminación de estudio dramática, fondo oscuro o neutro. Buena base para fichas de producto.                                                     |
| **D. Lifestyle gastronómico de hora dorada**                          | IMG-01, IMG-08                                        | Manos + mesa + luz cálida natural. El tono humano y sensorial de la marca.                                                                                      |
| **E. Lifestyle editorial / retrato**                                  | IMG-07                                                | Moda, claroscuro, identidad española. Pieza única, muy potente.                                                                                                 |
| **F. Bebidas y coctelería**                                           | IMG-15 (alta), IMG-22 (off-brand), IMG-23 (disonante) | Calidad muy desigual dentro de la misma familia — ver hallazgo 4.                                                                                               |
| **G. Flat-lays de tabla**                                             | IMG-10 (oscura, editorial), IMG-13 (clara, abundante) | Mismo concepto, tonos opuestos; IMG-10 mucho más alineada con la marca.                                                                                         |
| **H. Texturas y abstracciones**                                       | IMG-04, IMG-11                                        | Macro de copa/condensación; función exclusivamente decorativa/transicional.                                                                                     |
| **I. Conceptual de marca y territorio**                               | IMG-02, IMG-06, IMG-17                                | Piezas de concepto (rótulo, manifiesto, terruño). IMG-17 es la más lograda; IMG-02 e IMG-06 tienen problemas de naming.                                         |
| **J. Catálogo genérico (fondo blanco)**                               | IMG-18, IMG-22                                        | Fuera del sistema visual de marca; requieren repostproducción o descarte.                                                                                       |
| **K. Hostelería genérica**                                            | IMG-20                                                | Correcta pero sin distinción; usar con moderación.                                                                                                              |

---

## 4. Mejores imágenes por uso

| Uso                  | Recomendación principal                                               | Alternativas                                                 |
| -------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Hero principal**   | IMG-05 (quesos en marco barroco)                                      | IMG-07 (retrato claroscuro)                                  |
| **Hero secundarios** | IMG-07, IMG-14                                                        | IMG-01, IMG-10, IMG-15                                       |
| **Fondos**           | IMG-17 (tierra/botella)                                               | IMG-04, IMG-11, IMG-03/IMG-19 (como textura tras texto)      |
| **Storytelling**     | IMG-05, IMG-14, IMG-06, IMG-17                                        | IMG-02 (corrigiendo la errata), IMG-09                       |
| **Productos**        | IMG-12 (conservas), IMG-08 (jamón), IMG-21 (quesos), IMG-15 (bebidas) | IMG-16 (con retoque de fondo)                                |
| **Productores**      | —                                                                     | **No hay ninguna imagen disponible; vacío crítico, ver §5**  |
| **Territorios**      | IMG-17 (conceptual, no literal)                                       | **No hay fotografía real de paisaje; vacío crítico, ver §5** |
| **Gastronomía**      | IMG-01, IMG-10                                                        | IMG-08, IMG-13 (recortada)                                   |
| **Detalles**         | IMG-21, IMG-04                                                        | IMG-08 (crop), IMG-14 (crop)                                 |
| **Lifestyle**        | IMG-01, IMG-07                                                        | IMG-08, IMG-23 (solo recortada), IMG-20 (uso moderado)       |
| **Texturas**         | IMG-04, IMG-11                                                        | IMG-21 (corteza), IMG-17 (tierra)                            |

---

## 5. Imágenes problemáticas

### Off-brand — no usar sin repostproducción o descartar

- **IMG-18** (`f7417028…`) — fondo blanco liso de ecommerce, prohibido explícitamente por el Manual.
- **IMG-22** (`fc5b87b1…`) — mismo problema (fondo blanco/mármol de estudio publicitario); además es redundante frente a IMG-15, que cubre la misma necesidad (cóctel) con muchísima más calidad.

### Tonalmente disonante — usar solo con recorte/retoque

- **IMG-23** (`fe520b9d…`) — el azul del mar domina la imagen (color frío prohibido en la paleta) y el tono es de lifestyle de Instagram genérico, no de galería serena. Solo aprovechable si se recorta muy de cerca a manos/copas, eliminando el mar.
- **IMG-16** (`f20b90c8…`) — fondo verde botella que no pertenece a la paleta cromática oficial; evaluar recorte o corrección de color antes de publicar.

### Redundancia conceptual (no duplicados exactos, pero cubren la misma función)

- IMG-15 vs. IMG-22: mismo concepto (cóctel sirviéndose); mantener solo IMG-15.
- IMG-04 vs. IMG-11: ambas son macro/abstracto de copa como textura; ninguna es imprescindible por sí sola, pero juntas son redundantes — usar una como principal y reservar la otra como variante.
- IMG-10 vs. IMG-13: mismo concepto de tabla de quesos/embutidos; IMG-10 (oscura, comedida) es muy superior en tono de marca a IMG-13 (clara, abundante, más "spread" comercial).
- IMG-03, IMG-09, IMG-19: no son duplicados (fruta distinta) pero forman un mismo recurso — evitar usarlas juntas en una misma sección para no sobre-repetir el motivo "cuadro de museo".

### Errores de naming a resolver antes de usar como activos de marca

- IMG-02: el rótulo dice "CONFORT LIFE" (falta la "m").
- IMG-06: el barril dice "IBÉRICA / Comfort Life", orden invertido respecto al resto del proyecto ("Comfort Life Ibérica").

### Ninguna imagen fue descartada por ser un duplicado exacto (archivo repetido) — no se detectaron duplicados binarios en el lote.

---

## 6. Vacíos de contenido detectados

Estos vacíos no son "imágenes de baja calidad": son categorías **completas** que el Manual Maestro exige y de las que no existe ni una sola imagen en `IMAGENES/`.

1. **Productores** (Cap. 36, componente Producer Profile) — cero retratos de personas: viticultores, queseros, maestros jamoneros. Sin esto, las páginas de productor (Cap. 39) no se pueden construir con material propio.
2. **Territorio real** (Cap. 39, Territory Map) — cero fotografía de paisaje real (viñedos, olivares, dehesas, bodegas). IMG-17 es un excelente sustituto _conceptual_, pero no cubre la necesidad de fotografía documental de origen.
3. **Formato horizontal / hero de pantalla completa en desktop** — solo 1 de 23 imágenes no es vertical o cuadrada, y ni siquiera es un 16:9 real. El Hero Inmersivo del Manual (Cap. 36) requiere imagen a pantalla completa; hoy eso exige recorte agresivo, upscaling o nueva fotografía.

Estos tres puntos deben tratarse como **encargo pendiente de fotografía/producción**, no como un problema de selección dentro del material existente.
