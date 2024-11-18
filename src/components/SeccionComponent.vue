<template>
    <div class="flex justify-center items-center w-full bg-gray-500 h-64">
        <img
      src="@/assets/facebook.png"
      alt="Imagen 1"
      class="image1 absolute top-40 left-72 opacity-50 w-16 h-16"
    />
    <img
      src="@/assets/facebook.png"
      alt="Imagen 1"
      class="image2 absolute top-40 right-72 opacity-50 w-16 h-16"
    />
      <p class="text-[35px] font-mono text-center text-white">
        {{texto}}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      texto: {
        type: String,
        required: true
      }
    }
  };
  </script>

  <style scoped>
/* Añadimos animación continua */
.image1{
  position: absolute;
  animation: move1 5s infinite alternate ease-in-out; /* Animación continua */
}

@keyframes move1 {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-50px) translateY(0px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.image2{
  position: absolute;
  animation: move2 5s infinite alternate ease-in-out; /* Animación continua */
}

@keyframes move2 {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(0px) translateY(50px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}


</style>