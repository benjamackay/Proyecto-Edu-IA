<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SeccionComponent from '@/components/SeccionComponent.vue';
import EncabezadoComponent from '@/components/EncabezadoComponent.vue';
import InformacionServiciosComponent from '@/components/Servicios/InformacionServiciosComponent.vue';
</script>

<template>
       <HeaderComponent/> 
       <SeccionComponent texto="¿Qué Hacemos?" />
       <EncabezadoComponent text="Tecnología para mejorar la eficiencia y la salud de tus cultivos. AgroPred es una plataforma de agricultura de precisión diseñada para optimizar el manejo de plantaciones de paltas."/>
       <InformacionServiciosComponent/>
       <FooterComponent/>
</template>