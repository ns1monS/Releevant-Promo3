const prompt = require("prompt-sync")();

let n = Number(prompt(`Introduce el número de caracteres :`));

for (let linea = 0; linea < n; linea++) {
  console.log(imprimir(linea, " ") + imprimir(n - linea, "*"));
}

function imprimir(cantidad, caracter) {
  let linea = "";
  for (let i = 0; i < cantidad; i++) {
    linea += caracter;
  }
  return linea;
}

// function union(nunion) {
//   for (let linea = 0; linea < nunion; linea++) {
//     console.log(espacios(linea) + asteriscos(nunion - linea));
//   }
// }

// function espacios(mEspacios) {
//   let linea = "";
//   for (let i = 0; i < mEspacios; i++) {
//     linea = linea + " ";
//   }
//   return linea;
// }

// function asteriscos(mAsteriscos) {
//   let linea = "";
//   for (let i = 0; i < mAsteriscos; i++) {
//     linea = linea + "*";
//   }
//   return linea;
// }

// union(n)
