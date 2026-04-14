// shallow merge
let a = { x: 1 };
let b = { y: 2 };

let result = { ...a, ...b };

console.log(result); 



// deep merge
let a2 = { user: { name: "Aman" } };
let b2 = { user: { age: 22 } };

let result2 = {
  user: {
    ...a.user,
    ...b.user
  }
};

console.log(result);