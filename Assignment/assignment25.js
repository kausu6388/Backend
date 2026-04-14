let obj = { a: 1, b: 2 };

let result = Object.entries(obj).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

console.log(result); 