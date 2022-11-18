const prompt = require("prompt-sync")();

/*
1º pedir contraseña

2º comprobar contraseña

3º Si es correcta --------> salir del programa 

4º si no lo es ----------> volver a intentarlo y volver al principio

*/

const passwordCorrecta = "Eureka";
let intentos = 3;
let mensajeMostrar = " Password incorrecta ";

//2º comprobar contraseña

function comprobarPassword(password) {
  return password === passwordCorrecta;
}
do {
  //1º pedir contraseña
  const passwordSolicitada = prompt("Introduce la contraseña correcta: ");
  //3º Si es correcta --------> salir del programa
  if (comprobarPassword(passwordSolicitada)) {
    mensajeMostrar = " Password correcta ";

    intentos = 0;
  }
  //4º si no lo es ----------> volver a intentarlo y volver al principio
} while (--intentos > 0);

console.log(mensajeMostrar);
