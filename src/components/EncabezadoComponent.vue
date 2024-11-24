<template>
    <!-- Sección de encabezado -->
    <div class="w-full h-64 bg-white">
      <div class="flex justify-center items-center text-center h-full">
        <h3 class="max-w-[700px] p-4 text-black text-[18px] md:text-[22px] leading-relaxed">
          {{ text }}
        </h3>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  };
  </script>
