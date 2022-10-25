const prompt = require("prompt-sync")();

//1. Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo que
//   intercambie los valores de ambas variables y muestre cuánto valen al final cada una de ellas(recuerda la asignación).

/*
let a = prompt("Introduce la variable a: ");
let b = prompt("Introduce la variable b: ");

let save = a;

a = b;
b = save;

console.log(`a=${a} y b = ${b}`);

*/

//2. Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

/*
let a = prompt("Introduce la variable a: ");
let b = prompt("Introduce la variable b: ");

let suma = Number(a) + Number(b);
let resta = Number(a) - Number(b);
let mult = Number(a) * Number(b);
let div = Number(a) / Number(b);

console.log(`la suma es ${suma}`);
console.log(`la resta es ${resta}`);
console.log(`la mult es ${mult}`);
console.log(`la division es ${div}`);

*/

//3. Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales (recuerda
//  usar la estructura condicional if). Una vez terminado, haced lo mismo con 3 números diferentes.

/*
let a = prompt("Introduce la variable a: ");
let b = prompt("Introduce la variable b: ");

if (a > b){
    console.log(`${a} es mayor que ${b}`);
}else{
    console.log(`${b} es mayor que ${a}`);
};

*/

//4. Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el
// producto de los tres y si no lo es, imprimirá la suma.

/*
let a = prompt("Introduce la variable a: ");
let b = prompt("Introduce la variable b: ");
let c = prompt("Introduce la variable c: ");

let mult = (a *b * c);
let sum = (Number(a) + Number(b) + Number(c))

if ( a < 0){
    console.log(mult)
}else{
    console.log(sum)
}
*/

//5. Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
// negativo o nulo.

/*


let a = prompt("Introduce la variable a: ");

if (a > 0){
    console.log(`${a} es un numero positivo`);
}else{
    if(a < 0){
        console.log(`${a} es un numero negativo`);
    }else{
        console.log(`${a} es un numero negativo`);
    }
}

*/

//6. Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
// Pista: para determinar el resto de una división, se usa la operación módulo %.

/*       ESTA FATAL HACER DE NUEVO


let a = prompt("Introduce la variable a: ");
let division = a / 2;

if ((division = 0)) {
  console.log(`${a} es un numero par`);
} else {
  if (division < 0) {
    console.log(`${a} es un numero nulo`);
  } else {
    console.log(`${a} es un numero impar`);
  }
}
*/
//7. Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
// calcule e imprima el cambio que se debe entregar al cliente.



/*
let pago = prompt("Introduce el pago correspondiente ");
let articulo = 1000

let cambio = (pago - articulo)

if (pago > articulo){
    console.log(`Su cambio es de ${cambio}`)
}else{
    console.log(`le faltan ${cambio * (-1)} por pagar`)
}
*/




//8. Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
//si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.


/*

let sueldo = prompt("Introduce el pago correspondiente ");

let incremento = Number(sueldo)+Number(sueldo*(0.15));

if (sueldo < 1000){
    console.log(`sueldo incrementado ${incremento}`)
}else{
    console.log(`El sueldo se mantiene ${sueldo}`)
}


*/