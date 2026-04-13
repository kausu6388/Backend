let arr = [1, 2, 2, 3, 1];
let result = [];

for (let num of arr) {
  if (!result.includes(num)) {
    result.push(num);
  }
}

console.log(result);