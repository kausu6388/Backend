let obj = { id: 1, name: "A", email: "a@x" };
let keys = ["id", "email"];

let result = keys.reduce((acc, key) => {
  if (key in obj) acc[key] = obj[key];
  return acc;
}, {});

console.log(result); 