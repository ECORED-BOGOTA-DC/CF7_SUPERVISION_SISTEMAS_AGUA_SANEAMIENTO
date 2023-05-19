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
      .col-lg-5
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

      .col-11.col-lg-10
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
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de coagulación
            p Las características del agua cruda determinan el mecanismo de coagulación que se debe utilizar, dentro de los cuales se puede encontrar según el RAS (2017): 

            ul.lista-ul--color.fa-ul2
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

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='alt')

      .py-3.py-md-4(titulo="Mecanismos de floculación")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de floculación

            p La Floculación es un proceso de aglutinación de partículas inducida por una agitación lenta de la suspensión coagulada. De acuerdo con el Ministerio de Vivienda, en su documento RAS (2017), en el proceso de floculación pueden emplearse: 

            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores hidráulicos: utilizan el cambio de dirección de flujo del agua, inducido por diferentes mecanismos para producir la turbulencia necesaria para promover la formación del floc y derivan su energía de la carga de velocidad que el líquido adquiere en su tránsito por un conducto (p.80). 
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores mecánicos: son aquellos que requieren de un equipo electromecánico para mover un agitador de paletas o álabes (p.81).
              li
                i.fas.fa-check-circle.color-vineta2
                P Floculadores hidromecánicos: utilizan la energía hidráulica a la entrada del floculador para mover una turbina de impulso similar a la rueda o turbina Pelton, la cual puede girar con baja cabeza hidráulica. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='alt')

      .py-3.py-md-4(titulo="Mecanismos de desinfección")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de desinfección

            p La desinfección es un proceso físico o químico que permite la eliminación o destrucción de los organismos patógenos presentes en el agua, luego se reconoce al desinfectante como la sustancia que tiene el poder de destruir microorganismos patógenos. De acuerdo con el Ministerio de vivienda (MINVIVIENDA), en su documento RAS (2017): 

            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta2
                P Independientemente del proceso que se realice, debe incluirse el proceso de desinfección del agua, de forma que se eliminen agentes microbiológicos que puedan afectar la salud de la población, dando cumplimiento a la normativa sobre calidad del agua en el país. (p.76).

              li
                i.fas.fa-check-circle.color-vineta2
                P Entre los procesos de desinfección que pueden realizarse está primordialmente la cloración, incluidos sus derivados, el dióxido de cloro, los hipocloritos y procedimientos como el de la cloraminación y complementarios se tienen el ozono, el yodo y los rayos ultravioleta (p.89).
        
          .col-md-4
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
                  a.boton.color-primario(href="https://www.youtube.com/embed/JBu6RQ1QMD0" target="_blank")
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
                  a.boton.color-primario(href="https://www.youtube.com/embed/JBu6RQ1QMD0" target="_blank")
                    span.texto-negro Ir a página
                    i.fas.fa-link.texto-negro

    .row.bg1-tema1.align-items-center.p-3.mb-5
      h4.texto-blanco.mb-0 Base normativa para el uso de sustancias químicas en potabilización de agua

    .row.mb-5
      p Es importante aclarar que el uso del insumo químico debe estar acorde a la normatividad aplicable en el momento de su requerimiento. Al Respecto:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
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
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='alt')

      .col-lg-6
        h5 ¿Qué es el SGA?
        p El SGA es un sistema de comunicación aplicable nacional e internacionalmente que permite armonizar el manejo y comunicación de los peligros asociados a las sustancias químicas con el fin de cuidar la salud humana y el medio ambiente.

        h5 ¿A qué aplica el SGA?
        p Dentro de las aplicaciones de esta clasificación, se puede encontrar dos usos que son de importancia para sistemas de potabilización:

        ul.lista-ul--color.lista-ul--separador
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

        ul.lista-ul--color.lista-ul--separador
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

      .col-lg-4
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

          .tarjta-negra.p-3(x="15%" y="61%" numero="+")
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
