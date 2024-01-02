function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capAll(str = "") {
  let temp = "";
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp += j == 0 ? arr[i].charAt(0).toUpperCase() : arr[i].charAt(j);
    }
    temp += " ";
  }
  return temp;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function words(str) {
  return str.trim().split(/ /g).length;
}

function clean(str) {
  return str.trim();
}

function randomize(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    const random = {
      1: Math.floor(Math.random() * chars.length),
      2: Math.floor(Math.random() * chars.length),
    };
    let first = chars[random[1]];
    let second = chars[random[2]];
    chars[random[1]] = second;
    chars[random[2]] = first;
  }
  return chars.join("");
}

function randomCase(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    const random = Math.random() < 0.5;
    if (random) temp += str.charAt(i).toUpperCase();
    else temp += str.charAt(i).toLowerCase();
  }
  return temp;
}
function trunc(str, length, withChar = "...") {
  return str.length > length ? str.slice(0, length) + withChar : str;
}

function numerize(str) {
  return str
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/g, "0");
}
function occurences(str, occ) {
  return str.split(occ).length - 1 != -1 ? str.split(occ).length - 1 : 0;
}

module.exports = {
  capitalize,
  capAll,
  clean,
  numerize,
  occurences,
  randomCase,
  randomize,
  reverse,
  words,
};
