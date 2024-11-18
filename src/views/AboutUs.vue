<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SeccionComponent from '@/components/SeccionComponent.vue';
import SobreNosotros from '@/components/AboutUs/SobreNosotros.vue';

</script>

<template>
       <HeaderComponent/> 
       <SeccionComponent texto="Acerca de Nosotros"/>
       <SobreNosotros/>
       <FooterComponent/>
</template>