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

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Mecanismos de coagulación")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mecanismos de coagulación
            p Las características del agua cruda determinan el mecanismo de coagulación que se debe utilizar, dentro de los cuales se puede encontrar según el RAS (2017): 

            ul.lista-ul--color.lista-ul--separador.fa-ul2
              li
                i.fas.fa-check-circle
                P #[b Adsorción y neutralización de carga:] se basa en la acción de la energía electroquímica sobre los coloides, al existir una acción electrostática entre el coagulante y las partículas en suspensión.

              li
                i.fas.fa-check-circle
                P #[b Barrido:] se presenta cuando se adicionan cantidades elevadas de sales metálicas como el aluminio o el hierro, que exceden el límite de solubilidad del compuesto en el agua. Esto ocasiona la precipitación rápida del hidróxido metálico, como Al2(OH)3 o Fe (OH)3, que forma una masa esponjosa. Las partículas coloidales son removidas al quedar atrapadas en el precipitado.

              li
                i.fas.fa-check-circle
                P #[b Puente químico:] se presenta cuando las cadenas poliméricas del coagulante se entrelazan con las partículas coloidales y se unen entre sí.

              P Una mezcla de los mecanismos anteriores (p.15).

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='alt')

      .py-3.py-md-4(titulo="The splendor of the mystery")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='alt')

      .py-3.py-md-4(titulo="The splendor of the mystery")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='alt')














      
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
