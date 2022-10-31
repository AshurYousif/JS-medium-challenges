function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

function reverseString2(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString = string[i] + newString;
  }
  return newString;
}

function reverseString3(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString3("Ashur"));
