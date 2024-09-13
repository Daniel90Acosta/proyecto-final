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
`}

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
