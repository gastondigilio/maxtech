// Catálogo único de productos: lo usan el listado, el detalle y el buscador del menú.
// Para sumar un producto nuevo alcanza con agregarlo acá.
// El orden de este listado es el orden en que aparecen en el catálogo.
//
// category:    marca que se muestra en la card y en el filtro "Marca"
// industry:    filtro "Industria"
// type:        subcategoría dentro de la industria (vacío si no tiene)
// description: texto corto de la card y del buscador
// intro:       párrafo de "Descripción del producto" en el detalle
// specs:       hasta 2 datos clave que se muestran como etiquetas en la card
// documents:   HDT (ficha técnica) y HDS (hoja de seguridad)
// externalUrl: si existe, la card abre ese sitio en lugar del detalle

export const industries = {
    'Construcción': ['Anclajes químicos', 'Aditivos para hormigón', 'Adhesivos y selladores'],
    'Aberturas': ['Fabricación DVH', 'Instalación silicona neutra', 'Instalación', 'Insumos'],
    'Aplicadores': []
};

export const brands = ['Maxtech', 'Maxtech Profesional', 'Horse', 'Silande'];

export const products = [
    {
        id: 18,
        name: "DEEP FORCE 900",
        category: "Maxtech Profesional",
        type: "Adhesivos y selladores",
        industry: "Construcción",
        image: "/images/products/maxtech/deep-force-900.jpg",
        description: "Sellador adhesivo de poliurea para grietas en hormigón",
        specs: ["Bolsa 500 ml", "Elongación más de 300%"],
        intro: "Sellador de juntas y adhesivo de poliurea de alto rendimiento para reparar grietas en hormigón. Con alto contenido de sólidos, baja contracción, gran elongación y alta resistencia a la tracción, resuelve fugas y filtraciones en juntas de dilatación, de contracción y de conexión. También puede usarse como revestimiento impermeable.",
        longDescription: "PROPIEDADES\n• Excelente durabilidad: resiste la inmersión en agua, ácidos, álcalis y altas temperaturas\n• Resistencia y elasticidad: refuerza la estructura y acompaña sus deformaciones\n• Estructura interna densa, excelente impermeabilidad\n• Sin contracción después del curado\n• Cura tanto a altas como a bajas temperaturas\n• Pintable\n\nAPLICACIONES\n• Ingeniería civil: obras hidráulicas, refuerzo de presas y sellado de filtraciones\n• Túneles: relleno de huecos entre el revestimiento y la roca, para evitar filtraciones\n• Puentes y rutas: curado rápido y alta resistencia para restaurar la capacidad portante\n• Edificios industriales y civiles: impermeabilización de sótanos, techos y muros\n\nESPECIFICACIONES\n• Base: poliurea\n• Sistema de curado: por humedad\n• Formación de piel (23 °C, 50% HR): 15–20 min\n• Velocidad de curado (23 °C, 50% HR): mín. 2,5 mm / 24 h\n• Dureza (Shore A a 28 días, ISO 868): 40 ± 5\n• Densidad relativa: 1,57–1,63\n• Alargamiento a la rotura (DIN 53504): más de 300%\n• Resistencia a la tracción (DIN 53504): 1,5–2,0 N/mm²\n• Capacidad de movimiento: 25%\n• Resistencia a la temperatura: −40 °C a +90 °C\n• Temperatura de aplicación: +5 °C a +40 °C\n• Color: gris\n• Presentación: bolsa de aluminio de 500 ml\n\nLIMITACIONES\n• No aplicar por debajo de +5 °C ni por encima de +40 °C\n• No apto para aplicaciones en contacto con alimentos\n\nRECOMENDACIONES DE USO\n• El sustrato debe estar seco, limpio y libre de polvo y aceite\n• Colocar la bolsa en la pistola aplicadora e inyectar el producto en la junta, con una profundidad de 1–2 cm. En juntas más profundas, rellenar antes con cordón de espuma o arena fina; el sellador debe quedar unos 2 mm por debajo de la superficie\n• Rendimiento de referencia: una bolsa de 500 ml sella aproximadamente 6 metros lineales de junta de 1 × 1 cm",
        safetyInfo: "SEGURIDAD\n\nTomar las precauciones de higiene habituales. No apto para aplicaciones en contacto con alimentos. La hoja de seguridad de este producto todavía no está disponible.\n\nEmergencias: Centro Nacional de Intoxicaciones 0800 333 0160.\n\nTRANSPORTE Y ALMACENAMIENTO\n\nAlmacenar en lugar fresco y seco, entre +5 °C y +35 °C. Vida útil: 12 meses en envase cerrado.",
        documents: {
            HDT: "/documents/products/maxtech/deep-force-900/HDT_Deep-Force-900.pdf"
        }
    },
    {
        id: 17,
        name: "SELLADOR HÍBRIDO HIGH TACK",
        category: "Maxtech Profesional",
        type: "Adhesivos y selladores",
        industry: "Construcción",
        image: "/images/products/maxtech/sellador-hibrido-high-tack.jpg",
        description: "Adhesivo-sellador híbrido MS de alto agarre inicial",
        specs: ["Cartucho 300 ml", "Soporta hasta 350 kg"],
        intro: "Adhesivo-sellador de polímero híbrido (MS) monocomponente, de alto agarre inicial y extra fuerte. Sostiene las piezas desde el primer momento, adhiere incluso bajo el agua y no corroe metales. Multimaterial, para uniones de alta exigencia en construcción e industria.",
        longDescription: "PROPIEDADES\n• Agarre inmediato y fuerte (high tack)\n• Extra fuerte: soporta hasta 350 kg\n• Adhiere bajo el agua\n• No corroe metales\n• Multimaterial\n• Monocomponente, listo para usar\n• Bajo contenido de COV (< 27 g/l)\n\nESPECIFICACIONES\n• Base: polímero híbrido (MS)\n• Consistencia: pasta\n• Densidad: 1,60 ± 0,03 g/ml\n• Presentación: cartucho de 300 ml",
        safetyInfo: "SEGURIDAD\n\nClasificación GHS: peligroso para el medio ambiente acuático, peligro crónico cat. 3 (H412: nocivo para la vida acuática, con efectos nocivos duraderos). No requiere palabra de advertencia. Contiene estannano, dibutilbis[(1-oxododecil)oxi]-; puede provocar una reacción alérgica (EUH208).\n\nPrimeros auxilios:\n• Inhalación: llevar a la persona al aire libre y mantenerla en una posición cómoda para respirar.\n• Contacto con la piel: lavar con abundante agua.\n• Contacto con los ojos: enjuagar con agua como medida de precaución.\n• Ingestión: llamar a un centro de toxicología o a un médico si la persona se siente mal.\n\nProtección personal: guantes de protección, gafas de seguridad y ropa adecuada. Asegurar buena ventilación; si es insuficiente, usar protección respiratoria. No comer, beber ni fumar durante el uso y lavarse las manos después de manipular el producto. Evitar su liberación al medio ambiente y mantener fuera del alcance de los niños.\n\nEmergencias: Centro Nacional de Intoxicaciones 0800 333 0160.\n\nTRANSPORTE Y ALMACENAMIENTO\n\nNo clasificado como mercancía peligrosa (ADR / RID / IMDG / IATA). Almacenar en un lugar fresco y bien ventilado.",
        documents: {
            HDS: "/documents/products/maxtech/sellador-hibrido-high-tack/HDS_Sellador-Hibrido-High-Tack.pdf"
        }
    },
    {
        id: 16,
        name: "SELLADOR HÍBRIDO CRISTAL",
        category: "Maxtech Profesional",
        type: "Adhesivos y selladores",
        industry: "Construcción",
        image: "/images/products/maxtech/sellador-hibrido-cristal.jpg",
        description: "Adhesivo-sellador híbrido MS transparente",
        specs: ["Cartucho 280 ml", "−40 °C a +90 °C"],
        intro: "Adhesivo-sellador de polímero híbrido (MS), 100% transparente. Ofrece una excepcional resistencia de unión sobre casi todos los materiales de construcción, adhiere sobre superficies húmedas y es libre de silicona y disolventes. Para uniones de alta exigencia en construcción, industria, náutica y automoción.",
        longDescription: "PROPIEDADES\n• Endurecimiento rápido\n• Cristal transparente\n• Excelentes propiedades mecánicas\n• Aplicación universal, multimaterial\n• Alta resistencia adhesiva, sella como la silicona\n• También adhiere sobre superficies húmedas\n• Inodoro\n• Baja contracción\n• Libre de silicona y disolventes\n• Pintable (no apto para pinturas de resina alquídica; realizar ensayos de compatibilidad)\n\nAPLICACIONES\n• Unión y sellado en construcción y metalúrgica: zócalos, paneles de yeso, terracota, madera, metales\n• Superficies de vidrio, piedra natural, mármol y granito\n• Unión elástica de alta resistencia: plásticos, hormigón, ladrillo, revoque, cerámica, hormigón celular, fibrocemento, HPL, ABS, corcho, esmalte\n• Al unir PC/PMMA o dos materiales no absorbentes, verificar compatibilidad previa (al menos un sustrato debe ser absorbente)\n\nESPECIFICACIONES\n• Base: polímero híbrido (MS)\n• Consistencia: pasta tixotrópica\n• Sistema de curado: por humedad\n• Formación de piel (23 °C, 50% HR): 5–30 min\n• Velocidad de curado (23 °C, 50% HR): mín. 2,5 mm / 24 h\n• Dureza (Shore A, ISO 868): 55\n• Densidad: 1,05 g/ml\n• Resistencia a la temperatura: −40 °C a +90 °C\n• Temperatura de aplicación: +5 °C a +25 °C\n• Color: cristal transparente\n• Presentación: cartucho de 280 ml\n\nLIMITACIONES\n• No apto para unión sobre PE, PP, PVC, neopreno, PTFE ni sustratos bituminosos\n• No apto para aplicaciones bajo agua, cargas húmedas permanentes ni acuarios\n• No usar como adhesivo en sistemas de acristalamiento estructural\n• Sin protección UV: en exteriores debe quedar confinado, ya que puede amarillear con la exposición prolongada al sol\n\nRECOMENDACIONES DE USO\n• Las superficies deben estar secas, limpias y libres de polvo, grasa y partículas sueltas; al menos una debe ser porosa\n• No aplicar sobre materiales que estén curando o fraguando\n• Las fijaciones temporales en piezas pesadas pueden retirarse dentro de las 24 horas\n• Probar en condiciones reales de aplicación antes del uso definitivo",
        safetyInfo: "SEGURIDAD\n\nClasificación GHS: irritación cutánea cat. 2 (H315) e irritación ocular grave cat. 2 (H319). Palabra de advertencia: Atención.\n\nPrimeros auxilios:\n• Inhalación: llevar a la persona al aire libre y mantenerla en una posición cómoda para respirar.\n• Contacto con la piel: lavar con abundante agua.\n• Contacto con los ojos: enjuagar con abundante agua corriente durante al menos 10–15 minutos. Retirar los lentes de contacto si es fácil hacerlo. Consultar a un médico si la irritación persiste.\n• Ingestión: llamar a un centro de toxicología o a un médico si la persona se siente mal.\n\nProtección personal: guantes de protección, gafas de seguridad y ropa adecuada. Asegurar buena ventilación; si es insuficiente, usar protección respiratoria. No comer, beber ni fumar durante el uso y lavarse las manos después de manipular el producto.\n\nEmergencias: Centro Nacional de Intoxicaciones 0800 333 0160.\n\nTRANSPORTE Y ALMACENAMIENTO\n\nNo clasificado como mercancía peligrosa (ADR / RID / IMDG / IATA). Almacenar en lugar fresco y seco, entre +5 °C y +25 °C. Vida útil: 12 meses en envase original cerrado.",
        documents: {
            HDT: "/documents/products/maxtech/sellador-hibrido-cristal/HDT_Sellador-Hibrido-Cristal.pdf",
            HDS: "/documents/products/maxtech/sellador-hibrido-cristal/HDS_Sellador-Hibrido-Cristal.pdf"
        }
    },
    {
        id: 6,
        name: "MAXTECH JM702",
        category: "Maxtech",
        type: "",
        industry: "Aplicadores",
        image: "/images/products/maxtech/JM702.png",
        description: "Pistola aplicadora neumática",
        specs: ["Neumática 0,8 MPa", "Tubos de 600 ml"],
        intro: "Aplicador neumático profesional para adhesivos, selladores, pastas y mastiques",
        longDescription: "Diseñado para usar con tubos de tamaño estándar de 600 ml.\nFuerza máxima: 0.8 MPa\nCuerpo de aluminio para mayor resistencia.\nFácil ajuste del flujo de sellador.\nConector giratorio para manguera de aire.\nTipo salchicha para una rápida carga y extracción del cartucho.\nGatillo ergonómico para mayor comodidad durante el uso.\nExcelente para cartuchos y bolsas de sellador.\nResistente.\nTamaño: 600 ml\nEmbalaje: 6 unidades por caja\nTamaño de la caja: 54.5 x 47 x 27 cm",
        safetyInfo: "",
        documents: {
            HDT: "/documents/products/maxtech/jm702/HDT JM 702 MAXTECH.pdf"
        }
    },
    {
        id: 9,
        name: "MAXTECH JM500L",
        category: "Maxtech",
        type: "",
        industry: "Aplicadores",
        image: "/images/products/maxtech/JM500.png",
        description: "Pistola aplicadora manual",
        specs: ["Empuje 13:1", "Tubos de 600 ml"],
        intro: "Aplicador manual profesional para adhesivos, selladores, pastas y mastiques",
        longDescription: "Diseñado para usar con tubos de tamaño estándar de 600 ml.\nRelación de empuje de 13:1\nCuerpo de aluminio y mango de aleación de zinc para mayor\nresistencia.\nVarilla rugosa.\nTipo salchicha para una rápida carga y extracción del cartucho.\nDisco de accionamiento metalúrgico para mayor resistencia.\nCortador de boquilla.\nPerforador de sellos.\nGatillo ergonómico para mayor comodidad durante el uso.\nTamaño: 600 ml\nEmbalaje: 6 piezas / caja\nTamaño de la caja: 53 x 29 x 17 cm",
        safetyInfo: "",
        documents: {
            HDT: "/documents/products/maxtech/jm500l/HDT JM 500 MAXTECH.pdf"
        }
    },
    {
        id: 2,
        name: "HORSE HM-500",
        category: "Horse",
        type: "Anclajes químicos",
        industry: "Construcción",
        image: "/images/products/horse/HM500.png",
        description: "Anclajes adhesivos inyectables",
        specs: ["Epoxi bicomponente", "Compresión ≥ 60 MPa"],
        intro: "HM-500 Epoxy Resin Achoring es un adhesivo de resina epoxi modificado de dos componentes, con tubo de plástico de alta calidad, paquete de doble cartucho. Se inyecta en los orificios con la pistola dispensadora, mezclando la parte A y la parte B de manera uniforme, para plantar barras de refuerzo.",
        longDescription: "Ficha técnica\n• Viscosidad de la mezcla: 18-22Pa • S\n• División de resistencia a la tracción ≥8.5MPa\n• Resistencia a la flexión ≥50MPa\n• Resistencia a la compresión ≥60MPa\n• Índice de tixotopía ≥4.0\n• Temperatura de distorsión ≥65\n• Resistencia al cizallamiento de acero-acero ≥16MPa\n• C30, φ25, L = 150 mm condición de resistencia a la tracción ≥11MPa\n• C30, φ25, L = 125 mm. Resistencia de unión de condición ≥17MPa\n• Longitud de pelado de impacto T acero-acero ≤25mm\n\nRango de aplicación\n• Conexiones estructurales con barras de refuerzo postinstaladas (por ejemplo, extensión / conexión a paredes, losas, escaleras, columnas, cimientos, etc.)\n\n• Es posible la renovación estructural de edificios, puentes y otras estructuras civiles, reconstruyendo y reforzando miembros concretos\n\n• Anclaje de conexiones de acero estructural (por ejemplo, columnas de acero, vigas, etc.)\n\nCómo utilizar\n• Taladro\n• agujero limpio\n• agujero del cepillo\n• Inyectar adhesivo\n• planta de barras de refuerzo\n• Curado",
        safetyInfo: "Procedimientos de emergencia y primeros auxilios:\nInhalación: Lleve a la víctima al aire libre. Si no respira, administre respiración artificial, preferiblemente boca a boca. Obtenga atención médica profesional de inmediato.\nContacto con los ojos: Mantenga los párpados abiertos y enjuague con agua durante al menos 15 a 20 minutos hasta que no queden rastros de sustancias químicas. Obtenga atención médica profesional de inmediato.\nContacto con la piel: quitarse la ropa y el calzado contaminados. Lavar con abundante agua y jabón durante 15-20 minutos hasta que no queden restos de sustancias químicas. Obtener atención médica profesional de inmediato.\n\nIngestión: Este material produce irritación gastrointestinal. Diluir inmediatamente tragando agua o leche. No intentar introducir nada en la boca de una persona inconsciente. Obtener atención médica profesional de inmediato.\n\nProtección ocular: Use gafas de seguridad química durante las operaciones de mezclado/vertido u otras actividades en las que sea probable que haya contacto ocular con material no diluido. Ropa protectora: Use ropa de trabajo general.",
        documents: {
            HDT: "/documents/products/horse/hm-500/HOJA TECNICA HORSE HM500 ANCLAJE QUIMICO EPOXI.pdf",
            HDS: "/documents/products/horse/hm-500/HOJA SEGURIDAD HORSE HM500 ANCLAJE QUIMICO EPOXI.pdf"
        }
    },
    {
        id: 11,
        name: "SILANDE MF910H",
        category: "Silande",
        type: "Fabricación DVH",
        industry: "Aberturas",
        image: "/images/products/silande/MF910H.png",
        description: "Sellador de butilo 2da barrera",
        externalUrl: "https://silandeargentina.com/productos/2"
    },
    {
        id: 12,
        name: "SILANDE MF910G",
        category: "Silande",
        type: "Fabricación DVH",
        industry: "Aberturas",
        image: "/images/products/silande/MF910G.png",
        description: "Sellador de butilo 1ra barrera",
        externalUrl: "https://silandeargentina.com/productos/3"
    },
    {
        id: 13,
        name: "SILANDE MF910",
        category: "Silande",
        type: "Fabricación DVH",
        industry: "Aberturas",
        image: "/images/products/silande/MF910.png",
        description: "Sellador de butilo 1ra barrera",
        externalUrl: "https://silandeargentina.com/productos/4"
    },
    {
        id: 14,
        name: "SILANDE MF899",
        category: "Silande",
        type: "Instalación",
        industry: "Aberturas",
        image: "/images/products/silande/MF899.png",
        description: "Sellador de silicona estructural",
        externalUrl: "https://silandeargentina.com/productos/8"
    },
    {
        id: 15,
        name: "SILANDE MF889",
        category: "Silande",
        type: "Instalación",
        industry: "Aberturas",
        image: "/images/products/silande/MF889.png",
        description: "Sellador de silicona climático",
        externalUrl: "https://silandeargentina.com/productos/15"
    },
    {
        id: 3,
        name: "MACROFIBRA MAXFIBER 50",
        category: "Maxtech",
        type: "Aditivos para hormigón",
        industry: "Construcción",
        image: "/images/products/maxtech/macro1.png",
        secondaryImages: [
            "/images/products/maxtech/Group 4.png",
            "/images/products/maxtech/macro2.png"
        ],
        description: "Macrofibra de polipropileno virgen",
        specs: ["Refuerzo estructural", "Hormigón y morteros"],
        intro: "100% virgen de polipropileno para refuerzo estructural de hormigón y morteros. Incrementa la impermeabilización.",
        longDescription: "",
        safetyInfo: "",
        documents: {
            HDS: "/documents/products/maxtech/macrofiber-50/HOJA DE DATOS DE SEGURIDAD MICRO FIBRA MAXTECH.pdf"
        }
    },
    {
        id: 4,
        name: "MICROFIBRA MAXFIBER 19",
        category: "Maxtech",
        type: "Aditivos para hormigón",
        industry: "Construcción",
        image: "/images/products/maxtech/microfibra1.png",
        description: "Microfibra de polipropileno virgen",
        specs: ["Antifisuras", "0,6–1,8 kg/m³"],
        intro: "Microfibra de polipropileno 100% virgen refuerzo anti grietas y fisuras. Incrementa la impermeabilización.",
        longDescription: "Antifisuras: Mejora la resistencia al agrietamiento de las grietas no estructurales en la fase plástica del hormigón.\nImpermeabilidad: Mejora la impermeabilidad y es un material autoimpermeable rígido eficaz.\nEl rango de dosificación es de 0,6 a 1,8 kg/m3 y la resistencia al agrietamiento y a las filtraciones del hormigón suele ser de 0,9 kg/m3.",
        safetyInfo: "",
        documents: {
            HDT: "/documents/products/maxtech/microfiber-19/HDT MICRO FIBRA DE POLIPROPILENO.pdf",
            HDS: "/documents/products/maxtech/microfiber-19/HOJA DE DATOS DE SEGURIDAD MICRO FIBRA MAXTECH.pdf"
        }
    }
];

// Normaliza texto para buscar sin importar mayúsculas ni acentos ("hibrido" encuentra "HÍBRIDO")
export const normalizeText = (text = '') =>
    text.toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export const matchesSearch = (product, term) => {
    const query = normalizeText(term.trim());
    if (!query) return true;
    return [product.name, product.description, product.category, product.type, product.industry]
        .some(field => normalizeText(field).includes(query));
};
