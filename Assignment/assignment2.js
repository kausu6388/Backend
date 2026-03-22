const arr = [1, 2, 3, 4];
let ans = 0;

for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
}

console.log(ans); 

// using reduce

const arr2 = [1, 2, 3, 4];

const tans = arr2.reduce((sum, num) => sum + num, 0);

console.log(ans); // 10