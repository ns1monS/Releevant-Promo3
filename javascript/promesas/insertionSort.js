let array = [9,2,3,4,1]


for (let i = 1; i < array.length; i++) {
    let cambio = array[i]<
    let j
    for (j = i - 1; j >= 0 && array[j] > cambio; j--) {
        array[j + 1] = array[j]
    }
    array[j + 1] = cambio
  }
  console.log(array);