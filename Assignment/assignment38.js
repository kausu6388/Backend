const orders = [
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:300, status:"pending" },
  { id:3, userId:1, total:200, status:"completed" },
  { id:4, userId:3, total:700, status:"completed" }
];

const grouped = orders.reduce((acc, order) => {
  if (!acc[order.userId]) {
    acc[order.userId] = [];
  }
  acc[order.userId].push(order);
  return acc;
}, {});

console.log(grouped);