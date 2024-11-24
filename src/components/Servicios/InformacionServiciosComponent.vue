<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="flex flex-col md:flex-row">
  <!-- Imagen fija a la izquierda -->
  <div class="w-[100%] md:w-[100%]  flex items-center justify-center p-8 md:p-8">
    <img
      src="@/assets/search.png"
      alt="Ilustración AgroPred"
      class="w-[100%] h-[96%] object-cover"
    />
  </div>

      <!-- Contenedor de las tarjetas -->
      <div class="flex flex-col md:w-[100%] md:pt-8 md:pb-8 ">
        <!-- Tarjeta 1 -->
        <div
          class="flex flex-col md:flex-row bg-white w-[90%] h-auto md:h-48 m-4 rounded-lg hover:scale-105 shadow-xl duration-300 ease-out items-center"
        >
          <div class="flex-shrink-0 p-4">
            <img
              src="@/assets/search.png"
              alt="Google"
              class="h-16 w-16 object-contain"
            />
          </div>
          <div class="flex flex-col items-center justify-center text-center p-8">
            <p class="text-black text-xl md:text-2xl mb-4 font-mono font-bold">
              PREDICCIONES Y RECOMENDACIONES
            </p>
            <p class="text-black text-base md:text-lg">
              Con machine learning, AgroPred ofrece predicciones y
              recomendaciones personalizadas.
            </p>
          </div>
        </div>

        <!-- Tarjeta 2 -->
        <div
          class="flex flex-col md:flex-row bg-white w-[90%] h-auto md:h-48 m-4 rounded-lg hover:scale-105 shadow-xl duration-300 ease-out items-center"
        >
          <div class="flex-shrink-0 p-4">
            <img
              src="@/assets/search.png"
              alt="Google"
              class="h-16 w-16 object-contain"
            />
          </div>
          <div class="flex flex-col items-center justify-center text-center p-8">
            <p class="text-black text-xl md:text-2xl mb-4 font-mono font-bold">GESTIÓN Y TRAZABILIDAD</p>
            <p class="text-black text-base md:text-lg">
              Lleva un seguimiento detallado de cada etapa del proceso agrícola,
              desde la siembra hasta la cosecha.
            </p>
          </div>
        </div>

        <!-- Tarjeta 3 -->
        <div
          class="flex flex-col md:flex-row bg-white w-[90%]  h-auto md:h-48 m-4 rounded-lg hover:scale-105 shadow-xl duration-300 ease-out items-center"
        >
          <div class="flex-shrink-0 p-4">
            <img
              src="@/assets/search.png"
              alt="Google"
              class="h-16 w-16 object-contain"
            />
          </div>
          <div class="flex flex-col items-center justify-center text-center p-8">
            <p class="text-black text-xl md:text-2xl mb-4 font-mono font-bold">PLATAFORMA INTEGRAL</p>
            <p class="text-black text-base md:text-lg">
              Centraliza toda la información en un panel intuitivo, permitiendo
              una visión completa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
