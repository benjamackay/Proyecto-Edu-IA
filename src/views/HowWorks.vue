<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SeccionComponent from '@/components/SeccionComponent.vue';
import FuncionalidadesComponent from '@/components/Funcionalidades/FuncionalidadesComponent.vue';
import EncabezadoComponent from '@/components/EncabezadoComponent.vue';
</script>

<template>
       <HeaderComponent/>
       <SeccionComponent texto="¿Cómo Funciona?" />
       <EncabezadoComponent text="Tecnología adaptada a tu campo para decisiones más precisas. AgroPred integra múltiples sensores y datos en una plataforma intuitiva, mejorando la gestión y productividad de tu cultivo en tiempo real."/>
       <FuncionalidadesComponent/>
       <FooterComponent/>
</template>