function saludo (){
    console.log("Hola que tal!")
}

function hola(){
    let iniciarsesion = document.getElementById("iniciarsesion");
    iniciarsesion.innerHTML = "<p>hola</p>";
}
//funcion para añadir productos al carrito y vaya contando
function carrito(){
    let añadiralcarrito = document.getElementById("carrito");
    let cantidad = parseInt(añadiralcarrito.innerHTML);//con parseInt cambia el string por un numero
    añadiralcarrito.innerHTML = `${++cantidad}`;
}
//funcion para hacer loging y ver si es correcto o incorrecto
function iniciarSesion(){

    const usuario = "mmv@hotmail.com";
    const contrasenia = "1234";

    let user = document.getElementById("email").value;
    let pass = document.getElementById("contrasenia").value;


    if(user === usuario && pass === contrasenia){
        alert("Usuario y contraseña correcta")
    } else {
       const elementos = document.getElementById("error");

       document.getElementsByClassName("error")[0].getElementsByClassName.style.display = "flex";
       console.log(document.getElementById("error"));
    }
    
}