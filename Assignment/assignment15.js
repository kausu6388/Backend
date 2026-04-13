let arr = [1, 2, 3, 4];
let k = 2;

let result = [];
let sum = 0;

// first window
for (let i = 0; i < k; i++) {
  sum += arr[i];
}
result.push(sum);

// slide window
for (let i = k; i < arr.length; i++) {
  sum = sum + arr[i] - arr[i - k];
  result.push(sum);
}

console.log(result); // [3,5,7]