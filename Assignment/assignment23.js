let user = { name: "A", password: "x" };

let { password, ...rest } = user;

console.log(rest); // 