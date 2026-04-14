let obj = { name: "A" };

let { name, role = "user" } = obj;

console.log(name, role); 