const departamentos = ["Dulces", "Bebidas", "Conservas"];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let costesAnuales = [];
let arrayDiciembre = [];
let indexMesMayor, indexMesMenor, indexMenorDiciembre;

mostrarDatos(costesAnuales, departamentos);

function mostrarDatos(arrayCostes, departamentos) {
  for (let i = 0; i < departamentos.length; i++) {
    console.log("\n " + "Departamento de: " + departamentos[i] + "\n");
    arrayCostes = rellenarArrayCostes();
    indexMesMayor = arrayCostes.indexOf(mayor(arrayCostes), 0);
    indexMesMenor = arrayCostes.indexOf(menor(arrayCostes), 0);
    console.log(
      "El mayor coste de producción de " +
        departamentos[i] +
        " ha sido en el mes " +
        dameMes(meses, indexMesMayor) +
        ", " +
        mayor(arrayCostes) +
        " €."
    );
    console.log(
      "El promedio anual de los costes de produccion de " +
        departamentos[i] +
        " ha sido de " +
        promedioAnual(arrayCostes) +
        " €."
    );
    console.log(
      "El menor coste de producción de " +
        departamentos[i] +
        " ha sido en el mes de " +
        dameMes(meses, indexMesMenor) +
        ", " +
        menor(arrayCostes) +
        " €. "
    );
    arrayDiciembre.push(arrayCostes[11]);
    arrayCostes = [];
  }

  indexMenorDiciembre = arrayDiciembre.indexOf(menor(arrayDiciembre), 0);
  console.log(
    "\n" +
      "El departamento que tuvo menor coste en Diciembre ha sido " +
      dameDepartamento(departamentos, indexMenorDiciembre) +
      " con un coste de " +
      menor(arrayDiciembre) +
      " €."
  );
  console.log(departamentos);
  console.log(arrayDiciembre);
}

function dameMes(arrayMeses, mes) {
  let month = "";
  for (let i = 0; i < arrayMeses.length; i++) {
    if (mes == i) {
      month = arrayMeses[i - 1];
    }
  }
  return month;
}

function dameDepartamento(arrayDpto, indexDpto) {
  let dpto = "";
  for (let i = 0; i < arrayDpto.length; i++) {
    if (indexDpto == i) {
      dpto = arrayDpto[i];
    }
  }
  return dpto;
}

function mayor(arrayCostes) {
  let mayor = arrayCostes[0];
  for (let i = 1; i < arrayCostes.length; i++) {
    if (arrayCostes[i] > mayor) {
      mayor = arrayCostes[i];
    }
  }
  return mayor;
}

function menor(arrayCostes) {
  let menor = arrayCostes[0];
  for (let i = 1; i < arrayCostes.length; i++) {
    if (arrayCostes[i] < menor) {
      menor = arrayCostes[i];
    }
  }
  return menor;
}

function promedioAnual(arrayCostes) {
  let suma = 0;
  for (let i = 0; i < arrayCostes.length; i++) {
    suma = suma + arrayCostes[i];
  }
  return (suma / meses.length).toFixed(2);
}

function rellenarArrayCostes() {
  let arrayCostes = [];
  for (let i = 0; i < meses.length; i++) {
    arrayCostes.push(Math.floor(Math.random() * (2000000 - 1000000)));
  }
  return arrayCostes;
}
