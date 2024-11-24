<template>
    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <!-- Contenedor del video -->
      <div class="flex flex-col items-center justify-center py-8 mx-4 sm:mx-8 md:mx-16">
        <div class="w-full max-w-sm bg-black rounded-lg md:w-[400px] lg:w-[400px] xl:w-[400px]">
          <!-- Video embed de YouTube -->
          <iframe 
            width="500" 
            height="300" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
            class="rounded-lg"
          ></iframe>
        </div>
      </div>
  
      <!-- Contenedor del texto en columna -->
      <div class="flex flex-col items-center justify-center mx-auto my-auto mt-8 ml-10 mr-10 mb-16 px-4 sm:px-8 md:px-16">
        <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-4">
          ¿Qué Es Edu: Ia en el Aula?
        </p>
        <p class="flex text-base justify-center items-center px-4 sm:px-8 md:px-0 w-[90%] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis labore deleniti incidunt libero quos distinctio atque, id impedit, unde porro, dolor numquam fugiat nulla odit nostrum sint a at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis veniam architecto explicabo fuga eius, id, optio eos itaque mollitia sint praesentium. Cum consectetur reiciendis, explicabo repellendus a quasi velit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, rerum quod sapiente tempora laudantium numquam dolorum. Totam unde corrupti veritatis vitae pariatur ad! Alias corrupti odit doloribus expedita mollitia iure.
        </p>
      </div>
    </div>
  </template>
  