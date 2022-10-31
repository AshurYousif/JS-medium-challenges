function convertToZeros(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}

function convertToZeros2(array) {
  return new Array(array.length).fill(0)
}

function convertToZeros3(array) {
  return array.map(elem => 0)
}

let array = [5, 100, 0, 1, 1, 1, 1, 1]

console.log(convertToZeros3(array));
