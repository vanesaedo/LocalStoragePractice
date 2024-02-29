/*Guardar en Local Storage los datos de contacto enviados de cada usuario
La estructura de datos de usuarios consistirá en un array de objetos [{..},{..},{..}...{..}] almacenado en Local Storage*/


//1. Creamos y subimos users que es un array vacío.
let users = JSON.stringify(
    [
])

localStorage.setItem("allUsers", users);

document.querySelector('form').addEventListener('submit',function(event){

   let currAllUsers = localStorage.getItem("allUsers");

   
//2. Almacenamos los datos recibidos del usuario en variables
const nombre = event.target.nameNombre.value;
const email = event.target.email.value;
const mensaje = event.target.textMensaje.value;
const url = event.target.nameUrl.value;


let newUser = JSON.stringify({name: nombre, email: email, mensaje:mensaje, url:url});
    
    users = currAllUsers.push(newUser);

    console.log(users);

})









//console.log(users);



/*

   







localStorage.setItem("users", users)

});

//1º Usuario hace Submit

//2º. Leo los valores

//3º. Creo el objeto con los valores

//4º. Bajo el array

// 5º. Push con el nuevo objeto

//6º. JSON.strignify


//localStorage.clear() - borrar 

/* 
localStorage.setItem('Nombre', nombre);
localStorage.setItem('Email', email);
localStorage.setItem('Mensaje', mensaje);
localStorage.setItem('Url', url);
 */

/* console.log(nombre);
console.log(email);
console.log(mensaje);
console.log(url); */

/* document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();


const nombre = event.target.nameNombre.value;
const email = event.target.email.value;
const mensaje = event.target.textMensaje.value;
const url = event.target.nameUrl.value;
console.log(url);

let users = JSON.stringify(
    [
    /* {
    username: nombre,
    email: email,
    message:mensaje,
    url :url
} ]
);

localStorage.setItem("users", users)

}); */