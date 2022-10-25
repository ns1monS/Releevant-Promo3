
const nombres=["juan","pepe","lola"];

const saludar= function(x) {
    console.log(`hola ${x}`);
};

for (let nombre of nombres){
    saludar(nombre)
}