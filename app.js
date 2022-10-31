function convertToBoolean(array) {
  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) {
      array[i] = true;
    } else {
      array[i] = false;
    }
  }
  return array;
}

function convertToBoolean2(array) {
    return array.map(elem => !!elem)
}

let array = [500, 0, "Ashur", "", []];

console.log(convertToBoolean2(array));
