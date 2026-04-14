let user = {
  name: "A",
  address: { city: "Old", zip: 123 }
};

let updated = {
  ...user,
  address: {
    ...user.address,
    city: "New"
  }
};

console.log(updated);
