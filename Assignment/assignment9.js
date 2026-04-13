let arr = [1, 2, 3, 4];
let k = 1;

k = k % arr.length;

let result = [
  ...arr.slice(-k),
  ...arr.slice(0, arr.length - k)
];

console.log(result);