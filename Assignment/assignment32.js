let obj = { fullName: "A", age: 20 };

let { fullName, ...rest } = obj;

let newObj = {
  name: fullName,
  ...rest
};

console.log(newObj); 