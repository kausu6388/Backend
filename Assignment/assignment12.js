let arr = ['a', 'b', 'c'];
let target = 'b';

let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i;
    break;
  }
}

console.log(index);