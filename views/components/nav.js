const navegacion = document.querySelector('#navegacion')

const CrearNavHome=()=>{
navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>
            
              <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
                <a href="/admin/" class="text-white font-bold px-4 py-2 rounded-lg transition duration-150 ease-in-out hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Admin Panel</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
                <a href="/admin/" class="text-white font-bold px-4 py-2 rounded-lg transition duration-150 ease-in-out hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Admin Panel</a>
            </div>
        </div>
         <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-blue-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-blue-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div>
`}

const CrearNav1=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        
            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>

            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-green-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-green-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div>`
}

const CrearNav2=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        
            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>

            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-purple-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-purlpe-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-purple-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-purple-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-purple-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-purple-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-purple-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div> `
}

const CrearNav3=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        
            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>

            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-pink-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-pink-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div>`
}

const CrearNav4=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        
            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>

            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-red-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-red-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div>`
}

const CrearNav5=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        
            <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>
        
            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-orange-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-orange-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div> `
}

const CrearNav6=()=>{
    navegacion.innerHTML=`
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
            
            <!--movil-->
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

             <form  class="relative">
                <input type="text" id="search-input" placeholder="Buscar producto" class="rounded-lg text-sm block w-full p-2.5 shadow-lg">
                <button id="search-clear" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 text-gray-500 hover:text-gray-700 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="search-results" class="absolute top-full left-0 w-full bg-white p-2 border-b border-gray-300 z-10 hidden rounded-lg pt-6 divide-y divide-slate-700 ">
                    <!-- Aquí se mostrarán los resultados de la búsqueda -->
                </div>
            </form>
        
            <!--pc-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
            </div>  

            <!--menu movil-->
            <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
            </div>
        </div>
            <!--pc-->
        <div class="font-semibold text-sm md:font-bold md:text-base bg-yellow-500 text-white shadow-lg">
                <nav class=" flex gap-3 md:gap-14 justify-center">
                <a href="/apartado-1/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Salud y Medicamentos</a>
                <a href="/apartado-2/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Belleza</a>
                <a href="/apartado-3/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Cuidado Personal</a>
                <a href="/apartado-4/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Bebe</a>
                <a href="/apartado-5/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Alimentos y Bebidas</a>
                <a href="/apartado-6/" class="hover:bg-yellow-700 transition ease-in-out rounded-lg">Hogar, Mascotas y otros</a>
                </nav>
        </div>`
}

const CrearNavRegistro=()=>{
    navegacion.innerHTML=`
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
                <!--movil-->
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                
                
                <!--pc-->
                <div class="hidden md:flex flex-row gap-4">
                    <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
                </div>  
    
                 <!--menu movil-->
                <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                    <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Login</a>
                </div>
            </div>
`}

const CrearNavLogin=()=>{
    navegacion.innerHTML=`
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="hover:bg-blue-400 p-2 rounded-lg" href="/"><p class="text-blue-50 font-bold text-xl">Farmacia APP</p></a>
                <!--movil-->
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                
                
                <!--pc-->
                <div class="hidden md:flex flex-row gap-4">
                    <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
                </div>  
    
                 <!--menu movil-->
                <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0  justify-center text-center  flex-col gap-4 hidden">
                    <a href="/registro/" class="text-black bg-white hover:text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out">Registro</a>
                </div>
            </div>
`}

//agregar validaciones 
if (window.location.pathname === '/') {
    //crear la barra de navegacion para la pagina del home 
    CrearNavHome()
}else if(window.location.pathname === '/registro/'){
     //crear la barra de navegacion para la pagina de registro
    CrearNavRegistro()
}else if(window.location.pathname === '/login/'){
    //crear la barra de navegacion para la pagina de login
   CrearNavLogin()
}else if(window.location.pathname === '/apartado-1/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav1()
}else if(window.location.pathname === '/apartado-2/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav2()
}else if(window.location.pathname === '/apartado-3/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav3()
}else if(window.location.pathname === '/apartado-4/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav4()
}else if(window.location.pathname === '/apartado-5/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav5()
}else if(window.location.pathname === '/apartado-6/'){
    //crear la barra de navegacion para la pagina de login
   CrearNav6()
}

//para el menu hacer el despliegue movil y agregar la x 
const navBtn = navegacion.children[0].children[1]
//console.log(navBtn);

navBtn.addEventListener('click',e=>{
    //console.log('click');
    const menuMobile = navegacion.children[0].children[3]
    //console.log(menuMobile);

    if (!navBtn.classList.contains('active')) {
        //menu en movil cerrado y se mostrara el despliegue
        navBtn.classList.add('active')
        navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />'
        menuMobile.classList.remove('hidden')
        menuMobile.classList.add('flex')
    
    } else {
      navBtn.classList.remove('remove')
      navBtn.innerHTML = '<path stroke-linecap="round"  stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
      menuMobile.classList.remove('flex')
      menuMobile.classList.add('hidden')
    }

})

document.addEventListener('DOMContentLoaded', function() {
    // Agregar un retraso antes de intentar acceder al elemento navegacion
    setTimeout(function() {
      // Mostrar botón de cerrar sesión cuando se inicia sesión
      if (localStorage.getItem('logueado') === 'true') {
        const loginRegistro = navegacion.querySelector('div.hidden');
        if (loginRegistro !== null) {
          loginRegistro.innerHTML = `
            <a href="#" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Cerrar sesión</a>
          `;
        }
      } else {
        const loginRegistro = navegacion.querySelector('div.hidden');
        if (loginRegistro !== null) {
          loginRegistro.innerHTML = `
            <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
            <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
          `;
        }
      }
  
      // Agregar evento al botón de cerrar sesión
      const cerrarSesion = navegacion.querySelector('.hidden a');
      cerrarSesion.addEventListener('click', (e) => {
        // Mostrar notificación de confirmación
        if (confirm('¿Quieres cerrar sesión?')) {
          // Cerrar sesión y mostrar botones de login y registro
          localStorage.setItem('logueado', 'false');
          localStorage.removeItem('logueado'); // Add this line to remove the item
          cerrarSesionYMostrarBotones();
        }
      });
  
      // Función para cerrar la sesión y mostrar los botones de login y registro
      function cerrarSesionYMostrarBotones() {
        const loginRegistro = navegacion.querySelector('div.hidden');
        if (loginRegistro !== null) {
          loginRegistro.innerHTML = `
            <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
            <a href="/registro/" class="text-black bg-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out">Registro</a>
          `;
        }
      }
    }, 1000);
  });
