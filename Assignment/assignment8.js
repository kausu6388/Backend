let arr = [1, [2, 3], 4];
let result = [];

for (let val of arr) {
  if (Array.isArray(val)) {
    result.push(...val); // spread inner array
  } else {
    result.push(val);
  }
}

console.log(result); 