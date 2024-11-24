<template>
  <!-- Sección de tarjetas -->
  <div class="bg-gray-300 w-full min-h-screen py-10 pb-10 md:py-0 md:pb-0">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 justify-evenly items-center md:p-10">
      <!-- Primera tarjeta -->
      <div class="flex justify-center items-center bg-white w-[90%] md:w-[45%] h-80 border rounded-lg p-4 text-center text-black shadow-md hover:scale-105 duration-300 transition-all">
        <div class="flex flex-col items-center">
          <img
            src="@/assets/photoshop.png"
            alt="Google"
            class="h-24 w-24 object-contain flex items-center justify-center"
          />
          <h3 class="mt-4 text-[20px] font-mono font-bold">Análisis en Tiempo Real</h3>
          <p class="ml-8 mr-8 mt-4  max-w-full">
            Analiza en tiempo real los datos de sensores como humedad, temperatura y nutrientes del suelo.
          </p>
        </div>
      </div>

      <!-- Segunda tarjeta -->
      <div class="flex justify-center items-center bg-white w-[90%] md:w-[45%] h-80 border rounded-lg p-4 text-center text-black shadow-md hover:scale-105 duration-300 transition-all">
        <div class="flex flex-col items-center">
          <img
            src="@/assets/photoshop.png"
            alt="Google"
            class="h-24 w-24 object-contain flex items-center justify-center"
          />
          <h3 class="mt-4 text-[20px] font-mono font-bold">Alertas Inteligentes</h3>
          <p class="ml-8 mr-8 mt-4 max-w-full">
            Recibe alertas por correo o SMS cuando se detecten valores fuera de los rangos establecidos.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 justify-evenly items-center py-4 md:p-10 md:pt-0">
      <!-- Tercera tarjeta -->
      <div class="flex justify-center items-center bg-white w-[90%] md:w-[45%] h-80 border rounded-lg p-4 text-center text-black shadow-md hover:scale-105 duration-300 transition-all">
        <div class="flex flex-col items-center">
          <img
            src="@/assets/photoshop.png"
            alt="Google"
            class="h-24 w-24 object-contain flex items-center justify-center"
          />
          <h3 class="mt-4 text-[20px] font-mono font-bold">Reportes Automatizados</h3>
          <p class="ml-8 mr-8 mt-4 max-w-full">
            Genera reportes automáticos para decisiones basadas en datos históricos y actuales.
          </p>
        </div>
      </div>

      <!-- Cuarta tarjeta -->
      <div class="flex justify-center items-center bg-white w-[90%] md:w-[45%] h-80 border rounded-lg p-4 text-center text-black shadow-md hover:scale-105 duration-300 transition-all">
        <div class="flex flex-col items-center">
          <img
            src="@/assets/photoshop.png"
            alt="Google"
            class="h-24 w-24 object-contain flex items-center justify-center"
          />
          <h3 class="mt-4 text-[20px] font-mono font-bold">Integración y Adaptabilidad</h3>
          <p class=" ml-8 mr-8 mt-4 max-w-full">
            Accede desde cualquier dispositivo conectado a internet, lo que permite una visión completa en tiempo real.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
