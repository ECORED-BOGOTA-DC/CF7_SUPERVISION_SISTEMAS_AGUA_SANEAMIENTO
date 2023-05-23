<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='alt')  
      
      .col-lg-8
        p Estimado aprendiz, bienvenido a este componente formativo denominado “Manejo de insumos químicos”, por medio del cual podrá conocer los diferentes procesos sobre la potabilización del agua, principalmente los que tienen que ver con el almacenamiento de insumos y la operación sobre las unidades de almacenamiento.

        .cajon.color-azul.p-3
          p.mb-0 #[b Recuerde:] “una inadecuada utilización de insumos puede causar daños en la salud humana”.



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
