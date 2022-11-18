const prompt = require("prompt-sync")();

// 1º Pedir n al usuario
const n = Number(prompt("Introduce un numero: "));

function esPar(numero) {
  return numero % 2 == 0;
}
// 2º Comprobar si es par
//    Si es par ----> sumo 2
//    si no par ----> sumo 1

function convertirPar(numero) {
  //   if (!esPar(numero)) {
  //     return numero + 1;
  //   } else {
  //     return numero + 2;
  //   }

  return !esPar(numero) ? numero + 1 : numero + 2;
}

// let s = n + convertirPar(n);
let s = n + (2 - (n % 2));

// 3. Guardar en suma el valor de s

let suma = s;
for (let i = 0; i < n - 1; i++) {
  suma += s;
  s += 2;
}
console.log(suma);
