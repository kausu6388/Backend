let obj = { a: { b: 2 } };

let deep = JSON.parse(JSON.stringify(obj));

deep.a.b = 100;

console.log(obj);