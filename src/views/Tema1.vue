<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo de insumos químicos

    .row.justify-content-center.align-items-center.mb-5
      p El proceso de potabilización de agua incluye el uso de insumos químicos que por sus características son requeridos como parte del proceso para controlar o adecuar las características físicas, químicas y microbiológicas del agua que será objeto de consumo humano; sin embargo, un uso inadecuado de estos insumos puede generar que se convierta en otro agente de contaminación o que no logre cumplir su función en el proceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='alt') 

      .col-lg-7
        p La efectividad de cada insumo químico se ve afectada por diferentes factores entre los que se encuentran el modo de uso y las condiciones de almacenamiento.

        .cajon.color-gris.p-3
          p Teniendo el personal calificado los insumos se van a aplicar de forma correcta, entonces para mantener la efectividad se deben establecer estrategias y actividades enfocadas en el correcto almacenamiento de cada insumo y en general a la operación adecuada de toda la unidad de almacenamiento.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
       h2 1.1 Almacenamiento de insumos

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/img2.png', alt='alt')

      .col-11
        .tarjeta.tarjeta-gris.p-3 
          p Asegurarse que los productos químicos son almacenados con todos sus elementos de seguridad es muy importante en un proceso de potabilización. Se debe garantizar que se contempla la compatibilidad entre sustancias, las cuales cuentan con las hojas de seguridad de los insumos y se siguen los protocolos o normatividad aplicable. Al respecto se deben tener en cuenta los siguientes aspectos:

    .row.bg1-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Determinar las propiedades de las sustancias químicas para potabilización

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Durante el proceso de potabilización es probable que se utilicen diferentes sustancias químicas como ayuda a los procesos físicos con el fin de garantizar que el agua cumpla con los parámetros requeridos, según la normatividad para consumo humano.

      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      p De acuerdo con Borrás (2010), en su artículo sustancias para el tratamiento de aguas para el consumo humano, define: 

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop').img_4_5_6-tema1
        .tarjeta.tarjeta--gris
          .p-3
            h4 Coagulantes
            p Neutralizan la carga de los coloides generalmente electronegativos, presentes en el agua, formando un precipitado. Los coagulantes tradicionales son las sales de aluminio y de hierro.
      
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop').img_4_5_6-tema1
        .tarjeta.tarjeta--gris
          .p-3
            h4 Floculantes
            p Son sustancias químicas que aglutina sólidos en suspensión en el agua, provocando su precipitación, con lo que se la aclara, se eliminan turbiedades y minerales no recomendables para el consumo humano, como por ejemplo el hierro, que da al agua un sabor desagradable característico y un aspecto rojizo. Un floculante muy común es el alumbre, un grupo de compuestos químicos formado por dos sales combinadas en proporciones definidas: sulfato de aluminio y sulfato de amonio

      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop').img_4_5_6-tema1
        .tarjeta.tarjeta--gris
          .p-3
            h4 Desinfectantes
            p Que se añaden al final del proceso, son biocidas que sirven para eliminar los agentes patógenos (bacterias, etc.) que pudiera haber presentes en el agua. En cuanto a los desinfectantes, el más utilizado es el cloro, pero también es usado el bromo y el yodo.

    .row.justify-content-center.align-items-center.mb-5
      p Ahora, de acuerdo a las sustancias mencionadas, conozcamos los mecanismos de estas:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Mecanismos de coagulación")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de coagulación
            p Las características del agua cruda determinan el mecanismo de coagulación que se debe utilizar, dentro de los cuales se puede encontrar según el RAS (2017): 

            ul.lista-ul--color.fa-ul2.ps-3
              li
                i.fas.fa-check-circle.color-vineta2
                P #[b Adsorción y neutralización de carga:] se basa en la acción de la energía electroquímica sobre los coloides, al existir una acción electrostática entre el coagulante y las partículas en suspensión.
              li
                i.fas.fa-check-circle.color-vineta2
                P #[b Barrido:] se presenta cuando se adicionan cantidades elevadas de sales metálicas como el aluminio o el hierro, que exceden el límite de solubilidad del compuesto en el agua. Esto ocasiona la precipitación rápida del hidróxido metálico, como Al2(OH)3 o Fe (OH)3, que forma una masa esponjosa. Las partículas coloidales son removidas al quedar atrapadas en el precipitado.
              li
                i.fas.fa-check-circle.color-vineta2
                P #[b Puente químico:] se presenta cuando las cadenas poliméricas del coagulante se entrelazan con las partículas coloidales y se unen entre sí.

              P Una mezcla de los mecanismos anteriores (p.15).

          .col-10.col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='alt')

      .py-3.py-md-4(titulo="Mecanismos de floculación")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de floculación

            p La Floculación es un proceso de aglutinación de partículas inducida por una agitación lenta de la suspensión coagulada. De acuerdo con el Ministerio de Vivienda, en su documento RAS (2017), en el proceso de floculación pueden emplearse: 

            ul.lista-ul--color.fa-ul2.ps-3
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores hidráulicos: utilizan el cambio de dirección de flujo del agua, inducido por diferentes mecanismos para producir la turbulencia necesaria para promover la formación del floc y derivan su energía de la carga de velocidad que el líquido adquiere en su tránsito por un conducto (p.80). 
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores mecánicos: son aquellos que requieren de un equipo electromecánico para mover un agitador de paletas o álabes (p.81).
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores hidromecánicos: utilizan la energía hidráulica a la entrada del floculador para mover una turbina de impulso similar a la rueda o turbina Pelton, la cual puede girar con baja cabeza hidráulica. 
        
          .col-10.col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='alt')

      .py-3.py-md-4(titulo="Mecanismos de desinfección")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de desinfección

            p La desinfección es un proceso físico o químico que permite la eliminación o destrucción de los organismos patógenos presentes en el agua, luego se reconoce al desinfectante como la sustancia que tiene el poder de destruir microorganismos patógenos. De acuerdo con el Ministerio de vivienda (MINVIVIENDA), en su documento RAS (2017): 

            ul.lista-ul--color.fa-ul2.ps-3
              li
                i.fas.fa-check-circle.color-vineta2
                P Independientemente del proceso que se realice, debe incluirse el proceso de desinfección del agua, de forma que se eliminen agentes microbiológicos que puedan afectar la salud de la población, dando cumplimiento a la normativa sobre calidad del agua en el país. (p.76).

              li
                i.fas.fa-check-circle.color-vineta2
                P Entre los procesos de desinfección que pueden realizarse está primordialmente la cloración, incluidos sus derivados, el dióxido de cloro, los hipocloritos y procedimientos como el de la cloraminación y complementarios se tienen el ozono, el yodo y los rayos ultravioleta (p.89).
        
          .col-10.col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='alt')


    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.texto-blanco Título C - Sistemas de potabilización
                  p.texto-blanco Consulte la página del Ministerio de Vivienda donde encontrará el Reglamento Técnico del Sector de Agua y Saneamiento. Título C. Potabilización de agua. Con esto aclarará un poco más la temática relacionada con los manuales del reglamento técnico. Recuerde que también se encuentra en los materiales complementarios.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.catorce6.com/images/legal/Titulo_C_Potabilizacion.pdf" target="_blank")
                    span.texto-negro Ir a página
                    i.fas.fa-link.texto-negro

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.texto-blanco La potabilización - Didáctica del agua
                  p.texto-blanco Para aclarar mejor el uso de los diferentes mecanismos químicos, lo invitamos a visualizar el video “La potabilización - Didáctica del agua”. Recuerde que también se encuentra en los materiales complementarios.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.youtube.com/watch?v=nq70X1TPRRA&t=5s&ab_channel=GlobalOmnium" target="_blank")
                    span.texto-negro Ir a página
                    i.fas.fa-link.texto-negro

    .row.bg1-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Base normativa para el uso de sustancias químicas en potabilización de agua

    .row.mb-5
      p Es importante aclarar que el uso del insumo químico debe estar acorde a la normatividad aplicable en el momento de su requerimiento. Al Respecto:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='alt')

      .col-lg-7
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Resolución 330 de 2017")
            p En Colombia se cuenta con el Reglamento técnico del sector Agua potable y Saneamiento (RAS) bajo la Resolución 330 de 2017, en el cual en su título C aborda los sistemas de potabilización y con Normas Técnicas Colombianas como la NTC  531 Productos químicos para uso industrial. Sulfato de Aluminio; NTC 925 Productos químicos para uso industrial. Cloro Líquido; NTC 1398 Productos químicos para uso industrial. Cal viva y Cal hidratada para el tratamiento de agua para consumo humano; NTC 1847 Productos químicos para uso industrial. Hipocloritos utilizados en el tratamiento de aguas, entre otras.
          
          .row(numero="2" titulo="Resolución 2115 de 2007")
            p También se encuentra vigente la Resolución 2115 de 2007 del ministerio de protección social y el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano, que en su artículo 9° específica sobre características químicas de otras sustancias utilizadas en la potabilización.

          .row(numero="3" titulo="Decreto 1496 de 2018")
            p Así como el Decreto 1496 de 2018 del Ministerio de trabajo, por el cual se adopta el sistema globalmente armonizado de clasificación y etiquetado de productos químicos y se dictan otras disposiciones en materia de seguridad química.   

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-4
        .row 
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='alt')

          .col-lg-9.mt-5
            p Siempre se aconseja hacer una revisión de la normatividad aplicable para la zona o región donde se va a hacer las actividades de potabilización.

            h5 Tenga en cuenta:

            p Es de vital importancia reconocer la clasificación de las sustancias químicas debido a que algunas de ellas presentan un grado de peligrosidad, si no se sabe cuáles son, se pueden presentar accidentes. 

    .row.bg2-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Clasificación de sustancias químicas

    .row.justify-content-center.align-items-center.mb-5
      .bgdegrade.p-4
        .row
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='alt')
          .col-lg-7
            p De acuerdo con #[b la Sociedad Americana de Química (2002)], en su libro seguridad en los laboratorios químicos académicos: hay millones de sustancias químicas individuales y cada una de éstas tiene sus propias características de peligrosidad. Si se intenta prevenir accidentes cuando se trabaja con químicos en el laboratorio, se necesita conocer las características de peligrosidad de las sustancias químicas con las cuales se trabajará.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta-azul1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='alt')
          
        h2.text-center Productos químicos
        p.text-center Todo tipo de material de naturaleza orgánica o inorgánica, que puede estar presente como elemento o compuesto puro, o como la mezcla o combinación de los anteriores
      .col-md.tarjeta.tarjeta-azul2.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img16.svg', alt='alt')
          
        h2.text-center Productos químicos peligrosos
        p.text-center Materiales perjudiciales que, durante la fabricación, manejo, transporte, almacenamiento o uso, pueden generar o desprender polvos, humos, gases, líquidos, vapores o fibras infecciosas, irritantes, inflamables, explosivos, corrosivos, asfixiantes, tóxicos o de otra naturaleza peligrosa, o radiaciones ionizantes en cantidades que puedan afectar la salud de las personas que entran en contacto con éstas, o que causen daño material (Decreto 1609 de 2002).

    .row.bg3-tema1.align-items-center.p-3.mb-5
      h4.mb-0.texto-derecha Clasificación según su peligrosidad

    .row.mb-5
      p Este tipo de clasificación fue dada por el Sistema Globalmente Armonizado (SGA) adoptado para el Decreto 1496 del 2018 para Colombia.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='alt')

      .col-lg-6
        h5 ¿Qué es el SGA?
        p El SGA es un sistema de comunicación aplicable nacional e internacionalmente que permite armonizar el manejo y comunicación de los peligros asociados a las sustancias químicas con el fin de cuidar la salud humana y el medio ambiente.

        h5 ¿A qué aplica el SGA?
        p Dentro de las aplicaciones de esta clasificación, se puede encontrar dos usos que son de importancia para sistemas de potabilización:

        ul.lista-ul--color.lista-ul--separador.ps-3
          li
            i.fas.fa-check-circle.color-vineta2
            | Productos químicos usados en lugares de trabajo.
          li
            i.fas.fa-check-circle.color-vineta2
            | Productos químicos en la etapa de transporte (embalaje).
          li
            i.fas.fa-check-circle.color-vineta2
            | Residuos peligrosos.

        h5 ¿Cuáles son los elementos de un SGA?
        p Los elementos encontrados son:

        ul.lista-ul--color.lista-ul--separador.ps-3
          li
            i.fas.fa-check-circle.color-vineta2
            | Hojas de seguridad.
          li
            i.fas.fa-check-circle.color-vineta2
            | Etiquetas de sustancias.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h5 ¿Una sustancia solo puede tener asociado un peligro?
        p No, el uso de los pictogramas y esta clasificación no es excluyente, por el contrario, su objetivo es informar todos los peligros asociados a una sustancia química y estas pueden clasificar en diferentes tipos de peligros.

        h5 ¿Cómo se clasificarían las sustancias bajo el SGA?
        p De acuerdo con lo que se explicó anteriormente este sistema busca comunicar los peligros, luego las sustancias químicas podrían clasificarse por medio de los riesgos que generan en cuanto a su manipulación, almacenamiento o transporte. 

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img18.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-gris.p-3
        p Respecto al último interrogante sobre la clasificación de sustancias bajo SGA, se tiene en cuenta siempre el pictograma (Romboide rojo de información) y el peligro asociado; de acuerdo con la agencia de riesgos laborales (ARL) SURA (2018, pp.8-9), se pueden encontrar:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='alt')

          .tarjta-negra.p-3(x="9.4%" y="95.4%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias corrosivas
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0 Corrosivo para los metales. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco Corrosivo para la piel o los ojos (lesiones oculares graves).

          .tarjta-negra.p-3(x="19.5%" y="61%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias explosivas
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Explosivo.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sustancia o mezclas que reaccionan espontáneamente.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Peróxidos orgánicos.

          .tarjta-negra.p-3(x="29.8%" y="95.4%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias tóxicas
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Toxicidad aguda.

          .tarjta-negra.p-3(x="40%" y="61%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias inflamables
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas inflamable.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Aerosol inflamable. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Líquido o sólido inflamable.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sustancia o mezcla que reacciona espontáneamente.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Líquido o sólido pirofórico.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sustancia o mezcla que experimenta calentamiento espontáneo. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sustancia o mezcla que, en contacto con el agua, desprende gases inflamables.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Peróxidos orgánicos.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Explosivos insensibilizados.

          .tarjta-negra.p-3(x="50%" y="95.4%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias irritantes
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Irritante para la piel. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Irritante para los ojos. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sensibilización cutánea. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Toxicidad aguda (nocivo).
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Toxicidad sistémica específica de órganos diana tras una exposición única (irritación/somnolencia o vértigo).
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Peligro para la capa de ozono.

          .tarjta-negra.p-3(x="60.3%" y="61%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias comburentes
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas comburente. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Aerosol comburente. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sólido comburente.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Líquido comburente.

          .tarjta-negra.p-3(x="70.2%" y="95.4%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias cancerígenas
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Sensibilización respiratoria. 
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Mutagenicidad.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Carcinogenicidad.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Toxicidad para la reproducción.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Toxicidad sistémica específica de órganos diana.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Peligro por aspiración.

          .tarjta-negra.p-3(x="80.3%" y="61%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias comprimidas
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas comprimido.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas licuado.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas licuado refrigerado.
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Gas disuelto.

          .tarjta-negra.p-3(x="90.5%" y="95.4%" numero="+")
            .h5.texto-blanco.mb-2 Sustancias que afectan al medio ambiente
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                p.texto-blanco.mb-0  Peligro para el medio ambiente acuático (agudo y crónico).

    .row.bg4-tema1.align-items-center.p-3.mb-5
      h4.mb-0.texto-derecha2 Clasificación según las condiciones especiales para el transporte

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/img20.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Observe el siguiente video

      .col-lg-10
        figure.mb-lg-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .l-p.mb-3
        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img21.svg', alt='alt')
            .col-lg-10
              h5 Clase 1
              p Corresponde a explosivos, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3966 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img22.svg', alt='alt')
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', alt='alt')
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img24.svg', alt='alt')
            
            .col-lg-6
              h5 Clase 2
              p Corresponde a gases, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 2880 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img25.svg', alt='alt')
            .col-6.col-lg-2.mt-2  
              figure
                img(src='@/assets/curso/temas/tema1/img26.svg', alt='alt')

            .col-lg-8
              h5 Clase 3
              p Corresponde a líquidos inflamables, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 2801 elaborada por el Organismo Nacional de Normalización (ICONTEC). 

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2.mt-3      
              figure
                img(src='@/assets/curso/temas/tema1/img27.svg', alt='alt')
            .col-6.col-lg-2.mt-3      
              figure
                img(src='@/assets/curso/temas/tema1/img28.svg', alt='alt')
            .col-6.col-lg-2.mt-3    
              figure
                img(src='@/assets/curso/temas/tema1/img29.svg', alt='alt')
            
            .col-lg-6
              h5 Clase 4
              p Corresponde a sólidos inflamables; sustancias que presentan riesgo de combustión espontánea; sustancias que en contacto con el agua desprenden gases inflamables, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3967 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img30.svg', alt='alt')
            .col-6.col-lg-2.mt-2  
              figure
                img(src='@/assets/curso/temas/tema1/img31.svg', alt='alt')

            .col-lg-8
              h5 Clase 5
              p Corresponde a sustancias comburentes y peróxidos orgánicos, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3968 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2.mt-2      
              figure
                img(src='@/assets/curso/temas/tema1/img32.svg', alt='alt')
            .col-6.col-lg-2.mt-2  
              figure
                img(src='@/assets/curso/temas/tema1/img33.svg', alt='alt')

            .col-lg-8
              h5 Clase 6
              p Corresponde a sustancias tóxicas e infecciosas, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3969 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img34.svg', alt='alt')
            .col-lg-10
              h5 Clase 7
              p Corresponde a materiales radiactivos, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3970 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='alt')
            .col-lg-10
              h5 Clase 8
              p Corresponde a sustancias corrosivas, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3971 elaborada por el Organismo Nacional de Normalización (ICONTEC).

        .l-p.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img36.svg', alt='alt')
            .col-lg-10
              h5 Clase 9
              p Corresponde a sustancias peligrosas varias, la Norma Técnica Colombiana que la identifica y condiciona su transporte y uso es la NTC 3972 elaborada por el Organismo Nacional de Normalización (ICONTEC).

    .row.bg2-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Hojas de seguridad de productos químicos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img37.svg', alt='alt')

      .col-lg-8
        p Son instrumentos documentales que permiten comunicar los peligros que ofrecen los productos químicos, tanto para las personas, como para las instalaciones y el ambiente; además de ello, brinda o informa sobre las precauciones requeridas y las medidas que se pueden seguir en caso de emergencia.

        p Internacionalmente se conoce como Material Safety Data Sheet por sus siglas en inglés MSDS, aunque es relevante mencionar que el contenido de las hojas de seguridad es igual en cualquier país, incluyendo a Colombia. 

        .cajon.color-gris.p-4.mb-4
          p.mb-0 Estas hojas de seguridad las deben producir los fabricantes de cada producto químico o mezcla de sustancias químicas, en Colombia estas funciones y el uso de las hojas de seguridad se encuentra regulado por el Decreto 1609 de 2002, el cual direcciona el transporte de mercancías peligrosas en Colombia y la Norma Técnica Colombiana (NTC) 4435, la cual identifica las 16 secciones que debe contener las hojas de seguridad, referente a cuatro temas elementales:

        ul.lista-ul--color.lista-ul--separador.ps-3
          li
            i.fas.fa-check-circle.color-vineta2
            | Identificación de la sustancia (sección 1 a la sección 3).
          li
            i.fas.fa-check-circle.color-vineta2
            | Emergencias (sección 4 a la sección 6).
          li
            i.fas.fa-check-circle.color-vineta2
            | Manejo y precauciones (sección 7 a la sección 10).
          li
            i.fas.fa-check-circle.color-vineta2
            | Información complementaria (sección 11 a la sección 16).

    .row.justify-content-center.align-items-center.mb-5
      p Para el almacenamiento la hoja de seguridad permite no solo identificar las características requeridas por la sustancia, sino también las incompatibilidades que se pueden dar entre sustancias y sus peligros.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.texto-blanco  Ejemplo hoja de seguridad bicarbonato de sodio
                  p.texto-blanco A través del siguiente documento podrá observar un ejemplo SENA sobre una hoja de seguridad bicarbonato de sodio. Recuerde que también lo puede encontrar en los materiales complementarios.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Hoja_de_seguridad_Bicarbonato_de_sodio.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5
      .bgdegrade.p-4
        .row
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='alt')
          .col-lg-7
            p De acuerdo con la Sociedad Americana de Química (2002), en su libro “Seguridad en los Laboratorios Químicos Académicos”, se brindan unas aclaraciones que pueden ser útiles al momento de interpretar las hojas de seguridad (en algunas hojas de seguridad en especial las que vienen de una empresa internacional):

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-contenido.mt-5
          .row(numero="1" titulo="Número de registro CAS")
            p El Servicio de Chemical Abstracts (CAS) de la Sociedad Americana de Química (ACS) le asigna un número único a cada sustancia química conocida, descubierta o sintetizada, llamado el número de registro CAS.

          .row(numero="2" titulo="Límite de Techo (Ceiling limit)")
            p Algunas sustancias químicas muy peligrosas se caracterizan por un límite de techo además de su límite permitido de exposición (PEL) y el valor límite del umbral (TLV). El límite de techo es una concentración en partes por millón (ppm) o miligramos por metro cúbico (mg/m3) que no deben ser excedidos en un período específico de tiempo, generalmente 15 minutos.

          .row(numero="3" titulo="Nombre químico")
            p Generalmente se proporciona el nombre dado por la Unión Internacional de Química Pura y Aplicada (IUPAC) o el número químico CAS, pero se puede dar un nombre común para la sustancia química (como, por ejemplo: glicol de etileno es aceptado en vez de su nombre IUPAC correcto; 1,2-etanodiol).

          .row(numero="4" titulo="Composición de mezclas")
            p Incluye todos los componentes peligrosos en concentraciones mayores de 1% y todos los cancerígenos en concentraciones mayores a 0.1%.
            
          .row(numero="5" titulo="Medidas de control")
            p Da una lista de ropa protectora, guantes y equipo protector respiratorio. Si el material debe ser manipulado en una capilla o extractor de laboratorio o con ventilación extra, todas estas recomendaciones vienen dadas en esta sección.

          .row(numero="6" titulo="Primeros auxilios")
            p Describe los procedimientos de emergencia para primeros auxilios. Debe asegurarse que pueda llevar a cabo los primeros auxilios en forma apropiada, de lo contrario, permite que una persona capacitada pueda proveer la ayuda necesaria. Mientras tanto, puede llamar a la ambulancia si es necesario (p.14).  

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img38.svg', alt='alt')        

    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-gris.p-4
        .row.justify-content-center.align-items-center
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='alt')(style="width:85%")

          .col-lg-10
            p.mb-0 La base normativa para las etiquetas de seguridad de los productos químicos también se da a través del Decreto 1496 de 2018, por el cual se adopta el Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos y se dictan otras disposiciones en materia de seguridad química. 

    .row.bg5-tema1.align-items-center.p-1.mb-5
      h3.texto-derecha3.mb-4 Etiquetas de seguridad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 1.
          span Ejemplo de etiqueta de producto químico
        
        figure
          img(src='@/assets/curso/temas/tema1/img40.svg', alt='alt')
          figcaption.mb-5
            p.mb-0 #[b Fuente:] MinInterior (2020, p. 4)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .tarjeta-gris2.p-4.p-lg-0.px-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img41.svg', alt='alt').img41-tm1

            .col-lg-10
              p.mb-0 Se puede definir la etiqueta como: el conjunto de elementos de información escritos, impresos o gráficos relativos a un producto peligroso, elegidos en relación a su pertenencia para el sector que lo trate, que se adhieren o se imprimen en el recipiente que contiene el producto o en su embalaje exterior” (Naciones Unidas, 2015, p.6). 

    .row.bg2-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Compatibilidad de sustancias químicas

    .row.mb-5
      p Toda sustancia química y/o residuo peligroso deben ser manipulados con especial cuidado, sin subestimar la peligrosidad tanto de la sustancia o el residuo como de la actividad misma. Es indispensable conocer sus características, así como las normas de seguridad y protección ambiental para su almacenamiento y transporte. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img42.svg', alt='alt')

      .col-lg-7
        p En las actividades de almacenamiento una regla básica es no almacenar juntas sustancias que sean incompatibles a fin de minimizar los riesgos de incendio, explosión o contaminación.

        .cajon.color-gris.p-4
          p.mb-0 Para cumplir con esa regla se debe estudiar a profundidad las fichas de seguridad de las sustancias y según las características propias de cada sustancia identificar cómo sería su correcto almacenamiento, guiándose a su vez de un instrumento que se le conoce como matriz de compatibilidad para productos químicos, la cual se observa a continuación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .titulo-sexto.color-secundario.mb-5
          h5 Tabla 1.
          span Ejemplo de Tabla de compatibilidad para almacenamiento de productos químicos

        figure
          img(src='@/assets/curso/temas/tema1/img43.svg', alt='alt')
          figcaption.mt-3
            p.mb-0 #[b Fuente:] IDIGER (2014)

    .bg6-tema1
      .row.mb-5
        p Este documento debe permanecer en la entrada del lugar donde se van a almacenar las sustancias químicas y para poder leerla adecuadamente se debe seguir los siguientes lineamientos:

      .row.justify-content-center.align-items-center.mb-5
        .col-7.col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img44.svg', alt='alt')

        .col-lg-8
          .row
            .col-3.col-lg-1
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img45.svg', alt='alt')
            .col-lg-11
              p La matriz se usa cruzando las diferentes clases de riesgo identificadas.      

            .l-p.mb-3
            .col-3.col-lg-1
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img46.svg', alt='alt')
            .col-lg-11
              p Puede contar con tres colores dentro de los cuadros de cruce (verde, amarillo y rojo). La lectura de esos colores es:

              ul.lista-ul--color.fa-ul2.ps-lg-4
                li
                  i.fas.fa-check-circle.color-vineta2
                  p.mb-0 #[b Verde:] cuando se pueden almacenar juntos, verificar reactividad individual utilizando las MSDS.  
                li
                  i.fas.fa-check-circle.color-vineta2
                  p.mb-0 #[b Amarillo:] precaución posibles restricciones. Revisar las incompatibilidades individuales utilizando las MSDS, pueden ser incompatibles o pueden requerirse condiciones específicas.  
                li
                  i.fas.fa-check-circle.color-vineta2
                  p.mb-0 #[b Rojo:] se requiere almacenar por separado, son incompatibles.          

            .l-p.mb-3
            .col-3.col-lg-1
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img47.svg', alt='alt')
            .col-lg-11
              p Algunas cuentan con números dentro de las casillas de colores que implican consideraciones especiales.     

            .l-p.mb-3
            .col-3.col-lg-1
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img48.svg', alt='alt')
            .col-lg-11
              p El fundamento de las matrices de compatibilidad es la misma para toda organización; sin embargo, es relevante mencionar que no se encuentra estandarizada a nivel nacional, así que podrá encontrar matrices que tienen en cuenta los dos tipos de clasificación o matrices que solo contemplan la clasificación para transporte bajo el Decreto 1609 de 2002.    

            .l-p.mb-3
            .col-3.col-lg-1
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img49.svg', alt='alt')
            .col-lg-11.mb-5
              p La lectura de la matriz se hace cruzando la característica principal de cada sustancia: suponga que va a almacenar una sustancia #2 pero en el lugar de almacenamiento ya tiene una sustancia #1, luego lo que debe hacer es tomar la matriz, ubicar la clasificación de la sustancia #1 y #2 y ver qué color tienen el cuadro que cruza las dos sustancias. Observe el siguiente ejemplo:  


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .titulo-sexto.color-secundario.mb-5
          h5 Tabla 2.
          span Ejemplo de correlación en la matriz

        figure
          img(src='@/assets/curso/temas/tema1/img50.svg', alt='alt')
          figcaption.mt-3
            p.mb-0 #[b Fuente:] IDIGER (2014)      

    .row.mb-5
      p En este caso se podría deducir que es compatible y se pueden guardar o almacenar juntos; sin embargo, observe este otro ejemplo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .titulo-sexto.color-secundario.mb-5
          h5 Tabla 3.
          span Ejemplo de correlación incompatibles en la matriz

        figure
          img(src='@/assets/curso/temas/tema1/img51.svg', alt='alt')
          figcaption.mt-3
            p.mb-0 #[b Fuente:] IDIGER (2014) 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
       h2 1.2 Preparación para el almacenamiento

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/img52.png', alt='alt')

      .col-11
        .tarjeta.tarjeta-gris.p-3 
          p Después de haber analizado todos los elementos anteriormente mencionados, el siguiente paso es preparar el almacenamiento de las sustancias o insumos; al respecto, el Consejo Colombiano de Seguridad (CCS) (2019), en el artículo almacenamiento y compatibilidad de sustancias químicas menciona los siguientes criterios mínimos para tener en cuenta:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img53.svg', alt='alt')(style="width:80%")

            .col-md-10
              h4 Comprobar que están adecuadamente etiquetados
              p En la etiqueta es donde está la primera información sobre los peligros de los productos químicos. Brinde información respecto a los efectos a la salud, el ambiente y sobre cuáles son los elementos de protección personal necesarios.
          
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4.texto-izq Disponer de su ficha de datos de seguridad (FDS) u hoja de seguridad
              p.texto-izq Cuando se manipule productos químicos en el ambiente laboral se debe contar con las MSDS de dichos productos. 
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img54.svg', alt='alt')(style="width:80%")
              
          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img55.svg', alt='alt')(style="width:80%")

            .col-md-10
              h4 No guardar los productos químicos en recipientes abiertos
              p Los envases adecuados son aquellos que pueden cerrarse después de utilizarse o al quedar vacíos. Con esto se evita la liberación no deseada de productos.
          
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4.texto-izq Tener un registro actualizado
              p.texto-izq Llevar un registro actualizado de la recepción de los productos que permita evitar su envejecimiento y posible descomposición.

            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img56.svg', alt='alt')(style="width:80%")

          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img57.svg', alt='alt')(style="width:80%")

            .col-md-10
              h4 Clasificar los productos por su peligro
              p Agrupar y clasificar los productos por su peligro respetando las restricciones de almacenamientos conjuntos de productos incompatibles, así como las cantidades máximas recomendadas por tipo de depósito. 
          
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4.texto-izq Prever los posibles accidentes que puedan dar lugar a derrames
              p.texto-izq Incluso lo que cause salpicaduras/goteos que pueden producirse durante la manipulación rutinaria. Además de evitar la contaminación, también se evita que entren en contacto sustancias que reaccionan entre sí. Por ejemplo, para evitar que ácidos y bases entren en contacto, deben instalarse bandejas, cubas de retención o armarios para corrosivos que tengan la capacidad de retener derrames que pudieran producirse ante una fuga o rotura de envase.
            .col-md-2


          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img58.svg', alt='alt')(style="width:80%")

            .col-md-10
              h4 Limitar la cantidad de productos a almacenar
              p Hacerlo a la mínima cantidad posible para poder desarrollar cómodamente el trabajo del día a día. Un control de entradas y salidas facilitará su correcta gestión.
          
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4.texto-izq Disponer de una buena ventilación en las zonas de almacenamiento
              p.texto-izq Realizarlo especialmente donde se manipulen sustancias tóxicas o inflamables es fundamental. Además de la protección de los trabajadores frente a estas atmósferas peligrosas, la ausencia de vapores inflamables es una medida básica para evitar incendios y explosiones.
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img59.svg', alt='alt')(style="width:80%")

          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img60.svg', alt='alt')(style="width:80%")

            .col-md-10
              h4 Realizar ordenamiento de sustancias
              p Adoptar procedimientos de orden y limpieza y comprobar que son seguidos por quienes manipulan las sustancias.
          
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4.texto-izq Prever los cambios bruscos de temperatura
              p.texto-izq Existen productos como los aceites o las pinturas a los que les afectan las temperaturas extremas, alterando su viscosidad para procesos posteriores o incluso su calidad. En estos casos se debe prever un almacenamiento a temperatura controlada (almacenes o contenedores aislados, cámaras de calentamiento, mantas calefactoras), que además son eficientes energéticamente.
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img61.svg', alt='alt')(style="width:80%")

          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img62.svg', alt='alt')(style="width:80%")

            .col-md-10
              h3 Formar e informar sobre los peligros
              p Hacerlo a quienes manipulan las sustancias sobre los peligros del almacenamiento de productos, cómo prevenirlos y cómo protegerse.


    .row.bg5-tema1.align-items-center.p-1.mb-5
      h3.texto-derecha3.mb-4 Unidad de almacenamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img63.svg', alt='alt')

      .col-lg-7
        .cajon.color-gris.p-4
          p.mb-0 El Consejo Colombiano de Seguridad (CCS) y el entonces Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) (s.f.) generaron las Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos; aunque fue a gran escala, sus consideraciones son pertinentes para tener en cuenta en el momento del almacenamiento, destacando:

    .tarjeta.tarjeta--gris.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Ubicación
            p Idealmente todo lugar de almacenamiento de sustancias y residuos peligrosos debe estar alejado de zonas densamente pobladas, de fuentes de captación de agua potable, de áreas inundables, de posibles fuentes externas de peligro y de fácil acceso en caso de accidentes (p.11).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img64.svg', alt='alt')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img65.svg', alt='alt')

          .col-md-6.mb-4.mb-md-0
            h4 Diseño
            p La bodega debe ser diseñada de tal manera que permita la separación de materiales incompatibles por medio de edificios o áreas separadas, muros cortafuego u otras precauciones aceptables, así como también permitir movimientos y manejo seguro de las sustancias y residuos peligrosos; debe existir espacio suficiente para las condiciones de trabajo y permitir el acceso libre por varios costados en caso de emergencia.

            p El diseño de la bodega debe atender a la naturaleza de los materiales a ser almacenados (p.12).

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Puertas
            p El número de puertas de acceso de las mercancías debe ser el mínimo necesario para una operación de almacenamiento eficiente (p.13).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img66.svg', alt='alt')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img67.svg', alt='alt')

          .col-md-6.mb-4.mb-md-0
            h4 Piso
            p Debe ser impermeable para evitar infiltración de contaminantes y resistente a las sustancias y/o residuos que se almacenen. Debe ser liso sin ser resbaloso y libre de grietas que dificultan su limpieza (p.14). 

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Techos
            p Deben estar diseñados de tal forma que no admitan el ingreso de agua lluvia a las instalaciones, pero que permitan la salida del humo y el calor en caso de un incendio. Esto debido a que la rápida liberación del humo y el calor mejorará la visibilidad de la fuente de fuego y retardará su dispersión lateral (p.15).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img68.svg', alt='alt')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img69.svg', alt='alt')

          .col-md-6.mb-4.mb-md-0
            h4 Ventilación
            p La bodega debe tener óptima ventilación natural o forzada dependiendo de las sustancias peligrosas almacenadas y la necesidad de proveer condiciones confortables de trabajo (p.16).

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Equipos eléctricos e iluminación
            p Cuando las operaciones se realicen solo durante el día y la iluminación natural sea adecuada y suficiente, no será necesario instalar iluminación artificial. En los casos en que la iluminación natural es inadecuada, puede ser posible mejorar esta situación mediante cambios sencillos, como por ejemplo instalando tejas transparentes en la cubierta, Si no existe otra opción que usar energía artificial, garantizar que se haga bajo directrices técnicas que no genere un riesgo mayor (p.16).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img70.svg', alt='alt')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img71.svg', alt='alt')

          .col-md-6.mb-4.mb-md-0
            h4 Protección contra relámpagos
            p Toda bodega que almacene materiales inflamables debe considerar en el diseño la instalación de equipos de protección contra relámpagos, como por ejemplo pararrayos (p.18).

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Señalización
            p La señalización tiene por objeto establecer colores y señales normalizadas que adviertan a los trabajadores la presencia de un riesgo o la existencia de una prohibición u obligación, con el fin de prevenir accidentes que afecten la salud o el medio ambiente (p.18).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img70.svg', alt='alt')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img71.svg', alt='alt')

          .col-md-6.mb-4.mb-md-0
            h4 Dispositivos de detección de fuego y sistemas de respuesta
            p Las medidas de seguridad pueden variar según la localización de la bodega particularmente si se trata de lugares aislados o de lugares que forman parte de un complejo de almacenaje. Con respecto a los límites la bodega debe estar rodeada por una cerca o muralla protectora que debe mantenerse en buen estado, debe contar con sistemas para incendios, robos, fugas, rupturas, explosiones, terremotos y cualquier otra amenaza que se identifique (p.21).

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.texto-blanco Guías ambientales de almacenamiento y transporte 
                  p.texto-blanco Para visualizar las características adicionales, se invita a consultar las “Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos”. Recuerde que también se encuentra en los materiales complementarios.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.minambiente.gov.co/wp-content/uploads/2021/10/guias_ambientales_almacenam_transp_x_carretera_sust_quimicas_res_pelig.pdf" target="_blank")
                    span.texto-negro Ir a página
                    i.fas.fa-link.texto-negro


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
