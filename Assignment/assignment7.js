let arr = ['a', 'b', 'a', 'c'];

let freq = {};

for (let val of arr) {
  if (freq[val]) {
    freq[val]++;
  } else {
    freq[val] = 1;
  }
}

console.log(freq); 