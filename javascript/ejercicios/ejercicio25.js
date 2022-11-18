const { ClientSession } = require("mongodb");

const prompt = require("prompt-sync")();

// 25. Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de A y B con ese
//     tamaño. Las A sólo se verán en el borde del cuadrado y las B en el interior.
//     Ejemplo, para lado = 4 escribiría:

//1ºPedir el valor de n
const n = Number(prompt("Introduce numero de caracteres: "));

//2º Pintar linea superior

function lineaBase(arriba) {
  let linea = "";
  for (let i = 0; i < arriba; i++) {
    linea += "*";
  }
  return linea;
}

function medio(centro) {
  let linea = "*";
  for (let i = 0; i < centro - 2; i++) {
    linea += " ";
  }
  return linea + "*";
}
function relleno(nRelleno) {
  for (let i = 0; i < nRelleno; i++) {
    console.log(medio(nRelleno));
  }
}

console.log(lineaBase(n));
relleno(n);
console.log(lineaBase(n));