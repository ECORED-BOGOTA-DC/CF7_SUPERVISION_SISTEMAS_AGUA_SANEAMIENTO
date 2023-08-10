<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operación de la unidad de almacenamiento

    .row.justify-content-center.align-items-center   
      figure
        img(src='@/assets/curso/temas/tema2/img1.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center
      .col-10.bg1-tema2
        p.p-4 Los procedimientos de operación de la unidad de almacenamiento, tanto de sustancias químicas como de residuos peligrosos van encaminados a mantener bajo un control de por lo menos las siguientes actividades, de acuerdo con el Consejo Colombiano de Seguridad y el entonces Ministerio de Ambiente, Vivienda y Desarrollo Territorial (s.f.): 

    .row.justify-content-center.align-items-center.mt-5
      .col-10.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Imágen decorativa')

      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2

          li.l-p
            i.fas.fa-check-circle
            | Clasificación, etiquetado y rotulado de sustancias o residuos peligrosos. 

          li.l-p
            i.fas.fa-check-circle
            | Transporte de sustancias y residuos peligrosos. Inspección de vehículos de transporte de sustancias o residuos peligrosos. 

          li.l-p
            i.fas.fa-check-circle
            | Carga y descarga de sustancias químicas peligrosas. 
          
          li.l-p
            i.fas.fa-check-circle
            | Almacenamiento de materias primas y productos químicos peligrosos. 

          li.l-p
            i.fas.fa-check-circle
            | Control de inventario de sustancias químicas peligrosas. 

          li.l-p
            i.fas.fa-check-circle
            | Manipulación de sustancias químicas.

          li.l-p
            i.fas.fa-check-circle
            | Orden y aseo en instalaciones de almacenamiento de sustancias químicas peligrosas.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle
            | Inspección de instalaciones en donde se almacenan sustancias peligrosas. 

          li.l-p
            i.fas.fa-check-circle
            | Plan de emergencias. 

          li.l-p
            i.fas.fa-check-circle
            | Plan de evacuación. 
          
          li.l-p
            i.fas.fa-check-circle
            | Plan de contingencia contra derrames o fugas. 

          li.l-p
            i.fas.fa-check-circle
            | Plan de contingencia contra incendios. 

          li.l-p
            i.fas.fa-check-circle
            | Realización y evaluación de simulacros (p.22).



      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Imágen decorativa')


    separador
    #t_2_1.titulo-segundo.color-acento-contenido
       h2 2.1 Condiciones de operación

    p Para garantizar la operación del cuarto de almacenamiento se debe garantizar el manejo de una documentación indispensable, encontrando:


    .row.justify-content-center.align-items-center.mt-5
      .col-10.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='Imágen decorativa')

      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle
            | Instrucciones de la operación segura y correcta de todos los equipos incluyendo equipo de protección personal y del almacenamiento de los materiales peligrosos. 

          li.l-p
            i.fas.fa-check-circle
            | Hojas de seguridad para todas las sustancias peligrosas almacenadas. 

          li.l-p
            i.fas.fa-check-circle
            | Instrucciones y procedimientos sobre higiene, seguridad y medio ambiente. 
          
          li.l-p
            i.fas.fa-check-circle
            | Instrucciones y procedimientos sobre emergencias (CSC & MAVDT. s.f. p.23).

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
       h2 2.2 Planificación de la operación
    
    p Durante la planificación de la operación del lugar de almacenamiento se deben considerar las siguientes acciones:

    .row.justify-content-center.align-items-center.mt-5
      
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle
            | Antes de recibir las sustancias para almacenamiento se debe contar con las hojas de seguridad para su manipulación y almacenamiento.

          li.l-p
            i.fas.fa-check-circle
            | Mantener el lugar de almacenamiento con etiquetas alusivas a las sustancias, se puede seguir bajo el Decreto 1609 de 2002.

          li.l-p
            i.fas.fa-check-circle
            | Compra y alistamiento de elementos de protección para el personal que va a manipular las sustancias químicas.
          
          li.l-p
            i.fas.fa-check-circle
            | Determinar el volumen total máximo de almacenamiento total y por clase de sustancia.

          li.l-p
            i.fas.fa-check-circle
            | Realizar un plan del lugar del almacenamiento para definir áreas de acuerdo con la matriz de incompatibilidad.

          li.l-p
            i.fas.fa-check-circle
            | Definir los reportes y formatos que serán manejados para el control de las sustancias.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Imágen decorativa')

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
       h2 2.3 Equipo de seguridad personal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img6.png')})`}"
          )(alt="Imágen decorativa")
          .bloque-texto-g__texto.p-4
            p.mb-0 El manejo de sustancias químicas debe realizarse con todas las medidas de seguridad para el personal que se han indicado en laboratorio.
              br
              br
              | De forma general las medidas mínimas que se deben contemplar en los equipos de seguridad del personal son:  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-9
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle
            | Mantener ropa de trabajo separada de la ropa diaria, bien sea el uso de bata de laboratorio y otro elemento.

          li.l-p
            i.fas.fa-check-circle
            | No permitir el consumo de alimentos en la zona de manipulación de sustancias.

          li.l-p
            i.fas.fa-check-circle
            | Usar lentes de seguridad o anteojos de seguridad.
          
          li.l-p
            i.fas.fa-check-circle
            | Tener cofia (usar cabello recogido para las damas).

          li.l-p
            i.fas.fa-check-circle
            | Usar tapabocas o careta cuando se requiera.

          li.l-p
            i.fas.fa-check-circle
            | Tener guantes de nitrilo y cuando se use ácidos seguir recomendaciones y usar guantes con mayor grado de protección.

          li.l-p
            i.fas.fa-check-circle
            | Utilizar botas de seguridad.

          li.l-p
            i.fas.fa-check-circle
            | No dejar descubierto partes del cuerpo en el trabajo en laboratorio.

      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Imágen decorativa')

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
       h2 2.4 Manejo de residuos en el almacenamiento

    p El CCS y el MAVDT (s.f.) en las Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos definen:

    .row.justify-content-center.align-items-center   
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='Imágen decorativa')

      .col-lg-7
        p Todos los residuos incluyendo material de empaque, deberán ser manejados de una manera ambientalmente segura y responsable. Residuos potencialmente peligrosos incluyen productos obsoletos, productos fuera de especificación, material contaminado, residuos líquidos y material absorbente que ha sido utilizado para la limpieza de derrames. La disposición ambientalmente segura de estos residuos es a menudo difícil, lo que implica que en algunos casos se deba consultar a personal experto o a las autoridades ambientales. A menudo las hojas de seguridad, en la sección 13, pueden indicar la forma más adecuada de disposición de sustancias químicas (p.29).

    .row.align-items-center
      h4.bg2-tema2.text-white.mt-2.p-3 Plan de gestión integral de residuos peligrosos

      p.mt-3 De acuerdo con el Decreto 1076 de 2015 expedido por el presidente de la República denominado el Decreto único reglamentario del sector ambiente, en su título 7 define residuo peligroso como:

    .row.justify-content-center.align-items-center   
      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='Imágen decorativa')
      .col-lg-9
        .cajon.color-tema2.p-4
          p.mb-0 Aquel residuo o desecho que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar riesgos, daños o efectos no deseados, directos e indirectos, a la salud humana y el ambiente. Así mismo, se considerará residuo peligroso los empaques, envases y embalajes que estuvieron en contacto con ellos.

        p.mt-3 En cuanto a residuo determina “es cualquier objeto, material, sustancia, elemento o producto que se encuentra en estado sólido o semisólido, o es un líquido o gas contenido en recipientes o depósitos, cuyo generador descarta, rechaza o entrega porque sus propiedades no permiten usarlo nuevamente en la actividad que lo generó o porque la legislación o la normatividad vigente así lo estipula” (Decreto 1076 de 2015).

        p Todos los residuos que cumplan con las características descritas deben ser manipulados y manejados bajo un instrumento denominado plan de gestión integral el cual puede ser para residuos sólidos (PGIRS) o para residuos peligrosos (PGIRP).

    .row.justify-content-center.align-items-center   
      .col-10
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mt-3
      p El siguiente diagrama presenta las partes de un plan de gestión integral de residuos peligrosos:

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2.
        span Etapas del manejo integral de residuos

      figure
        img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imagen que contiene un esquema sobre las etapas del manejo integral de residuos, el cual está compuesto por: Componente I. Prevención y  minimizació Apunta hacia prevención y minimización Diagnóstico: - Identificación de fuentes - Codificación e identificación de peligrosidad - Cuantificación de la generación Fase 1 -Manejo interno -Acondicionamiento -Movilización interna -Almacenamiento Alternativas de Producción limpia Componente II. Manejo interno ambientalmente seguro Apunta hacia prevención y minimización Manejo intern: -Acondicionamiento -Movilización interna -Almacenamiento Medidas de contingencia Medidas para la entrega de residuos al transportador Fase 2 Componente III. manejo externo ambientalmente seguro Clasificación y descripción del residuo Cantidad de residuo Tratamiento y disposición final Datos del receptor y empresa trasportadora Fase 3 Componente IV. Ejecución, seguimiento y evaluación del plan Personal responsable de la ejecución del plan Capacitación Seguimiento y evaluación Cronograma de actividades Fase 4')
        figcaption Fuente: elaboración propia  

    .row.justify-content-center.align-items-center.mt-3
      .cajon.color-tema2-1.p-4
        p.mb-0 Como se puede denotar en el diagrama dentro de la FASE II de un plan de gestión integral de residuos peligrosos se contempla el almacenamiento. Por ello, es importante planear, dar a conocer, ejecutar y evaluar las acciones que se deben llevar a cabo frente a una contingencia.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
       h2 2.5 Plan de contingencia

    .row.justify-content-center.align-items-center   
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', alt='Imágen decorativa')

      .col-lg-8
        p Los planes de contingencia son instrumentos que se encuentran inmersos dentro de los llamados planes de emergencia de acuerdo con el Decreto 2157 de 2017 de presidencia, por medio del cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco del artículo 42 de la Ley 1523 de 2012 donde se describe que el plan de emergencia y contingencia (PEC):

        .bloque-texto-f.bg4-tema2.pt-4.px-5.mb-5.mt-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.mb-0 Es la herramienta de preparación para la respuesta que con base en unos escenarios posibles y priorizados (identificados en el proceso de conocimiento del riesgo), define los mecanismos de organización, coordinación, funciones, competencias, responsabilidades, así como recursos disponibles y necesarios para garantizar la atención efectiva de las emergencias que se puedan presentar: Igualmente precisa los procedimientos y protocolos de actuación para cada una de ellas minimizando el impacto en las personas, los bienes y el ambiente.

          <p style="text-align: end;"><b>- Ley 1523 de 2012</b></p> 


    .row.justify-content-center.align-items-center   

      p.mt-5 Bajo el Decreto 423 de 2006 de la Alcaldía mayor de Bogotá en el artículo 19°, se describe: 

      .col-lg-8
        .bloque-texto-f.bg4-tema2.pt-4.px-5.mb-5.mt-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.mb-0 Los Planes de Contingencia. En armonía con el artículo 8° del Decreto 332 de 2004, los Planes de Contingencia son instrumentos complementarios a los planes de emergencia, que proveen información específica para la atención de desastres o emergencias derivadas de un riesgo o territorio en particular. Un Plan de Contingencia desarrolla en detalle aspectos pertinentes para la respuesta que solo son propios del riesgo y el territorio al que esté referido. Los planes de contingencia se organizan por tipo de riesgo, tales como deslizamientos, inundaciones, incendios forestales, materiales peligrosos y aglomeraciones de público, entre otros.

          <p style="text-align: end;"><b> Decreto 423 de 2006</b></p> 

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt='Imágen decorativa')

    .row.align-items-center.mt-5
      h4.bg2-tema2-v2.text-white.mt-2.p-3 Componente de preparación para la respuesta a emergencias

      p.mt-3 Son las acciones de coordinación para responder ante una emergencia que se pueda presentar dentro de este se encuentra incluido:

      .row.justify-content-center.align-items-center.mt-3
        .col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img14.png', alt='Imágen decorativa')

        .col-lg-8
          ul.lista-ul--color.lista-ul--separador.fa-ul2
            li
              i.fas.fa-check-circle
              p.mb-0 <b>Capacitación:</b> formación del personal.

            li
              i.fas.fa-check-circle
              p.mb-0 <b>Simulaciones y simulacros:</b> realizar pruebas que permiten evaluaciones y mejora continua de los procesos.

            li
              i.fas.fa-check-circle
              p.mb-0 <b>Equipamiento:</b> herramientas, equipos y accesorios requeridos para dar respuesta.
            
            li
              i.fas.fa-check-circle
              p.mb-0 <b>Planeación y organización:</b> protocolos y procedimientos, equipo de respuesta con funciones y responsabilidades.

            li
              i.fas.fa-check-circle
              p.mb-0 <b>Inventario de recursos:</b> mantener actualizado los recursos físicos y humanos.

      
    .row.align-items-center.mt-5
      h4.bg2-tema2-v1.text-white.mt-2.p-3 Componente de ejecución

      p.mt-3 El cual define el marco de actuación de la entidad, teniendo en cuenta:

      .row.justify-content-center.align-items-center.mt-3
        .col-lg-7
          ul.lista-ul--color.lista-ul--separador.fa-ul2
            li
              i.fas.fa-check-circle
              | Objetivos y alcance.

            li
              i.fas.fa-check-circle
              | Niveles de emergencia.

            li
              i.fas.fa-check-circle
              | Alerta, alarma y niveles de activación.
            
            li
              i.fas.fa-check-circle
              | Protocolos y procedimientos de respuesta para cada tipo de emergencia.
        .col-lg-5.col-xs-12
          figure
            img(src='@/assets/curso/temas/tema2/img15.png', alt='Imágen decorativa')

        
    .row.align-items-center.mt-5
      h4.bg2-tema2-v1.text-white.mt-2.p-3 Medidas de contingencia

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='Imágen decorativa')

      .col-lg-8
        p Con el fin de disminuir el riesgo al cual puede verse sometido el personal, el medio ambiente o la propiedad en sí, donde se realicen las actividades de almacenamiento de sustancias se debe analizar los posibles eventos que se pueden dar y las medidas de contingencia que se deben realizar. 

        .cajon.color-tema2-1.p-4
          p.mb-0 Tomando como referencia al Servicio Nacional de Aprendizaje (SENA) en su documento de plan de gestión integral de residuos se pueden observar las siguientes medidas:
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8.mb-4
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Evento: derrame de sustancias peligrosas")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li
                  i.fas.fa-check-circle
                  | Ventilar el área y evacuar a las personas.
                li
                  i.fas.fa-check-circle
                  | Solicitar apoyo de la brigada de emergencias.
                li
                  i.fas.fa-check-circle
                  | Consultar la Ficha de Datos de Seguridad del producto.
                li
                  i.fas.fa-check-circle
                  | Usar los elementos de protección personal (guantes, gafas, respirador).
                li
                  i.fas.fa-check-circle
                  | No tocar ni caminar sobre el producto derramado.
                li
                  i.fas.fa-check-circle
                  | Ubicar la fuente del derrame y el tipo de sustancia. En caso de que el derrame ocurre fuera del dique de contención, se debe determinar hasta dónde ha llegado la sustancia y confinar el área del derrame con diques de material absorbente, evitando que las sustancias lleguen a sifones, senderos peatonales, vías de evacuación o entren contacto con otro líquido.
                li
                  i.fas.fa-check-circle
                  | Ubicarse dando la espalda a la dirección del viento para prevenir que posibles gases emanados le puedan afectar.
                li
                  i.fas.fa-check-circle
                  p.mb-0 Hacer uso de los <i>kits</i> antiderrames para recoger el producto.
                li
                  i.fas.fa-check-circle
                  | Depositar el material absorbente contaminado en bolsas rojas marcadas.
                li
                  i.fas.fa-check-circle
                  p.mb-0 Asegúrese que nuevamente se dote completamente el <i>kit</i> antiderrame.

          .row(numero="2" titulo="Goteo o fugas de sustancias líquidas químicas")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li
                  i.fas.fa-check-circle
                  p.mb-0 Recoger, limpiar y secar la sustancia con materiales absorbentes (<i>kits</i> antiderrames).
                li
                  i.fas.fa-check-circle
                  | Depositar el material absorbente contaminado en bolsas rojas marcadas.

          .row(numero="3" titulo="Incendio en la unidad de almacenamiento")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li
                  i.fas.fa-check-circle
                  | Mantener la calma y suspender las actividades.
                li
                  i.fas.fa-check-circle
                  | Dar aviso de inmediato al personal de seguridad y brigada de emergencia.
                li
                  i.fas.fa-check-circle
                  | Suspender el suministro de energía.
                li
                  i.fas.fa-check-circle
                  | Evacuar el área de personas, a un lugar cercano en el que no corran riesgos.
                li
                  i.fas.fa-check-circle
                  | Ubicar la fuente u origen del incendio.
                li
                  i.fas.fa-check-circle
                  | Si se trata de un conato de incendio y está capacitado, tratar de controlar con los extintores que se encuentran dispuestos en el área.
                li
                  i.fas.fa-check-circle
                  | Aislamiento: control del material combustible, sustancias peligrosas, cierre de suministros de combustible.
                li
                  i.fas.fa-check-circle
                  | Si no se logra controlar el conato solicitar apoyo externo (bomberos) y emitir alertas de evacuación a las áreas más cercanas.

          .row(numero="4" titulo="Lesiones con agujas o elementos corto punzantes")
            .col-md-12.mb-4.mb-md-0
              p Medidas de contingencia sugeridas:

              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li
                  i.fas.fa-check-circle
                  | Lavado de la herida con abundante agua y jabón bactericida.
                li
                  i.fas.fa-check-circle
                  | Si la contaminación se presenta en los ojos, se debe irrigar estos con abundante solución salina o agua limpia.
                li
                  i.fas.fa-check-circle
                  | Si la contaminación se presenta en la boca, se debe realizar enjuagues repetidos con abundante agua limpia.
                li
                  i.fas.fa-check-circle
                  | Se debe reportar a la ARL correspondiente.



      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='Imágen decorativa')



</template>

<script>
export default {
  name: 'Tema2',
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
