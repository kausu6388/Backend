let arr = [7, 3, 9, 0];

let min = arr.reduce((min, val) => (val < min ? val : min), Infinity);

console.log(min); 