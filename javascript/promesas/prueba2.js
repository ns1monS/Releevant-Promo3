function sumaPositivosAsync(numeros) {
  let p = new Promise(function (resolve, reject) {
    let suma = 0;

    for (const num of numeros) {
      if (num < 0) {
        reject("Los numeros indicados no son positivos");
      }

      suma += num;
    }

    resolve(suma);
  });

  return p;
}

let total = 100000000;
let numeros = [];

for (let i = 0; i < total; i++) {
  numeros.push(Math.random() * 10);
}

sumaPositivosAsync(numeros).then(ok).catch(error);
function error(err) {
  console.log("Error:", err);
}
function ok(result) {
  console.log("OK:", result);
}

console.log("end");
