export default {
  global: {
    componenteFormativo: 'Manejo de insumos químicos',
    descripcionCurso:
      'La potabilización de agua es indispensable al momento de consumo, pero su inadecuada utilización puede causar problemas en el ser humano, debido a los diferentes factores físicos, químicos y microbiológicos presentes en este proceso. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo de insumos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Almacenamiento de insumos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Preparación para el almacenamiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operación de la unidad de almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Condiciones de operación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planificación de la operación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Equipo de seguridad personal',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manejo de residuos en el almacenamiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Plan de contingencia',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Determinar las propiedades de las sustancias químicas para potabilización',
      referencia:
        'Grupo Global Ómnium. (2015). <i>La potabilización - Didáctica del Agua.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nq70X1TPRRA&t=5s',
    },
    {
      tema:
        'Determinar las propiedades de las sustancias químicas para potabilización',
      referencia:
        'Ministerio de Vivienda. (2010). <i>Reglamento técnico del sector de agua y saneamiento. Titulo C. Potabilización de agua.</i>',
      tipo: 'Libro',
      link: 'https://www.catorce6.com/images/legal/Titulo_C_Potabilizacion.pdf',
    },
    {
      tema: 'Hojas de seguridad de productos químicos',
      referencia:
        'Servicio nacional de aprendizaje (SENA). (2018). <i>Hoja de seguridad de bicarbonato de sodio. Centro de gestión industrial.</i>',
      tipo: 'Ficha',
      descarga: '/downloads/Hoja_de_seguridad_Bicarbonato_de_sodio.pdf',
    },
    {
      tema: 'Preparación para el almacenamiento',
      referencia:
        'Consejo Colombiano de Seguridad y el entonces Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (s.f.). <i>Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos.</i>',
      tipo: 'Guía',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/guias_ambientales_almacenam_transp_x_carretera_sust_quimicas_res_pelig.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'es el depósito temporal de residuos en un espacio físico definido y por un tiempo determinado, previo a su aprovechamiento y/o valorización, tratamiento y/o disposición final (Decreto 1076 de 2015).',
    },
    {
      termino: 'Embalaje',
      significado:
        'todo aquello que agrupa, contiene y protege debidamente los productos envasados, facilitando el manejo en las operaciones de transporte y almacenamiento e identifica su contenido (Decreto 1076 de 2015).',
    },
    {
      termino: 'Gestión interna',
      significado:
        'es la acción desarrollada por el Generador, que implica la cobertura, planeación e implementación de todas las actividades relacionadas con la minimización, generación, segregación, movimiento interno, almacenamiento y/o tratamiento de residuos peligrosos dentro de sus instalaciones (Decreto 351 de 2014).',
    },
    {
      termino: 'Gestión externa',
      significado:
        'es la acción desarrollada por el Gestor de Residuos Peligrosos, que implica la cobertura y planeación de todas las actividades relacionadas con la recolección, transporte, tratamiento, aprovechamiento y/o disposición final de residuos peligrosos fuera de las instalaciones del generador (Decreto 351 de 2014, 2014).',
    },
    {
      termino: 'Hoja de seguridad',
      significado:
        'documento que describe los riesgos de un material peligroso y suministra información sobre cómo se puede manipular, usar y almacenar el material con seguridad, que se elabora de acuerdo con lo estipulado en la Norma Técnica Colombiana NTC 4435. (Ministerio de Transporte, s.f.).',
    },
    {
      termino: 'Manejo Integral',
      significado:
        'es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o eliminación de los residuos o desechos sólidos. (Decreto 1076, 2015).',
    },
  ],
  referencias: [
    {
      referencia:
        'Administradora de Riesgos Laborales [ARL] SURA. (2018). <i>Sistema globalmente armonizado para la clasificación y etiquetado de productos químicos.</i>',
      link: 'https://www.arlsura.com/files/2018/Sistema-SGA-ARL.pdf',
    },
    {
      referencia:
        'Borrás, X. (2010). <i>Sustancias para el tratamiento de aguas para el consumo humano.</i>',
      link:
        'https://www.interempresas.net/Agua/Articulos/45745-Sustancias-para-el-tratamiento-de-aguas-para-el-consumo-humano.html',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad [CCS]. (2019). <i>Almacenamiento y compatibilidad de sustancias químicas.</i> [Artículo]. ',
      link:
        'https://ccs.org.co/portfolio/almacenamiento-y-compatibilidad-de-sustancias-quimicas/ ',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad [CCS] y Ministerio de Ambiente, Vivienda y Desarrollo Territorial [MAVDT]. (s.f.). </i>Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos.</i>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/guias_ambientales_almacenam_transp_x_carretera_sust_quimicas_res_pelig.pdf',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Presidencia de la República]. “Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera”. 31 de julio de 2002.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6101#:~:text=El%20presente%20decreto%20tiene%20por,y%20el%20medio%20ambiente%2C%20de',
    },
    {
      referencia:
        'Decreto 423 de 2006. [Alcaldía Mayor de Bogotá, D.C.]. “Por el cual se adopta el Plan Distrital para la Prevención y Atención de Emergencias para Bogotá D.C.”. 11 de octubre de 2006. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=21916&dt=S',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Ministerio de Ambiente y Desarrollo Sostenible. “por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral”. 30 de diciembre de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18718',
    },
    {
      referencia:
        'Decreto 351 de 2014. [Ministerio de Salud y Protección Social]. “Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades”. 19 de febrero de 2014.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755#:~:text=Es%20el%20documento%20mediante%20el,que%20trata%20el%20presente%20decreto.',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. “Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible”. 26 de mayo de 2015.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf',
    },
    {
      referencia:
        'Decreto 2157 de 2017. [Presidencia de la República]. “Por medio del cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco del artículo 42 de la Ley 1523 de 2012”. 20 de diciembre de 2017.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=199583 ',
    },
    {
      referencia:
        'Decreto 1496 de 2018. [Ministerio de Trabajo]. “Por el cual se crea Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos y se dictan otras disposiciones en materia de seguridad química”. 6 de agosto de 2018. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87910',
    },
    {
      referencia:
        'Instituto Distrital de Gestión de Riesgos y Cambio Climático (IDIGER). (2014). <i>Matriz para almacenamiento de sustancias peligrosas centro de reserva.</i> Autor.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Interior. (2002). <i>Manejo seguro de sustancias químicas.</i>',
      link:
        'https://www.mininterior.gov.co/wp-content/uploads/2022/10/MANUAL-Manejo-seguro-de-productos-quimicos.pdf',
    },
    {
      referencia: 'Ministerio de Transporte. (s.f.). <i>Norma NTC 4335.</i>',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC4435.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2015). <i>Libro púrpura de las naciones unidas.</i> Autor.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para el Desarrollo Industrial [ONUDI]. (2020). <i>Guía para la elaboración de fichas de datos de seguridad (FDS). Según el sistema globalmente armonizado de clasificación y etiquetado de productos químicos (SGA).</i> ISBN 978-058-598529-6. Editores gráficos Colombia S.A.S.',
      link: '',
    },
    {
      referencia:
        'Sociedad Americana de Química. (2002). <i>Seguridad en los laboratorios químicos académicos.</i>',
      link:
        'https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/seguridad-en-los-laboratorios-quu00edmicos-acadu00e9mico.pdf',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
