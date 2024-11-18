<template>
    <div class="flex flex-row items-center bg-gray-200 h-auto w-full">
      <p class="text-center text-2xl font-mono ml-20 mr-20 w-auto">
        Contamos con el apoyo de
      </p>
      <!-- Contenedor de cada logo -->
      <div class="flex justify-evenly m-4 items-center h-32 w-32 md:h-64 md:w-64 bg-gray-200 rounded-lg border">
        <img
          src="@/assets/facebook.png"
          alt="Batman"
          class="h-24 w-24 object-contain filter grayscale hover:grayscale-0 hover:scale-125 transition duration-500 ease-in-out"
        />
      </div>
      <div class="flex justify-center m-4 items-center h-32 w-32 md:h-64 md:w-64 bg-gray-200 rounded-lg border">
        <img
          src="@/assets/instagram.png"
          alt="Alas"
          class="h-24 w-24 object-contain filter grayscale hover:grayscale-0 hover:scale-125 transition duration-500 ease-in-out"
        />
      </div>
      <div class="flex justify-center m-4 items-center h-32 w-32 md:h-64 md:w-64 bg-gray-200 rounded-lg border">
        <img
          src="@/assets/search.png"
          alt="Google"
          class="h-24 w-24 object-contain filter grayscale hover:grayscale-0 hover:scale-125 transition duration-500 ease-in-out"
        />
      </div>
      <div class="flex justify-center m-4 items-center h-32 w-32 md:h-64 md:w-64 bg-gray-200 rounded-lg border mr-20">
        <img
          src="@/assets/photoshop.png"
          alt="Google"
          class="h-24 w-24 object-contain filter grayscale hover:grayscale-0 hover:scale-125 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  </template>
  