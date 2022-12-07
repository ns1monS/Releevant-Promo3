let array = [4, 2, 5, 6, 7, 8];

for (let i = 0; i < array.length; i++) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      let cambio = array[index];
      array[index] = array[index + 1];
      array[index + 1] = cambio;
    }
  }
} 

console.log(array);



