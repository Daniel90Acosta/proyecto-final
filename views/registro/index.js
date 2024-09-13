const formulario = document.querySelector('#formulario');
const NameInput = document.querySelector('#name-input');
const EmailInput = document.querySelector('#email-input')
const passwordinput = document.querySelector('#password-input');
const MatchInput = document.querySelector('#match-input');
const btnRegistro = document.querySelector('#form-btn');
const notification = document.querySelector('#notificacion')
import { createNotification } from "../components/notificaciones.js"; 


//validar
//validaciones con regex
const emailVal =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm
const nameVal =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm

let valEmail = false
let valpass = false
let valMatch = false
let valName = false

NameInput.addEventListener('input',e=>{

    valName = nameVal.test(e.target.value)
    validar(NameInput,valName)

    /*if (e.target.value === '') {
        NameInput.classList.remove('focus:outline-green-700','outline-4')
        NameInput.classList.remove('focusoutline-red-700','outline-4')
        NameInput.classList.add('focus:outline-blue-600')
    }else{
        NameInput.classList.remove('focus:outline-blue-600')
        NameInput.classList.add('focus:outline-green-700','outline-4')
        valName = true 
    }*/

})

EmailInput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valEmail = emailVal.test(e.target.value)
    //console.log(valEmail);
    validar(EmailInput,valEmail)
   
})

passwordinput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valpass = passVal.test(e.target.value)
    validar(passwordinput,valpass)
    validar(MatchInput,valMatch);

})

MatchInput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valMatch = e.target.value === passwordinput.value
    validar(MatchInput,valMatch);
    validar(passwordinput,valpass)
    
})

formulario.addEventListener('submit',async e=>{
    e.preventDefault();

    try {
        const newUser ={
            name:NameInput.value,
            email:EmailInput.value,
            password:passwordinput.value,
            password2:MatchInput.value
        }   
        console.log(newUser);

        if (valName && valEmail && valpass && valMatch) {
            createNotification(false,'registro correcto')
            const response = await axios.post('/api/users',newUser)
            console.log(response);
        }else{
            createNotification(true,'alguno de los campos no cumple con los requerimientos solicitados')
        }


    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            createNotification(true, error.response.data.error);
        } else {
            console.error('Error desconocido:', error);
        }
        setTimeout(() => {
            if (notification) {
                notification.innerHTML = '';
            }
        }, 3000);
        console.log(error);
        
    }

})

const validar = (input,val)=>{

    btnRegistro.disabled = valName && valEmail && valpass && valMatch ? false : true

    if (val) {
        //caso de que el test sea trust 
        input.classList.remove('focus:border-blue-800')
        input.classList.remove('focus:border-red-700','border-4')
        input.classList.add('focus:border-green-700','border-4')

    }else if (input.value === ''){
        //en caso de que el campo este vacio colocar el azul predeterminado
        input.classList.remove('focus:border-green-700','border-4')
        input.classList.remove('focus:border-red-700','border-4')
        input.classList.add('focus:border-blue-800')

    }else{
        //en caso de que el test sea false
        input.classList.remove('focus:border-blue-800')
        input.classList.remove('focus:border-green-700')
        input.classList.add('focus:border-red-700','border-4')
    }
}