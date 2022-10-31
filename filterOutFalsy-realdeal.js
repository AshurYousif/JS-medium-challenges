function filterOutFalsy(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function filterOutFalsy2(array) {
  return array.filter((elem) => !!elem);
}

let array = ["", [], 0, null, undefined, "0"];

console.log(filterOutFalsy2(array));
