<template>
    <div class="flex flex-col min-w-max justify-between bg-gray-200 ">
        <p class="flex items-center justify-center text-[30px] font-bold mt-12">Difusión</p>
        <div class="pt-4 m-4 flex flex-col items-center justify-center space-x-8  sm:flex-col md:flex-row lg:flex-row xl:flex-row">
            <!-- Primer div con "Portal AgroChile" arriba -->
            <div class="w-96 flex items-center justify-center mb-12 h-[500px] border-2 rounded-lg shadow-xl border-white bg-white hover:scale-105 transition-all duration-300">
                <iframe src="https://www.typeracer.com"
                height="100%"
                width="100%"
                frameborder="0"
                allowtransparency="true"
                class="rounded-lg"
                title="Publicación integrada"></iframe>
            </div>

            <!-- Segundo div -->
            <div class="w-96 flex items-center justify-center mb-12 h-[500px] border-2 rounded-lg shadow-xl border-white bg-white hover:scale-105 transition-all duration-300 relative">
            <!-- Título encima del iframe -->
    
            <!-- Iframe de Instagram incrustado -->
            <iframe 
                src="https://www.instagram.com/p/DCb1DR4RDBd/embed" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media" 
                width="100%" 
                height="100%" 
                class="rounded-lg"
            ></iframe>
        </div>
            <!-- Tercer div -->
            <div class="w-96 flex items-center justify-center mb-12 h-[500px] border-2 rounded-lg shadow-xl border-white bg-white hover:scale-105 transition-all duration-300">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7250275364906668032"
                height="100%"
                width="100%"
                frameborder="0"
                allowtransparency="true"
                class="rounded-lg"
                title="Publicación integrada"></iframe>
            </div>
        </div>
    </div>
</template>
