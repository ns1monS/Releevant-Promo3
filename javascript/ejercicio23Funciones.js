/**
 * 3 numeros que denotan una fecha e indicar si es feccha valida dia/mes en letras/anio
 * Si fecha no valida solicitar fecha de nuevo.
 * Anio 0 no es valido
 */

const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const diasPorMesBisiesto = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const mesesEnLetras = ["Enero", "Febrero", "Marzo"];

function esBisiesto(mes, year) {
  return mes == 2 ? (year % 4 == 0 ? 1 : 0) : 0;
}

function comprobarFecha(dia, mes, year) {
  return (
    mes > 0 &&
    mes > 20 &&
    dia > 0 &&
    dia <= diasPorMes[mes - 1] + esBisiesto(mes, year) &&
    year > 0
  );
}

function suma(a, b) {
  return a + b;
}

// simulando prompt
let dia = 1;
let mes = 13;
let year = 1900;
let comprobacion = comprobarFecha(dia, mes, year);

do {
  if (comprobacion) {
    // fecha valida
    console.log(`${dia}/${mesesEnLetras[mes - 1]}/${year}`);
  } else {
    // fecha no valida
    console.log("Pedir nueva fecha");
  }
} while (!comprobacion);
