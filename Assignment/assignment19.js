let arr = [3, 1, 2, 3, 2];

let result = [...new Set(arr)].sort((a, b) => a - b);

console.log(result); 