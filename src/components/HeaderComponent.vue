<template>
  <div class="contenedor">
    <!-- Encabezado principal -->
    <header class="sticky top-0 bg-white shadow-lg h-24 z-10">
      <div class="flex justify-between items-center px-6 py-8">
        <!-- Logo o nombre -->
        <div class="text-black font-mono font-bold tracking-[1px]">
          <router-link to="/" class="text-xl">Edu: Ia en el Aula</router-link>
        </div>

        <!-- Botón del menú móvil -->
        <label for="my-drawer-4" class="block md:hidden text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>

        <!-- Navegación -->
        <nav class="hidden md:flex space-x-4 lg:space-x-10 text-sm md:text-base text-left">
          <router-link
            to="/"
            active-class="text-black font-bold"
            class="hover-underline text-black font-mono font-bold tracking-[1px]"
          >
            Inicio
          </router-link>
          <router-link
            to="/nosotros"
            active-class="text-black font-bold"
            class="hover-underline text-black font-mono font-bold tracking-[1px]"
          >
            Sobre Nosotros
          </router-link>
          <router-link
            to="/servicios"
            active-class="text-black font-bold"
            class="hover-underline text-black font-mono font-bold tracking-[1px]"
          >
            Nuestro Servicio
          </router-link>
          <router-link
            to="/funcionamiento"
            active-class="text-black font-bold"
            class="hover-underline text-black font-mono font-bold tracking-[1px]"
          >
            Funcionalidades
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Drawer -->
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Contenido principal aquí -->
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotros">Sobre Nosotros</router-link></li>
          <li><router-link to="/servicios">Nuestro Servicio</router-link></li>
          <li><router-link to="/funcionamiento">Funcionalidades</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      menuAbierto: false,
    };
  },
};
</script>

  <style scoped>
  .hover-underline {
    position: relative;
    transition: color 0.5s ease-in-out;
  }
  
  .hover-underline:hover {
    color: black;
  }
  
  .hover-underline::after {
    content: '';
    background-color: black; /* Color de la línea de subrayado (ajustable) */
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  
  .hover-underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .router-link-active {
  color: black;
  font-weight: bold;
}

.router-link-active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

  </style>
  