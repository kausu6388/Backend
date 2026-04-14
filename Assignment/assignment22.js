let obj = { name: "Aman" };

let newObj = {
  ...obj,
  role: "admin"
};

console.log(newObj); // { name: "Aman", role: "admin" }





let obj1 = { name: "Aman", role: "user" };

let updated = {
  ...obj,
  role: "admin"
};

console.log(updated); // { name: "Aman", role: "admin" }