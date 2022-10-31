function removeApples(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "Apple") {
        newArray.push(array[i])
    }
  }
  return newArray;
}

function removeApples2(array) {
    return array.filter(elem => elem !== "Apple")
}

let array = ["Banana", "Orange"];

console.log(removeApples(array));
