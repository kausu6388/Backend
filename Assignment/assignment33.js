let defaults = { retries: 3 };
let config = { timeout: 100 };

let result = {
  ...defaults,
  ...config
};

console.log(result); 