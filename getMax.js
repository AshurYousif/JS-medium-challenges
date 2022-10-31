function getMax(array) {
    let max = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
    }
    return(max)
}

let arr = [-300, -100, -200]

console.log(getMax(arr));