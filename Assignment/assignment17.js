let arr = [1, 2, 3];
let i = 1;

let result = [
  ...arr.slice(0, i),
  ...arr.slice(i + 1)
];

console.log(result); 