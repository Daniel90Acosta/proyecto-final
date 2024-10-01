const emailInput = document.querySelector('#email-input')
const passwordinput = document.querySelector('#password-input')
const formulario = document.querySelector('#formulario')

const datosLogin ={
    email:'',
    password:''
}

emailInput.addEventListener('input',e=>{
    datosLogin.email = e.target.value;
    //console.log(datosLogin.email);

})

passwordinput.addEventListener('input',e=>{
    datosLogin.password = e.target.value;
    //console.log(datosLogin.email);

})

formulario.addEventListener('submit', async e => {
    e.preventDefault();
  
    if (datosLogin.email && datosLogin.password) {
      const response = await axios.post('/api/users/login', datosLogin);
  
      if (response.status === 200) {
        window.location.href = '/'; // Redirige a la página principal
        localStorage.setItem('logueado', 'true');
      }
    }
  });