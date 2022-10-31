function filterOutFalsy(value1, value2) {
    return !value1 ? value1 : value2
}

console.log(filterOutFalsy(0, "test"));