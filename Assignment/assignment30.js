let user = { user: "A", password: "x" };

let { password, ...rest } = user;

console.log(rest);